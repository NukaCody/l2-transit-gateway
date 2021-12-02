import * as core from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';


import { ITransitGateway } from './transit-gateway';

export interface ITransitGatewayAttachment extends core.IResource {
  /**
     * The ID of the transit gateway attachment
     * @attribute
     */
  readonly transitGatewayAttachmentId: string;
}

abstract class TransitGatewayAttachmentBase extends core.Resource implements ITransitGatewayAttachment {
  public abstract readonly transitGatewayAttachmentId: string;
}

/**
 * Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html
 */
export interface TransitGatewayAttachmentProps {
  /**
    * A Name for this attachment
    */
  readonly name?: string;

  /**
    * A VPC attachment(s) will get assigned to
    */
  readonly vpc: ec2.IVpc;

  /**
   * A list of subnets to place the attachment in
   * It is a good idea to put these in more than one subnet for high availability
   */
  readonly subnets: ec2.ISubnet[];

  /**
    * The transit gateway this attachment gets assigned to
    */
  readonly transitGateway: ITransitGateway;


  /**
   * The tags for the transit gateway attachment.
   *
   * @default - none
   */
  readonly tags?: core.Tag[];
}

/**
 * An AWS Transit Gateway Attachment
 *
 * @resource AWS::EC2::TransitGatewayAttachment
 */
export class TransitGatewayAttachment extends TransitGatewayAttachmentBase {
  public readonly transitGatewayAttachmentId: string;

  constructor(scope: Construct, id: string, props: TransitGatewayAttachmentProps) {
    super(scope, id);

    const resource = new ec2.CfnTransitGatewayAttachment(this, 'Resource', {
      subnetIds: props.subnets.map(s => s.subnetId),
      transitGatewayId: props.transitGateway.transitGatewayId,
      vpcId: props.vpc.vpcId,
      tags: [
        { key: 'Name', value: props.name ?? this.physicalName },
        ...props.tags ?? [],
      ],
    });

    this.transitGatewayAttachmentId = resource.ref;
  }
}