import '@aws-cdk/assert/jest';
import { Stack } from 'aws-cdk-lib';
import { TransitGateway } from '../src';

let stack: Stack;

beforeEach(() => {
  stack = new Stack();
});

describe('transit-gateway', () => {
  test('transit gateway is created correctly', () => {
    // GIVEN & WHEN
    new TransitGateway(stack, 'TGW');

    // THEN
    expect(stack).toHaveResource('AWS::EC2::TransitGateway');

  });
});