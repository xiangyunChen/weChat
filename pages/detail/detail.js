Page({
  data: {
    videoInfo:null,
    othersList:[],
    commentData:null
  },

  /**
   * 获取当前视频详情
   */
  getCurrentVideo(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+videoId,
      success(res){
        if(res.data.code === 0){
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }  
      }
    })
  },
   /**
   * 获取更多推荐视频
   */
  getOthersList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+videoId,
      success(res){
        if(res.data.code === 0){
          that.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },
  /**
   * 获取评论列表数据
   */
  getCommentsList(videoId){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+videoId,
      success(res){
        if(res.data.code === 0){
          that.setData({
            commentData:res.data.data.commentData
          })
        }
      }
    })
  },
  
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentsList(videoId);
  },
})