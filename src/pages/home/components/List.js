import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
// class Detail extends Component {
//   render() {

//   }
// }
const List = (props) => {
  const { list, getMoreList } = props;
  return (
    <Fragment>
      {
        list.map((item, index) => (
          <Link key={index} to={`/detail/ ${item.get('id')}`}>
            <ListItem>
              <img className="pic" alt="" src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">
                  {item.get('desc')}
                </p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
      <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
    </Fragment>
  );
};
const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
});
const mapDispatch = dispatch => ({
  getMoreList() {
    dispatch(actionCreators.getMoreList());
  },
});
export default connect(mapState, mapDispatch)(List);
