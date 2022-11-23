"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { request } = require("express");
var koa = require('koa');
var Router = require('koa-router')
var koaGrpc = require("koa-grpc");
var mount = require('koa-mount');
var FeeCategoryServiceServices = require('./app/gen_code/feeCategory/feeCategory_grpc_pb').FeeCategoryServiceService;
var app = new koaGrpc.default({ service:  FeeCategoryServiceServices   });
const FeeCategoryController = require('./app/controllers/FeeCategory.controller');
var feeCategory = new koa();
const router = new Router();

router.get('/getAll', FeeCategoryController.getAll);
feeCategory.use(router.routes());

// with route
app.use(async (ctx,next) =>{ 
    const start = Date.now();
    await next();
    console.log(`process ${ctx.path} request from ${ctx.ip} cost ${Date.now() - start}ms`);
})
app.use(mount('/getAll', feeCategory));
app.listen('0.0.0.0:9090');
console.log('listening on 50051...');

