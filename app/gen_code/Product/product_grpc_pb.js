// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var app_proto_product_pb = require('./product_pb.js');

function serialize_product_Empty(arg) {
  if (!(arg instanceof app_proto_product_pb.Empty)) {
    throw new Error('Expected argument of type product.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Empty(buffer_arg) {
  return app_proto_product_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Product(arg) {
  if (!(arg instanceof app_proto_product_pb.Product)) {
    throw new Error('Expected argument of type product.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Product(buffer_arg) {
  return app_proto_product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductId(arg) {
  if (!(arg instanceof app_proto_product_pb.ProductId)) {
    throw new Error('Expected argument of type product.ProductId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductId(buffer_arg) {
  return app_proto_product_pb.ProductId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Products(arg) {
  if (!(arg instanceof app_proto_product_pb.Products)) {
    throw new Error('Expected argument of type product.Products');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Products(buffer_arg) {
  return app_proto_product_pb.Products.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  findAll: {
    path: '/product.ProductService/findAll',
    requestStream: false,
    responseStream: false,
    requestType: app_proto_product_pb.Empty,
    responseType: app_proto_product_pb.Products,
    requestSerialize: serialize_product_Empty,
    requestDeserialize: deserialize_product_Empty,
    responseSerialize: serialize_product_Products,
    responseDeserialize: deserialize_product_Products,
  },
  findOne: {
    path: '/product.ProductService/findOne',
    requestStream: false,
    responseStream: false,
    requestType: app_proto_product_pb.ProductId,
    responseType: app_proto_product_pb.Product,
    requestSerialize: serialize_product_ProductId,
    requestDeserialize: deserialize_product_ProductId,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
