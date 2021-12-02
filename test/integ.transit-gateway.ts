/// !cdk-integ *
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { TGWFeature, TransitGateway } from '../src';

const app = new cdk.App();

class TestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpcA = new ec2.Vpc(this, 'VPCA', {
      subnetConfiguration: [{ name: 'TGWSubnet', subnetType: ec2.SubnetType.PRIVATE_ISOLATED }],
    });
    const vpcB = new ec2.Vpc(this, 'VPCB', {
      subnetConfiguration: [{ name: 'TGWSubnet', subnetType: ec2.SubnetType.PRIVATE_ISOLATED }],
    });

    const tgw = new TransitGateway(this, 'TGW', {
      defaultRouteTableAssociation: TGWFeature.DISABLE,
      defaultRouteTablePropagation: TGWFeature.DISABLE,
    });

    const rtA = tgw.addRouteTable('rtA');
    const rtB = tgw.addRouteTable('rtB');

    const vpcAAttachment = tgw.attachVPC('VPCAttachment', vpcA, vpcA.selectSubnets({ subnetGroupName: 'TGWSubnet' }).subnets);
    const vpcBAttachment = tgw.attachVPC('VPCAttachment', vpcB, vpcB.selectSubnets({ subnetGroupName: 'TGWSubnet' }).subnets);

    rtB.addRoutes([
      { destinationCidrBlock: '0.0.0.0/0', transitGatewayAttachment: vpcAAttachment },
    ]);

    rtA.addRoutes([
      { destinationCidrBlock: vpcA.vpcCidrBlock, transitGatewayAttachment: vpcAAttachment },
      { destinationCidrBlock: vpcB.vpcCidrBlock, transitGatewayAttachment: vpcBAttachment },
    ]);
  }
}

new TestStack(app, 'TestStack');

app.synth();