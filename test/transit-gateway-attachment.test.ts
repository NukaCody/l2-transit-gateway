import '@aws-cdk/assert/jest';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { TransitGateway, TransitGatewayAttachment } from '../src';

let stack: cdk.Stack;
let tgw: TransitGateway;
let vpcA: ec2.Vpc;
let vpcB: ec2.Vpc;

beforeEach(() => {
  stack = new cdk.Stack();
  vpcA = new ec2.Vpc(stack, 'VPCA');
  tgw = new TransitGateway(stack, 'TGW');
  vpcB = new ec2.Vpc(stack, 'VPCB', {
    subnetConfiguration: [{ name: 'PrivateIsolated', subnetType: ec2.SubnetType.PRIVATE_ISOLATED }],
  });
});

describe('transit-gateway-attachment', () => {
  test('attachment is created correctly', () => {
    // GIVEN
    const samples = [
      {
        subnets: vpcA.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_NAT }).subnets,
        vpc: vpcA,
        name: 'AttachmentA',
        tags: [
          new cdk.Tag('ExampleKeyA', 'ExampleValueA'),
          new cdk.Tag('ExampleKeyB', 'ExampleValueB'),
        ],
      },
      {
        subnets: vpcB.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_ISOLATED }).subnets,
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