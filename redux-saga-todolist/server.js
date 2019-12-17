/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-17 16:43:32
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-12-17 16:47:19
 */
const Koa = require('koa')
const Router = require('koa-router')

const server = new Koa()
const router = new Router()

router.get('/',async ctx=>{
    ctx.body = {
        code: 200,
        msg: "success",
        data: { name: "做算法题目", isDone: false, id: 0 }
      };
      ctx.set("Content-Type", "application/json");
      ctx.set("Access-Control-Allow-Origin", "*");
})

server.use(router.routes())

server.listen(3001,()=>{
    console.log("server listen on port 3001...");
})

