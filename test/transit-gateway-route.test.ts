import '@aws-cdk/assert/jest';
import { Stack } from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { TransitGateway, TransitGatewayAttachment, TransitGatewayRoute, TransitGatewayRouteTable } from '../src';

let stack: Stack;
let tgw: TransitGateway;
let vpcB: Vpc;

beforeEach(() => {
  stack = new Stack();
  tgw = new TransitGateway(stack, 'TGW');
  vpcB = new Vpc(stack, 'VPCB', {
    subnetConfiguration: [{ name: 'PrivateIsolated', subnetType: SubnetType.PRIVATE_ISOLATED }],
  });
});

describe('transit-gateway-route', () => {
  test('transit gateway route is created correctly', () => {
    // GIVEN
    const samples = [
      {
        transitGatewayRouteTable: new TransitGatewayRouteTable(stack, 'RT1', { transitGateway: tgw }),
        destinationCidrBlock: '172.10.5.5/24',
        blackhole: false, // Filler to pass test
      },
      {
        transitGatewayRouteTable: new TransitGatewayRouteTable(stack, 'RT2', { transitGateway: tgw }),
        destinationCidrBlock: '172.10.5.5/24',
        blackhole: false, // Filler to pass test
      },
      {
        transitGatewayRouteTable: new TransitGatewayRouteTable(stack, 'RT3', { transitGateway: tgw }),
        destinationCidrBlock: '10.1.1.1/28',
        blackhole: true,
      },
      {
        transitGatewayRouteTable: new TransitGatewayRouteTable(stack, 'RT4', { transitGateway: tgw }),
        destinationCidrBlock: '0.0.0.0/0',
        transitGatewayAttachment: new TransitGatewayAttachment(stack, 'Attachment2', {
          subnets: vpcB.selectSubnets({ subnetType: SubnetType.PRIVATE_ISOLATED }).subnets,
          transitGateway: tgw,
          vpc: vpcB,
        }),
      },

    ];

    // WHEN
    for (const [i, sample] of samples.entries()) {
      new TransitGatewayRoute(stack, `Route${i}`, {
        ...sample,
      });

      // THEN
      expect(stack).toHaveResource('AWS::EC2::TransitGatewayRoute');
    }

  });
});