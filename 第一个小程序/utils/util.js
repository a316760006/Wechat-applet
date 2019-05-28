let fetchdata = (url, data = {}, method = 'get') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      success: (res) => resolve(res.data),
      fail: reject
    });
  });
};
export { fetchdata }
