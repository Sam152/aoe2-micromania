#!/bin/sh

cdk deploy --hotswap-fallback -e UsEastServer
cdk deploy --hotswap-fallback -e ApSouthServer
cdk deploy --hotswap-fallback -e ClientStack
