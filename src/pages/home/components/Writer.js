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
              <div>{item.get('nickname')}</div>
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
