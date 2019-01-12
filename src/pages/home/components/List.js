import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo } from '../style';
// class Detail extends Component {
//   render() {

//   }
// }
const List = (props) => {
  const { list } = props;
  return (
    list.map(item => (
      <ListItem key={item.get('id')}>
        <img className="pic" alt="" src={item.get('imgUrl')} />
        <ListInfo>
          <h3 className="title">{item.get('title')}</h3>
          <p className="desc">
            {item.get('desc')}
          </p>
        </ListInfo>
      </ListItem>
    ))

  );
};
const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
});
export default connect(mapState)(List);
