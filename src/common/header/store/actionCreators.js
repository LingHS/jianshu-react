import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constatnts';

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const getList = () => (dispatch) => {
  axios.get('/api/trending_search', {
  }).then(({ data }) => {
    dispatch(changeList(data));
  }).catch(err => console.log(err));
};

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});
export const changePage = page => ({
  type: constants.CHANGE_PAGE,
  page,
});
