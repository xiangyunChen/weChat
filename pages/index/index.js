Page({
  data: {
    //首页导航中当前被点击的菜单索引
    currentIndexNav:0,
    //首页导航数据
    navList:[],
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videosList:[]
  },
  /**
   * 点击首页导航按钮
   */
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        if(res.data.code === 0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
   /**
   * 获取轮播图数据
   */
   getSwiperList(){
     let that = this;
     wx.request({
       url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
       success(res){
         if(res.data.code === 0){
           that.setData({
              swiperList:res.data.data.swiperList
           })
         }
       }
     })
    },

   /**
   * 获取视频列表数据
   */
  getVideosList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        that.setData({
          videosList:res.data.data.videosList
        })
      }
    })
  },
    
  onLoad:function(options){
    //1.获取首页导航数据
    this.getNavList();
    //2.获取轮播图数据
    this.getSwiperList();
    //3.获取视频列表数据
    this.getVideosList();

  }
  
})