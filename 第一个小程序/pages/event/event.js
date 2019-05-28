// event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    imgUrls:[
      '../../images/jf.jpg',
      '../../images/leon.jpg',
      '../../images/titanic.jpg'
    ]
  },
  shopflag(){
    // 要修改数据必须通过this.setData
    this.setData({
      flag: !this.data.flag
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(111)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(222)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(333)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(444)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(555)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(666)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(777)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(888)
  }
})