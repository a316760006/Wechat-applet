// pages/animate/animate.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    // 初始化动画元素
    animateDate: {}
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    // 创建一个动画实例
    let animation = wx.createAnimation({
      duration: 1000, //动画持续时间
      timingFunction: 'linear', //匀速
      delay: 100 // 动画的延迟时间 delay
      // 动画的中心点 transformOrigin
    });
    // 需要把动画挂载到实例上
    this.animation = animation;
    animation.rotate(360).scale(0.5).step()
    animation.rotate(-360).scale(1).step()
    // step 表示这一步的动画已经定义完
    // 把animation赋值给我们的动画对象 animateData
    setTimeout(() => {
      this.setData({
        // 导出动画队列 export 方法每次调用后会清掉之前的动画操作 不写export无法进行下一次的动画操作
        animateDate: animation.export()
      })
    }, 1000)
  }
})