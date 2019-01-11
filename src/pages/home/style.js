import style from 'styled-components';

export const HomeWrapper = style.div`
overflow:hidden;
width: 960px;
margin: 0 auto;
// height: 300px;
// background: red;
`
;
export const HomeLeft = style.div`
width: 625px;
padding-top: 30px;
margin-left: 15px;
float: left;
.banner-img{
    width:625px;
    height: 270px;
}
`
;
export const HomeRight = style.div`
width: 240px;
float: right;
`
;
export const TopicWrapper = style.div`
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
`
;
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
`
;
