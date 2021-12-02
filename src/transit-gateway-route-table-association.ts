import * as core from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { ITransitGatewayAttachment } from './transit-gateway-attachment';
import { ITransitGatewayRouteTable } from './transit-gateway-route-table';

export interface ITransitGatewayRouteTableAssociation extends core.IResource {
  /**
     * The ID of the transit gateway route table association
     * @attribute
     */
  readonly transitGatewayRouteTableAssociationId: string;
}

abstract class TransitGatewayRouteTableAssociationBase extends core.Resource implements ITransitGatewayRouteTableAssociation {
  public abstract readonly transitGatewayRouteTableAssociationId: string;
}

/**
 * Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html
 */
export interface TransitGatewayRouteTableAssociationProps {
  /**
    * The transit gateway attachment you want to associate to a route table
    */
  readonly transitGatewayAttachment: ITransitGatewayAttachment;

  /**
    * The transit gateway route table you want the attachment to associate to
    */
  readonly transitGatewayRouteTable: ITransitGatewayRouteTable;

}

/**
 * An AWS Transit Gateway route table association
 *
 * @resource AWS::EC2::TransitGatewayRouteTableAssociation
 */
export class TransitGatewayRouteTableAssociation extends TransitGatewayRouteTableAssociationBase {
  public readonly transitGatewayRouteTableAssociationId: string;

  constructor(scope: Construct, id: string, props: TransitGatewayRouteTableAssociationProps) {
    super(scope, id);


    const resource = new ec2.CfnTransitGatewayRouteTableAssociation(this, 'Resource', {
      transitGatewayAttachmentId: props.transitGatewayAttachment.transitGatewayAttachmentId,
      transitGatewayRouteTableId: props.transitGatewayRouteTable.transitGatewayRouteTableId,
    });

    this.transitGatewayRouteTableAssociationId = resource.ref;
  }
}