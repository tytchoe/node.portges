// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var app_proto_feeCategory_pb = require('./feeCategory_pb');

function serialize_feeCategory_Empty(arg) {
  if (!(arg instanceof app_proto_feeCategory_pb.Empty)) {
    throw new Error('Expected argument of type feeCategory.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feeCategory_Empty(buffer_arg) {
  return app_proto_feeCategory_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_feeCategory_FeeCategories(arg) {
  if (!(arg instanceof app_proto_feeCategory_pb.FeeCategories)) {
    throw new Error('Expected argument of type feeCategory.FeeCategories');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_feeCategory_FeeCategories(buffer_arg) {
  return app_proto_feeCategory_pb.FeeCategories.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeeCategoryServiceService = exports.FeeCategoryServiceService = {
  getAll: {
    path: '/feeCategory.FeeCategoryService/getAll',
    requestStream: false,
    responseStream: false,
    requestType: app_proto_feeCategory_pb.Empty,
    responseType: app_proto_feeCategory_pb.FeeCategories,
    requestSerialize: serialize_feeCategory_Empty,
    requestDeserialize: deserialize_feeCategory_Empty,
    responseSerialize: serialize_feeCategory_FeeCategories,
    responseDeserialize: deserialize_feeCategory_FeeCategories,
  },
};

exports.FeeCategoryServiceClient = grpc.makeGenericClientConstructor(FeeCategoryServiceService);
