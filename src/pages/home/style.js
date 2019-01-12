import style from 'styled-components';

export const HomeWrapper = style.div`
overflow:hidden;
width: 960px;
margin: 0 auto;
`;
export const HomeLeft = style.div`
width: 625px;
padding-top: 30px;
margin-left: 15px;
float: left;
.banner-img{
    width:625px;
    height: 270px;
}
`;
export const HomeRight = style.div`
float: right;
`;
export const TopicWrapper = style.div`
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = style.div`
float:left;
background:#f7f7f7;
height:32px;
line-height:32px;
font-size:14px;
color:#000;
border: 1px solid #dcdcdc;
border-radius:4px;
margin-left: 18px;
padding-right: 10px;
margin-bottom: 18px;
.topic-pic{
    width:32px;
    height:32px;
    float:left;
    display:block;
    margin-right: 10px;
}
`;
export const ListItem = style.div`
    padding: 20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = style.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height: 24px;
        font-size:13px;
        color:#999;
        
    }
`;
export const RecommendWrapper = style.div`
    margin: 26px 0 30px 0;
    width: 280px;
    margin-top: ;
`;
export const RecommendItem = style.div`
    width:280px;
    height:50px;
    background:url(${props => props.imgUrl});
    background-size:100%;
    margin-bottom:6px;
`;
export const WriteWrapper = style.div`
width:278px;
border: 1px solid #dcdcdc;
border-radius: 3px;
height: 300px;
// line-height:300px;
// text-align:center;
`;
export const WriteItem = style.div`
    margin-top: 15px;
`;
