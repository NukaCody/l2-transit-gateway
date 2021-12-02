import '@aws-cdk/assert/jest';
import * as cdk from 'aws-cdk-lib';
import { TransitGateway } from '../src';

let stack: cdk.Stack;

beforeEach(() => {
  stack = new cdk.Stack();
});

describe('transit-gateway', () => {
  test('transit gateway is created correctly', () => {
    // GIVEN & WHEN
    new TransitGateway(stack, 'TGW');

    // THEN
    expect(stack).toHaveResource('AWS::EC2::TransitGateway');

  });
});