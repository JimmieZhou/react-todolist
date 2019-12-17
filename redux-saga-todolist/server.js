/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-12-17 16:43:32
 * @LastEditors  : jimmiezhou
 * @LastEditTime : 2019-12-17 21:32:16
 */
const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");

const server = new Koa();
const router = new Router();

server.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  ctx.set("Access-Control-Allow-Headers", "Content-Type");
  ctx.set("Access-Control-Max-Age", "1000");
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200;
  }
  await next();
});

server.use(bodyparser());

router.get("/init", async ctx => {
  ctx.body = {
    code: 200,
    msg: "success",
    data: { name: "做算法题目", isDone: false, id: 0 }
  };
});

router.post("/add", async ctx => {
  ctx.body = {
    code: 200,
    msg: "success",
    data: ctx.request.body
  };
});

router.delete("/delete", async ctx => {
  ctx.body = {
    code: 200,
    msg: "success",
    data: ctx.request.body
  };
});

router.put("/update", async ctx => {
  ctx.body = {
    code: 200,
    msg: "success",
    data: ctx.request.body
  };
});

server.use(router.routes());

server.listen(3001, () => {
  console.log("server listen on port 3001...");
});
