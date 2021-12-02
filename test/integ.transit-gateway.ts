/// !cdk-integ *
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { TGWFeature, TransitGateway } from '../src';

const app = new App();

class TestStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpcA = new Vpc(this, 'VPCA', {
      subnetConfiguration: [{ name: 'TGWSubnet', subnetType: SubnetType.PRIVATE_ISOLATED }],
    });
    const vpcB = new Vpc(this, 'VPCB', {
      subnetConfiguration: [{ name: 'TGWSubnet', subnetType: SubnetType.PRIVATE_ISOLATED }],
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