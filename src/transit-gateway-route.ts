import * as core from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { ITransitGatewayAttachment } from './transit-gateway-attachment';
import { ITransitGatewayRouteTable } from './transit-gateway-route-table';

export interface ITransitGatewayRoute extends core.IResource {
  /**
     * The ID of the transit gateway route
     */
  readonly transitGatewayRouteId: string;
}

abstract class TransitGatewayRouteBase extends core.Resource implements ITransitGatewayRoute {
  public abstract readonly transitGatewayRouteId: string;
}

/**
 * Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html
 */
export interface TransitGatewayRouteProps {
  /**
    * If true, routes packets that match the destination Cidr to a black hole
    */
  readonly blackhole?: boolean;

  /**
    * Destination Cidr to determine what packets this route should match
    */
  readonly destinationCidrBlock?: string;

  /**
    * The transit gateway attachment you want to target
    */
  readonly transitGatewayAttachment?: ITransitGatewayAttachment;

  /**
    * The transit gateway route table you want to install this route into
    */
  readonly transitGatewayRouteTable: ITransitGatewayRouteTable;

}

// export interface ITransitGatewayRoute {
//     /**
//       * A destination CIDR block that match incoming packets
//       */
//     BlockBlock: string;
//     /**
//       * If destination CIDR match, route to this TransitGatewayAttachment
//       */
//     transitGatewayAttachment?: ITransitGatewayAttachment;
//     /**
//       * Packets that match destination CIDR will be dropped
//       */
//     isBlackhole?: boolean;
//   }

/**
 * An AWS Transit Gateway route
 *
 * @resource AWS::EC2::TransitGatewayRoute
 */
export class TransitGatewayRoute extends TransitGatewayRouteBase {
  public readonly transitGatewayRouteId: string;

  constructor(scope: Construct, id: string, props: TransitGatewayRouteProps) {
    super(scope, id);

    if (props.transitGatewayAttachment === undefined && props.blackhole === undefined) {
      throw new Error('TransitGatewayRoute must have either blackhole or TransitGatewayAttachment defined, but not both');
    }

    if (props.transitGatewayAttachment && props.blackhole) {
      throw new Error('TransitGatewayRoute must have either blackhole or TransitGatewayAttachment defined, but not both');
    }

    const resource = new ec2.CfnTransitGatewayRoute(this, 'Resource', {
      blackhole: props.blackhole,
      destinationCidrBlock: props.destinationCidrBlock,
      transitGatewayAttachmentId: props.transitGatewayAttachment?.transitGatewayAttachmentId,
      transitGatewayRouteTableId: props.transitGatewayRouteTable?.transitGatewayRouteTableId || '', //TODO Make Different Interface between internal representation and "app" level
    });

    this.transitGatewayRouteId = resource.ref;
  }
}