// pages/ajaxdom/ajaxdom.js
import {fetchdata} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let ajaxurl = 'http://132.232.89.22:3000/slider ';
    fetchdata(ajaxurl).then(data=>{
      console.log(data)
    });
    let data = {
      wd:'a'
    }
    fetchdata('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=a',{
      wd:"a"
    }).then(res=>{
      console.log(res)
      let udata = res.slice(19,-3);
      udata = JSON.parse(udata);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})