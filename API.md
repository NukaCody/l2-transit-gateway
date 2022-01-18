# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### TransitGateway <a name="tgw-l2.TransitGateway"></a>

- *Implements:* [`tgw-l2.ITransitGateway`](#tgw-l2.ITransitGateway)

An AWS Transit Gateway with a default route table.

#### Initializers <a name="tgw-l2.TransitGateway.Initializer"></a>

```typescript
import { TransitGateway } from 'tgw-l2'

new TransitGateway(scope: Construct, id: string, props?: TransitGatewayProps)
```

##### `scope`<sup>Required</sup> <a name="tgw-l2.TransitGateway.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="tgw-l2.TransitGateway.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="tgw-l2.TransitGateway.parameter.props"></a>

- *Type:* [`tgw-l2.TransitGatewayProps`](#tgw-l2.TransitGatewayProps)

---

#### Methods <a name="Methods"></a>

##### `addRouteTable` <a name="tgw-l2.TransitGateway.addRouteTable"></a>

```typescript
public addRouteTable(id: string, tags?: Tag[])
```

###### `id`<sup>Required</sup> <a name="tgw-l2.TransitGateway.parameter.id"></a>

- *Type:* `string`

---

###### `tags`<sup>Optional</sup> <a name="tgw-l2.TransitGateway.parameter.tags"></a>

- *Type:* [`@aws-cdk/core.Tag`](#@aws-cdk/core.Tag)[]

---

##### `attachVPC` <a name="tgw-l2.TransitGateway.attachVPC"></a>

```typescript
public attachVPC(id: string, vpc: IVpc, subnets: ISubnet[])
```

###### `id`<sup>Required</sup> <a name="tgw-l2.TransitGateway.parameter.id"></a>

- *Type:* `string`

---

###### `vpc`<sup>Required</sup> <a name="tgw-l2.TransitGateway.parameter.vpc"></a>

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

---

###### `subnets`<sup>Required</sup> <a name="tgw-l2.TransitGateway.parameter.subnets"></a>

- *Type:* [`@aws-cdk/aws-ec2.ISubnet`](#@aws-cdk/aws-ec2.ISubnet)[]

---


#### Properties <a name="Properties"></a>

##### `transitGatewayArn`<sup>Required</sup> <a name="tgw-l2.TransitGateway.property.transitGatewayArn"></a>

```typescript
public readonly transitGatewayArn: string;
```

- *Type:* `string`

The ARN of the transit gateway in format arn:aws:ec2:${AWS::Region}:${AWS::AccountId}:transit-gateway/${TransitGatewayLogicalID}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="tgw-l2.TransitGateway.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* `string`

The ID of the transit gateway https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html#aws-resource-ec2-transitgateway-return-values.

---


### TransitGatewayAttachment <a name="tgw-l2.TransitGatewayAttachment"></a>

- *Implements:* [`tgw-l2.ITransitGatewayAttachment`](#tgw-l2.ITransitGatewayAttachment)

An AWS Transit Gateway Attachment.

#### Initializers <a name="tgw-l2.TransitGatewayAttachment.Initializer"></a>

```typescript
import { TransitGatewayAttachment } from 'tgw-l2'

new TransitGatewayAttachment(scope: Construct, id: string, props: TransitGatewayAttachmentProps)
```

##### `scope`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachment.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachment.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachment.parameter.props"></a>

- *Type:* [`tgw-l2.TransitGatewayAttachmentProps`](#tgw-l2.TransitGatewayAttachmentProps)

---



#### Properties <a name="Properties"></a>

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* `string`

The ID of the transit gateway attachment.

---


### TransitGatewayRoute <a name="tgw-l2.TransitGatewayRoute"></a>

- *Implements:* [`tgw-l2.ITransitGatewayRoute`](#tgw-l2.ITransitGatewayRoute)

An AWS Transit Gateway route.

#### Initializers <a name="tgw-l2.TransitGatewayRoute.Initializer"></a>

```typescript
import { TransitGatewayRoute } from 'tgw-l2'

new TransitGatewayRoute(scope: Construct, id: string, props: TransitGatewayRouteProps)
```

##### `scope`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRoute.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRoute.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRoute.parameter.props"></a>

- *Type:* [`tgw-l2.TransitGatewayRouteProps`](#tgw-l2.TransitGatewayRouteProps)

---



#### Properties <a name="Properties"></a>

##### `transitGatewayRouteId`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRoute.property.transitGatewayRouteId"></a>

```typescript
public readonly transitGatewayRouteId: string;
```

- *Type:* `string`

The ID of the transit gateway route.

---


### TransitGatewayRouteTable <a name="tgw-l2.TransitGatewayRouteTable"></a>

- *Implements:* [`tgw-l2.ITransitGatewayRouteTable`](#tgw-l2.ITransitGatewayRouteTable)

An AWS Transit Gateway route table.

#### Initializers <a name="tgw-l2.TransitGatewayRouteTable.Initializer"></a>

```typescript
import { TransitGatewayRouteTable } from 'tgw-l2'

new TransitGatewayRouteTable(scope: Construct, id: string, props: TransitGatewayRouteTableProps)
```

##### `scope`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTable.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTable.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTable.parameter.props"></a>

- *Type:* [`tgw-l2.TransitGatewayRouteTableProps`](#tgw-l2.TransitGatewayRouteTableProps)

---

#### Methods <a name="Methods"></a>

##### `addRoutes` <a name="tgw-l2.TransitGatewayRouteTable.addRoutes"></a>

```typescript
public addRoutes(transitGatewayRoutes: ITransitGatewayTableRoute[])
```

###### `transitGatewayRoutes`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTable.parameter.transitGatewayRoutes"></a>

- *Type:* [`tgw-l2.ITransitGatewayTableRoute`](#tgw-l2.ITransitGatewayTableRoute)[]

A list of routes you want to add to this Route Table.

---


#### Properties <a name="Properties"></a>

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTable.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* `string`

The ID of the transit gateway route table.

---


### TransitGatewayRouteTableAssociation <a name="tgw-l2.TransitGatewayRouteTableAssociation"></a>

- *Implements:* [`tgw-l2.ITransitGatewayRouteTableAssociation`](#tgw-l2.ITransitGatewayRouteTableAssociation)

An AWS Transit Gateway route table association.

#### Initializers <a name="tgw-l2.TransitGatewayRouteTableAssociation.Initializer"></a>

```typescript
import { TransitGatewayRouteTableAssociation } from 'tgw-l2'

new TransitGatewayRouteTableAssociation(scope: Construct, id: string, props: TransitGatewayRouteTableAssociationProps)
```

##### `scope`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableAssociation.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableAssociation.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableAssociation.parameter.props"></a>

- *Type:* [`tgw-l2.TransitGatewayRouteTableAssociationProps`](#tgw-l2.TransitGatewayRouteTableAssociationProps)

---



#### Properties <a name="Properties"></a>

##### `transitGatewayRouteTableAssociationId`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableAssociation.property.transitGatewayRouteTableAssociationId"></a>

```typescript
public readonly transitGatewayRouteTableAssociationId: string;
```

- *Type:* `string`

The ID of the transit gateway route table association.

---


## Structs <a name="Structs"></a>

### TransitGatewayAttachmentProps <a name="tgw-l2.TransitGatewayAttachmentProps"></a>

Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TransitGatewayAttachmentProps } from 'tgw-l2'

const transitGatewayAttachmentProps: TransitGatewayAttachmentProps = { ... }
```

##### `subnets`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachmentProps.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* [`@aws-cdk/aws-ec2.ISubnet`](#@aws-cdk/aws-ec2.ISubnet)[]

A list of subnets to place the attachment in It is a good idea to put these in more than one subnet for high availability.

---

##### `transitGateway`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachmentProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: ITransitGateway;
```

- *Type:* [`tgw-l2.ITransitGateway`](#tgw-l2.ITransitGateway)

The transit gateway this attachment gets assigned to.

---

##### `vpc`<sup>Required</sup> <a name="tgw-l2.TransitGatewayAttachmentProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`@aws-cdk/aws-ec2.IVpc`](#@aws-cdk/aws-ec2.IVpc)

A VPC attachment(s) will get assigned to.

---

##### `name`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayAttachmentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

A Name for this attachment.

---

##### `tags`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayAttachmentProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* [`@aws-cdk/core.Tag`](#@aws-cdk/core.Tag)[]
- *Default:* none

The tags for the transit gateway attachment.

---

### TransitGatewayProps <a name="tgw-l2.TransitGatewayProps"></a>

Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html#aws-resource-ec2-transitgateway-properties.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TransitGatewayProps } from 'tgw-l2'

const transitGatewayProps: TransitGatewayProps = { ... }
```

##### `asn`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* `number`
- *Default:* 64512

A private Autonomous System Number (ASN) for the Amazon side of a BGP session.

The range is 64512 to 65534 for 16-bit ASNs.

---

##### `autoAcceptSharedAttachments`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.autoAcceptSharedAttachments"></a>

```typescript
public readonly autoAcceptSharedAttachments: string;
```

- *Type:* `string`
- *Default:* disable

Enable or disable automatic acceptance of attachment requests.

---

##### `defaultRouteTableAssociation`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.defaultRouteTableAssociation"></a>

```typescript
public readonly defaultRouteTableAssociation: string;
```

- *Type:* `string`
- *Default:* enable

Enable or disable automatic association with the default association route table.

---

##### `defaultRouteTablePropagation`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.defaultRouteTablePropagation"></a>

```typescript
public readonly defaultRouteTablePropagation: string;
```

- *Type:* `string`
- *Default:* enable

Enable or disable automatic propagation of routes to the default propagation route table.

---

##### `description`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description of the transit gateway.

---

##### `dnsSupport`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* `string`
- *Default:* enable

Enable or disable DNS support.

---

##### `multicastSupport`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.multicastSupport"></a>

```typescript
public readonly multicastSupport: string;
```

- *Type:* `string`
- *Default:* disable

Indicates whether multicast is enabled on the transit gateway.

---

##### `tags`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* [`@aws-cdk/core.Tag`](#@aws-cdk/core.Tag)[]
- *Default:* none

The tags for the transit gateway.

---

##### `vpnEcmpSupport`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayProps.property.vpnEcmpSupport"></a>

```typescript
public readonly vpnEcmpSupport: string;
```

- *Type:* `string`
- *Default:* enable

Enable or disable Equal Cost Multipath Protocol support.

---

### TransitGatewayRouteProps <a name="tgw-l2.TransitGatewayRouteProps"></a>

Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroute.html.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TransitGatewayRouteProps } from 'tgw-l2'

const transitGatewayRouteProps: TransitGatewayRouteProps = { ... }
```

##### `transitGatewayRouteTable`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteProps.property.transitGatewayRouteTable"></a>

```typescript
public readonly transitGatewayRouteTable: ITransitGatewayRouteTable;
```

- *Type:* [`tgw-l2.ITransitGatewayRouteTable`](#tgw-l2.ITransitGatewayRouteTable)

The transit gateway route table you want to install this route into.

---

##### `blackhole`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayRouteProps.property.blackhole"></a>

```typescript
public readonly blackhole: boolean;
```

- *Type:* `boolean`

If true, routes packets that match the destination Cidr to a black hole.

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayRouteProps.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* `string`

Destination Cidr to determine what packets this route should match.

---

##### `transitGatewayAttachment`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayRouteProps.property.transitGatewayAttachment"></a>

```typescript
public readonly transitGatewayAttachment: ITransitGatewayAttachment;
```

- *Type:* [`tgw-l2.ITransitGatewayAttachment`](#tgw-l2.ITransitGatewayAttachment)

The transit gateway attachment you want to target.

---

### TransitGatewayRouteTableAssociationProps <a name="tgw-l2.TransitGatewayRouteTableAssociationProps"></a>

Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TransitGatewayRouteTableAssociationProps } from 'tgw-l2'

const transitGatewayRouteTableAssociationProps: TransitGatewayRouteTableAssociationProps = { ... }
```

##### `transitGatewayAttachment`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableAssociationProps.property.transitGatewayAttachment"></a>

```typescript
public readonly transitGatewayAttachment: ITransitGatewayAttachment;
```

- *Type:* [`tgw-l2.ITransitGatewayAttachment`](#tgw-l2.ITransitGatewayAttachment)

The transit gateway attachment you want to associate to a route table.

---

##### `transitGatewayRouteTable`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableAssociationProps.property.transitGatewayRouteTable"></a>

```typescript
public readonly transitGatewayRouteTable: ITransitGatewayRouteTable;
```

- *Type:* [`tgw-l2.ITransitGatewayRouteTable`](#tgw-l2.ITransitGatewayRouteTable)

The transit gateway route table you want the attachment to associate to.

---

### TransitGatewayRouteTableProps <a name="tgw-l2.TransitGatewayRouteTableProps"></a>

Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html.

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TransitGatewayRouteTableProps } from 'tgw-l2'

const transitGatewayRouteTableProps: TransitGatewayRouteTableProps = { ... }
```

##### `transitGateway`<sup>Required</sup> <a name="tgw-l2.TransitGatewayRouteTableProps.property.transitGateway"></a>

```typescript
public readonly transitGateway: ITransitGateway;
```

- *Type:* [`tgw-l2.ITransitGateway`](#tgw-l2.ITransitGateway)

The transit gateway this route table gets assigned to.

---

##### `name`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayRouteTableProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

A Name for this route table.

---

##### `tags`<sup>Optional</sup> <a name="tgw-l2.TransitGatewayRouteTableProps.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* [`@aws-cdk/core.Tag`](#@aws-cdk/core.Tag)[]
- *Default:* none

The tags for the transit gateway route table.

---


## Protocols <a name="Protocols"></a>

### ITransitGateway <a name="tgw-l2.ITransitGateway"></a>

- *Extends:* [`@aws-cdk/core.IResource`](#@aws-cdk/core.IResource)

- *Implemented By:* [`tgw-l2.TransitGateway`](#tgw-l2.TransitGateway), [`tgw-l2.ITransitGateway`](#tgw-l2.ITransitGateway)


#### Properties <a name="Properties"></a>

##### `node`<sup>Required</sup> <a name="tgw-l2.ITransitGateway.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

The construct tree node for this construct.

---

##### `env`<sup>Required</sup> <a name="tgw-l2.ITransitGateway.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* [`@aws-cdk/core.ResourceEnvironment`](#@aws-cdk/core.ResourceEnvironment)

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="tgw-l2.ITransitGateway.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

The stack in which this resource is defined.

---

##### `transitGatewayArn`<sup>Required</sup> <a name="tgw-l2.ITransitGateway.property.transitGatewayArn"></a>

```typescript
public readonly transitGatewayArn: string;
```

- *Type:* `string`

The ARN of the transit gateway in format arn:aws:ec2:${AWS::Region}:${AWS::AccountId}:transit-gateway/${TransitGatewayLogicalID}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="tgw-l2.ITransitGateway.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* `string`

The ID of the transit gateway https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html#aws-resource-ec2-transitgateway-return-values.

---

### ITransitGatewayAttachment <a name="tgw-l2.ITransitGatewayAttachment"></a>

- *Extends:* [`@aws-cdk/core.IResource`](#@aws-cdk/core.IResource)

- *Implemented By:* [`tgw-l2.TransitGatewayAttachment`](#tgw-l2.TransitGatewayAttachment), [`tgw-l2.ITransitGatewayAttachment`](#tgw-l2.ITransitGatewayAttachment)


#### Properties <a name="Properties"></a>

##### `node`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayAttachment.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

The construct tree node for this construct.

---

##### `env`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayAttachment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* [`@aws-cdk/core.ResourceEnvironment`](#@aws-cdk/core.ResourceEnvironment)

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayAttachment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

The stack in which this resource is defined.

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* `string`

The ID of the transit gateway attachment.

---

### ITransitGatewayRoute <a name="tgw-l2.ITransitGatewayRoute"></a>

- *Extends:* [`@aws-cdk/core.IResource`](#@aws-cdk/core.IResource)

- *Implemented By:* [`tgw-l2.TransitGatewayRoute`](#tgw-l2.TransitGatewayRoute), [`tgw-l2.ITransitGatewayRoute`](#tgw-l2.ITransitGatewayRoute)


#### Properties <a name="Properties"></a>

##### `node`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRoute.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

The construct tree node for this construct.

---

##### `env`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRoute.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* [`@aws-cdk/core.ResourceEnvironment`](#@aws-cdk/core.ResourceEnvironment)

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRoute.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

The stack in which this resource is defined.

---

##### `transitGatewayRouteId`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRoute.property.transitGatewayRouteId"></a>

```typescript
public readonly transitGatewayRouteId: string;
```

- *Type:* `string`

The ID of the transit gateway route.

---

### ITransitGatewayRouteTable <a name="tgw-l2.ITransitGatewayRouteTable"></a>

- *Extends:* [`@aws-cdk/core.IResource`](#@aws-cdk/core.IResource)

- *Implemented By:* [`tgw-l2.TransitGatewayRouteTable`](#tgw-l2.TransitGatewayRouteTable), [`tgw-l2.ITransitGatewayRouteTable`](#tgw-l2.ITransitGatewayRouteTable)


#### Properties <a name="Properties"></a>

##### `node`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTable.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

The construct tree node for this construct.

---

##### `env`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTable.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* [`@aws-cdk/core.ResourceEnvironment`](#@aws-cdk/core.ResourceEnvironment)

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTable.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

The stack in which this resource is defined.

---

##### `transitGatewayRouteTableId`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTable.property.transitGatewayRouteTableId"></a>

```typescript
public readonly transitGatewayRouteTableId: string;
```

- *Type:* `string`

The ID of the transit gateway route table.

---

### ITransitGatewayRouteTableAssociation <a name="tgw-l2.ITransitGatewayRouteTableAssociation"></a>

- *Extends:* [`@aws-cdk/core.IResource`](#@aws-cdk/core.IResource)

- *Implemented By:* [`tgw-l2.TransitGatewayRouteTableAssociation`](#tgw-l2.TransitGatewayRouteTableAssociation), [`tgw-l2.ITransitGatewayRouteTableAssociation`](#tgw-l2.ITransitGatewayRouteTableAssociation)


#### Properties <a name="Properties"></a>

##### `node`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTableAssociation.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* [`@aws-cdk/core.ConstructNode`](#@aws-cdk/core.ConstructNode)

The construct tree node for this construct.

---

##### `env`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTableAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* [`@aws-cdk/core.ResourceEnvironment`](#@aws-cdk/core.ResourceEnvironment)

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTableAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* [`@aws-cdk/core.Stack`](#@aws-cdk/core.Stack)

The stack in which this resource is defined.

---

##### `transitGatewayRouteTableAssociationId`<sup>Required</sup> <a name="tgw-l2.ITransitGatewayRouteTableAssociation.property.transitGatewayRouteTableAssociationId"></a>

```typescript
public readonly transitGatewayRouteTableAssociationId: string;
```

- *Type:* `string`

The ID of the transit gateway route table association.

---

### ITransitGatewayTableRoute <a name="tgw-l2.ITransitGatewayTableRoute"></a>

- *Implemented By:* [`tgw-l2.ITransitGatewayTableRoute`](#tgw-l2.ITransitGatewayTableRoute)


#### Properties <a name="Properties"></a>

##### `blackhole`<sup>Optional</sup> <a name="tgw-l2.ITransitGatewayTableRoute.property.blackhole"></a>

```typescript
public readonly blackhole: boolean;
```

- *Type:* `boolean`

If true, routes packets that match the destination Cidr to a black hole.

---

##### `destinationCidrBlock`<sup>Optional</sup> <a name="tgw-l2.ITransitGatewayTableRoute.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* `string`

Destination Cidr to determine what packets this route should match.

---

##### `transitGatewayAttachment`<sup>Optional</sup> <a name="tgw-l2.ITransitGatewayTableRoute.property.transitGatewayAttachment"></a>

```typescript
public readonly transitGatewayAttachment: ITransitGatewayAttachment;
```

- *Type:* [`tgw-l2.ITransitGatewayAttachment`](#tgw-l2.ITransitGatewayAttachment)

The transit gateway attachment you want to target.

---

## Enums <a name="Enums"></a>

### TGWFeature <a name="TGWFeature"></a>

#### `ENABLE` <a name="tgw-l2.TGWFeature.ENABLE"></a>

---


#### `DISABLE` <a name="tgw-l2.TGWFeature.DISABLE"></a>

---

