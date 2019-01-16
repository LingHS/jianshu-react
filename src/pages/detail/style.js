import style from 'styled-components';

export const DetailWarpper = style.div`
    overflow:hidden;
    width: 620px;
    margin: 0 auto;
    padding-bottom:100px;
`;

export const Header = style.div`
    overflow:hidden;
    width: 620px;
    margin: 50px 0 20px 0;
    font-size:34px;
    color:#333;
    line-height:44px;
    font-weight: 700;
`;

export const Content = style.div`
    color:#2f2f2f;
    p{
        margin: 0 0 25px;
        color: #2f2f2f;
        word-break: break-word!important;
        word-break: break-all;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
    }
`;
