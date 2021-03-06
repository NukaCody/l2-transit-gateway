# L2 Construct for Transit Gateway

An L2 construct for TGW. Please note, the intention is to contribute this back upstream so this is a temporary resting place as I get familiar with CDK's contributing guidelines/steps.

```typescript
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
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

    // Make sure to modify route tables for the subnets that the transit gateway attachment resides in
  }
}

new TestStack(app, 'TestStack');

app.synth();
```

## Known Limitations

- Only support for VPC attachments (this is a cloudformation limitation, see [AWS::EC2::TransitGatewayAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html)
- Does not automatically add routes from the attached subnet to the Transit Gateway, therefore you have to modify the route table to point a CIDR range towards Transit Gateway
  - Initial implementation added a default gateway 0.0.0.0/0 to Transit Gateway. But this could lead to nasty routing suprises, especially in situations where the default gateway actually points to a NAT gateway, so the decision is shelved at the moment.