import '@aws-cdk/assert/jest';
import { Stack, Tag } from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { TransitGateway, TransitGatewayAttachment } from '../src';

let stack: Stack;
let tgw: TransitGateway;
let vpcA: Vpc;
let vpcB: Vpc;

beforeEach(() => {
  stack = new Stack();
  vpcA = new Vpc(stack, 'VPCA');
  tgw = new TransitGateway(stack, 'TGW');
  vpcB = new Vpc(stack, 'VPCB', {
    subnetConfiguration: [{ name: 'PrivateIsolated', subnetType: SubnetType.PRIVATE_ISOLATED }],
  });
});

describe('transit-gateway-attachment', () => {
  test('attachment is created correctly', () => {
    // GIVEN
    const samples = [
      {
        subnets: vpcA.selectSubnets({ subnetType: SubnetType.PRIVATE_WITH_NAT }).subnets,
        vpc: vpcA,
        name: 'AttachmentA',
        tags: [
          new Tag('ExampleKeyA', 'ExampleValueA'),
          new Tag('ExampleKeyB', 'ExampleValueB'),
        ],
      },
      {
        subnets: vpcB.selectSubnets({ subnetType: SubnetType.PRIVATE_ISOLATED }).subnets,
        vpc: vpcB,
      },
    ];

    // WHEN
    for (const [i, sample] of samples.entries()) {
      new TransitGatewayAttachment(stack, `Attachment${i}`, {
        subnets: sample.subnets,
        transitGateway: tgw,
        vpc: sample.vpc,
        name: sample.name,
        tags: sample.tags,
      });

      // THEN
      expect(stack).toHaveResource('AWS::EC2::TransitGatewayAttachment');
    }

  });
});