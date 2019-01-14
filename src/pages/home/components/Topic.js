import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
// class Detail extends Component {
//   render() {

//   }
// }
const Topic = (props) => {
  const { topicList } = props;
  return (

    <TopicWrapper>
      {
        topicList.map(item => (
          <TopicItem key={item.get('id')}>
            <img
              alt=""
              className="topic-pic"
              src={item.get('imgUrl')}
            />
            {item.get('title')}
          </TopicItem>))
      }

    </TopicWrapper>
  );
};
const mapStateToProps = state => ({
  topicList: state.getIn(['home', 'topicList']),
});
  // const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, null)(Topic);
