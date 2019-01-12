import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
// class Detail extends Component {
//   render() {

//   }
// }
const Recommend = (props) => {
  const { list } = props;
  return (
    <RecommendWrapper>
      {list.map(item => (
        <RecommendItem key={item.get('id')} imgUrl={`/api/banner-img/${item.get('imgUrl')}`} />
      ))}

    </RecommendWrapper>
  );

};
const mapState = state => ({
  list: state.getIn(['home', 'recommendList']),
});
export default connect(mapState, null)(Recommend);
