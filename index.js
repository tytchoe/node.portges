"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { request } = require("express");
var koaGrpc = require("koa-grpc");
var mount = require('koa-mount');
var FeeCategoryServiceServices = require('./app/gen_code/feeCategory/feeCategory_grpc_pb').FeeCategoryServiceService;
var FeeMassage = require('./app/gen_code/feeCategory/feeCategory_pb');
var ProductServiceService = require('./app/gen_code/Product/product_grpc_pb').ProductServiceService;

var app = new koaGrpc.default({ service:  FeeCategoryServiceServices  });

// with route
app.use(async (ctx,next) =>{ 
    const start = Date.now();
    await next();
    console.log(`process ${ctx.path} request from ${ctx.ip} cost ${Date.now() - start}ms`);
})
app.use(mount('/product.ProductService/findAll', function(ctx){
    console.log('findAll')
} ));
app.use(mount('/product.ProductService/findOne', function(ctx){
    console.log('findOne')
} ));
app.use(mount('/getAll', function(ctx){
    console.log('getAll')
    ctx.body = 'get all';
}));
app.listen('0.0.0.0:9090');
console.log('listening on 50051...');

