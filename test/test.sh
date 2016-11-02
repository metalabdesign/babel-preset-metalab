#!/bin/sh -e

DIR=`dirname $0`
ROOT=$DIR/..
NODE=${ROOT}/node_modules/.bin/babel-node

for ENV in production development test; do
  printf "Testing ${ENV}... "
  RESULT=`NODE_ENV=${ENV} ${NODE} ${DIR}/test.js`
  if [ $? -ne 0 ]; then echo "FAIL." && exit 1; fi;
  if [ "${RESULT}" -ne 3 ]; then echo "FAIL." && exit 1; fi;
  echo "OK."
done
