import * as core from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { ITransitGatewayAttachment } from '.';
import { ITransitGateway } from './transit-gateway';
import { TransitGatewayRoute } from './transit-gateway-route';
import { TransitGatewayRouteTableAssociation } from './transit-gateway-route-table-association';

export interface ITransitGatewayTableRoute {
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
}

export interface ITransitGatewayRouteTable extends core.IResource {
  /**
     * The ID of the transit gateway route table
     * @attribute
     */
  readonly transitGatewayRouteTableId: string;
}

abstract class TransitGatewayRouteTableBase extends core.Resource implements ITransitGatewayRouteTable {
  public abstract readonly transitGatewayRouteTableId: string;

  /**
   * addRoutes add every specified, *static* route to this route table. If the route targets an attachment
   * then that attachment will automatically be associated with this route table, meaning you cannot associate
   * this attachment with any other route table
   * @param transitGatewayRoutes A list of routes you want to add to this Route Table
   */
  addRoutes(transitGatewayRoutes: ITransitGatewayTableRoute[]) {
    let iota = 1;

    transitGatewayRoutes.forEach(route => {
      if (route.blackhole === true) {
        new TransitGatewayRoute(this, `BlackHoleRoute${iota}`, {
          destinationCidrBlock: route.destinationCidrBlock,
          blackhole: route.blackhole,
          transitGatewayRouteTable: this,
        });
      } else {
        if (route.transitGatewayAttachment != undefined) {
          new TransitGatewayRoute(this, `TransitGatewayRoute${iota}`, {
            destinationCidrBlock: route.destinationCidrBlock,
            transitGatewayAttachment: route.transitGatewayAttachment,
            transitGatewayRouteTable: this,
          });
          new TransitGatewayRouteTableAssociation(this, `TransitGatewayRouteTableAssociation${iota}`, {
            transitGatewayAttachment: route.transitGatewayAttachment,
            transitGatewayRouteTable: this,
          });
        }
      }

      iota++;
    });
  }
}

/**
 * Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html
 */
export interface TransitGatewayRouteTableProps {
  /**
    * A Name for this route table
    */
  readonly name?: string;

  /**
    * The transit gateway this route table gets assigned to
    */
  readonly transitGateway: ITransitGateway;


  /**
   * The tags for the transit gateway route table.
   *
   * @default - none
   */
  readonly tags?: core.Tag[];
}

/**
 * An AWS Transit Gateway route table
 *
 * @resource AWS::EC2::TransitGatewayRouteTable
 */
export class TransitGatewayRouteTable extends TransitGatewayRouteTableBase {
  public readonly transitGatewayRouteTableId: string;

  constructor(scope: Construct, id: string, props: TransitGatewayRouteTableProps) {
    super(scope, id);

    const resource = new ec2.CfnTransitGatewayRouteTable(this, 'Resource', {
      transitGatewayId: props.transitGateway.transitGatewayId,
      tags: [
        { key: 'Name', value: props.name ?? this.physicalName },
        ...props.tags ?? [],
      ],
    });

    this.transitGatewayRouteTableId = resource.ref;
  }


}