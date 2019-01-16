import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriteWrapper, WriteItem } from '../style';
import { actionCreators } from '../store';

class Writer extends PureComponent {
  componentDidMount() {
    const { list, handlegetList } = this.props;
    handlegetList(list);
  }

  render() {
    const { list } = this.props;
    if (list.size !== 0)
    {
      return (
        <WriteWrapper>
          { list.map(item => (
            <WriteItem key={item.get('id')}>
              <img className="ava" src={`${item.get('avatar_source')}?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp`} alt="" />
              <div className="follow">+关注</div>
              <div className="nick-name">{item.get('nickname')}</div>
              <div className="p">{`写了${item.get('total_wordage')}字 · ${item.get('total_likes_count')}喜欢`}</div>
            </WriteItem>
          )) }

        </WriteWrapper>
      );
    }
    return null;
  }
}
// const Writer = (props) => {


// };
const mapState = state => ({
  list: state.getIn(['home', 'writerList']),
});
const mapDispatch = dispatch => ({
  handlegetList() {
    dispatch(actionCreators.getList());
  },

});
export default connect(mapState, mapDispatch)(Writer);
