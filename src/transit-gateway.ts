import * as core from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { TransitGatewayAttachment } from './transit-gateway-attachment';
import { TransitGatewayRouteTable } from './transit-gateway-route-table';

export enum TGWFeature {
  ENABLE = 'enable',
  DISABLE = 'disable',
}

export interface ITransitGateway extends core.IResource {
  /**
   * The ID of the transit gateway
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html#aws-resource-ec2-transitgateway-return-values
   * @attribute
   */
  readonly transitGatewayId: string;

  /**
   * The ARN of the transit gateway in format arn:aws:ec2:${AWS::Region}:${AWS::AccountId}:transit-gateway/${TransitGatewayLogicalID}
   * @attribute
   */
  readonly transitGatewayArn: string;

}

abstract class TransitGatewayBase extends core.Resource implements ITransitGateway {
  public abstract readonly transitGatewayId: string;
  public abstract readonly transitGatewayArn: string;

  /**
   * Adds a route table to this Transit Gateway, use .addRoutes(...) to add routes to this table
   */
  addRouteTable(id: string, tags?: core.Tag[]): TransitGatewayRouteTable {
    return new TransitGatewayRouteTable(this, id, {
      transitGateway: this,
      name: id,
      tags: tags,
    });
  }

  /**
   * Attaches a VPC to transit gateway, you may also have to define routes both in Transit Gateway and the passed in VPC
   */
  attachVPC(id: string, vpc: ec2.IVpc, subnets: ec2.ISubnet[]): TransitGatewayAttachment {
    return new TransitGatewayAttachment(this, id, {
      subnets,
      vpc,
      transitGateway: this,
    });
  }
}

/**
 * Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html#aws-resource-ec2-transitgateway-properties
 */
export interface TransitGatewayProps {
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs.
   *
   * @default - 64512
   */
  readonly asn?: number;

  /**
   * Enable or disable automatic acceptance of attachment requests.
   *
   * @default - disable
   */
  readonly autoAcceptSharedAttachments?: TGWFeature | string;

  /**
   * Enable or disable automatic association with the default association route table.
   *
   * @default - enable
   */
  readonly defaultRouteTableAssociation?: TGWFeature | string;

  /**
   * Enable or disable automatic propagation of routes to the default propagation route table.
   *
   * @default - enable
   */
  readonly defaultRouteTablePropagation?: TGWFeature | string;

  /**
   * The description of the transit gateway.
   */
  readonly description?: string;

  /**
   * Enable or disable DNS support
   *
   * @default - enable
   */
  readonly dnsSupport?: TGWFeature | string;

  /**
   * Indicates whether multicast is enabled on the transit gateway
   *
   * @default - disable
   */
  readonly multicastSupport?: TGWFeature | string;

  /**
   * The tags for the transit gateway.
   *
   * @default - none
   */
  readonly tags?: core.Tag[];

  /**
   * Enable or disable Equal Cost Multipath Protocol support
   *
   * @default - enable
   */
  readonly vpnEcmpSupport?: TGWFeature | string;
}

/**
 * An AWS Transit Gateway with a default route table
 *
 * @resource AWS::EC2::TransitGateway
 */
export class TransitGateway extends TransitGatewayBase {
  public readonly transitGatewayId: string;
  public readonly transitGatewayArn: string;

  constructor(scope: Construct, id: string, props: TransitGatewayProps = {}) {
    super(scope, id);

    const asn = props.asn ?? 64512;
    if (asn < 64512 || asn > 65534) {
      throw new Error(`ASN must be between 64512 and 65534, got ${asn}`);
    }

    const resource = new ec2.CfnTransitGateway(this, 'Resource', {
      amazonSideAsn: asn,
      autoAcceptSharedAttachments:
        props.autoAcceptSharedAttachments ?? TGWFeature.DISABLE,
      defaultRouteTableAssociation:
        props.defaultRouteTableAssociation ?? TGWFeature.ENABLE,
      defaultRouteTablePropagation:
        props.defaultRouteTablePropagation ?? TGWFeature.ENABLE,
      description: props.description,
      dnsSupport: props.dnsSupport ?? TGWFeature.ENABLE,
      multicastSupport: props.multicastSupport ?? TGWFeature.DISABLE,
      tags: props.tags,
      vpnEcmpSupport: props.vpnEcmpSupport ?? TGWFeature.ENABLE,
    });

    this.transitGatewayId = resource.ref;
    this.transitGatewayArn = this.getResourceArnAttribute(
      core.Stack.of(this).formatArn(transitGatewayArnComponents(resource.ref)),
      transitGatewayArnComponents(this.physicalName),
    );
  }

}

export function transitGatewayArnComponents(transitGatewayResourceName: string, region?: string): core.ArnComponents {
  return {
    resource: 'transit-gateway',
    resourceName: transitGatewayResourceName,
    service: 'ec2',
    region,
  };
}