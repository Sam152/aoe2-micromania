#!/bin/sh

cdk deploy -e --hotswap ClientStack
cdk deploy -e UsEastServer
cdk deploy -e ApSouthServer
