import '@aws-cdk/assert/jest';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as core from '@aws-cdk/core';
import { TransitGateway, TransitGatewayAttachment, TransitGatewayRouteTable, TransitGatewayRouteTableAssociation } from '../src';

let stack: core.Stack;
let tgw: TransitGateway;
let vpcA: ec2.Vpc;
let vpcB: ec2.Vpc;

beforeEach(() => {
  stack = new core.Stack();
  vpcA = new ec2.Vpc(stack, 'VPCA');
  tgw = new TransitGateway(stack, 'TGW');
  vpcB = new ec2.Vpc(stack, 'VPCB', {
    subnetConfiguration: [{ name: 'PrivateIsolated', subnetType: ec2.SubnetType.PRIVATE_ISOLATED }],
  });
});

describe('transit-gateway-route-table-association', () => {
  test('route table association is created correctly', () => {
    // GIVEN
    const samples = [
      {
        transitGatewayAttachment: new TransitGatewayAttachment(stack, 'Attachment1', {
          subnets: vpcA.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_NAT }).subnets,
          vpc: vpcA,
          transitGateway: tgw,
          name: 'AttachmentA',
          tags: [
            new core.Tag('ExampleKeyA', 'ExampleValueA'),
            new core.Tag('ExampleKeyB', 'ExampleValueB'),
          ],
        }),
        transitgatewayrouteTable: new TransitGatewayRouteTable(stack, 'RouteTable1', {
          transitGateway: tgw,
        }),
      },
      {
        transitGatewayAttachment: new TransitGatewayAttachment(stack, 'Attachment2', {
          subnets: vpcB.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_ISOLATED }).subnets,
          transitGateway: tgw,
          vpc: vpcB,
        }),
        transitgatewayrouteTable: new TransitGatewayRouteTable(stack, 'RouteTable2', {
          transitGateway: tgw,
        }),
      },

    ];

    // WHEN
    for (const [i, sample] of samples.entries()) {
      new TransitGatewayRouteTableAssociation(stack, `RouteTableAssociation${i}`, {
        transitGatewayAttachment: sample.transitGatewayAttachment,
        transitGatewayRouteTable: sample.transitgatewayrouteTable,
      });

      // THEN
      expect(stack).toHaveResource('AWS::EC2::TransitGatewayRouteTableAssociation');
    }

  });
});