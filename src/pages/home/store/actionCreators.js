import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constatnts';

export const getList = () => (dispatch) => {
  axios.get('/api/writer', {
  }).then(({ data }) => {

    dispatch(changeList(data));
  }).catch(err => console.log(err));
};
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data.users),
  totalPage: Math.ceil(data.total_count / 5),
});
const addHomeList = list => ({
  type: constants.ADD_HOMELIST,
  list: fromJS(list),
});

export const getMoreList = () => (dispatch) => {
  axios.get('api/homeMore.json').then((res) => {
    const result = res.data.articleList;
    console.log(result);
    dispatch(addHomeList(result));
  });
};
export const toggleTopShow = flag => ({
  type: constants.TOGGLE_TOP_SHOW,
  flag,
});

