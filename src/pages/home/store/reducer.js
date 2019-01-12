import { fromJS } from 'immutable';
import * as constants from './constatnts';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }, {
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }, {
    id: 3,
    title: '自然科普',
    imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }, {
    id: 4,
    title: '简书电影',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }, {
    id: 5,
    title: '摄影',
    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }, {
    id: 6,
    title: '故事',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }, {
    id: 7,
    title: '@IT·互联网',
    imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
  }],
  articleList: [{
    id: 1,
    title: '一小时读完一本书，原来这么简单',
    desc: '昨晚，我用一小时的时间，读完了一本书，而且输出了满载书中精华内容的读书笔记，连我自己都感到不可思议。 就是这本《思考的艺术》。300多页。 心中...',
    imgUrl: '//upload-images.jianshu.io/upload_images/6392451-cba000113bb6a90a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }],
  recommendList: [{
    id: 1,
    imgUrl: 'banner-s-3-7123fd94750759acf7eca05b871e9d17.png',
  },
  {
    id: 2,
    imgUrl: 'banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
  },
  {
    id: 5,
    imgUrl: 'banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
  },
  {
    id: 3,
    imgUrl: 'banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
  },
  {
    id: 4,
    imgUrl: 'banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
  },
  ],
  writerList: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LIST:
      return state.set('writerList', action.data);
    default:
      return state;
  }
};
