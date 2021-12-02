import '@aws-cdk/assert/jest';
import * as cdk from 'aws-cdk-lib';
import { TransitGateway, TransitGatewayRouteTable } from '../src';

let stack: cdk.Stack;
let tgw: TransitGateway;

beforeEach(() => {
  stack = new cdk.Stack();
  tgw = new TransitGateway(stack, 'TGW');
});

describe('transit-gateway-route-table', () => {
  test('transit gateway route table is created correctly', () => {
    // GIVEN
    const samples = [
      {
        name: 'TGWRouteTable',
        transitGateway: tgw,
        tags: [
          new cdk.Tag('ExampleKeyA', 'ExampleValueA'),
          new cdk.Tag('ExampleKeyB', 'ExampleValueB'),
        ],
      },

    ];

    // WHEN
    for (const [i, sample] of samples.entries()) {
      new TransitGatewayRouteTable(stack, `RouteTable${i}`, {
        ...sample,
      });

      // THEN
      expect(stack).toHaveResource('AWS::EC2::TransitGatewayRouteTable');
    }

  });
});