import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constatnts';

export const getList = () => (dispatch) => {
  axios.get('/api/writer', {
  }).then(({ data }) => {
    console.log(data);
    dispatch(changeList(data));
  }).catch(err => console.log(err));
};
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data.users),
  totalPage: Math.ceil(data.total_count / 5),
});
