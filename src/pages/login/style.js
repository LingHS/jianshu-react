import style from 'styled-components';

export const LoginWarpper = style.div`
z-index:0;
position:absolute;
left:0;
right:0;
bottom:0;
top:0;
background:#eee;
`;

export const LoginBox = style.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    line-height:20px;
    box-sizing: border-box;
    text-align:center;
`
;
export const LoginTitle = style.div`
display:inline-block;
font-weight: 700;    
padding: 10px;
font-size: 18px;
color: #ea6f5a;
border-bottom: 2px solid #ea6f5a;
margin: 0 auto 50px;
`
;

export const Input = style.input`
    display:block;
    margin:0 auto;
    border-bottom: none;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    outline:none;
    box-sizing: border-box;
`
;
export const SignIn = style.div`
    background: #3194d0;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    box-sizing: border-box;
`
;
