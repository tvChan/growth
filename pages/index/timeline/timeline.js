// pages/index/article/article.js
var that = null,
  detail = null,
  request = require('../../../common/request.js');
Page({
  data: {
    passages: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    try {
      var detail = wx.getStorageSync('options');
      this.setData({ detail: transform(detail) });
    } catch (e) {
    }
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})

function transform(detail) {
  //TODO 这里需要修改成换行？
  for (var i = 0; i < detail.length; i++) {
    detail[i].description = detail[i].description.replace(/\<br\>|\<br\s?\/>/g, '\n');
  }
  return detail;

}