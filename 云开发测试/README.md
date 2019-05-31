# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


### 小程序云开发
1.app.js
  默认传的是第一个云环境,如果有2个环境需要制定环境id
 - env:表示环境id 传入字符串形式的环境 ID 
 - traceUser:是否在将用户访问记录到用户管理中，在控制台中可见
```
  wx.cloud.init({
    traceUser: true,
    env:"hui-q0z2m"
  })
```
2.如何创建和上传云函数
  - cloudfunction 点击右键创建nodejs云函数
  - 在之佛那个生成的index.js编写云函数
```
exports.main = async (event, context) => {
  console.log(event);// 用来接收前端传参
  return event.number 
}
```
3.云函数的调用
```
    wx.cloud.callFunction({
      // 对应的云函数名称
      name:'book',
      // 我们传给云函数的参数
      data:{
        number:1234
      },
      // 调用云函数成功的回调
      success:(res)=>{
        console.log(res)
      },
      // 调用云函数失败的回调
      fail:(err) => {
        console.log(err)
      }
    })
```
4.使用数据库
  - 必须先进行数据库初始化
    const db = wx.cloud.database()
  - 获取数据库集合
    const todos = db.collection('todos')
  - 数据库使用注意事项  一定要注意权限设置
