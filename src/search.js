'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from '../src/images/avatar.jpg'
import wechat from '../src/images/wechat.png'

class Search extends React.Component{
    render(){
        return <h1 className="some-text">
            <img src={logo}/>
            <img src={wechat}/>
            <span>Some Search Text</span>
            </h1>;
    }
}

ReactDOM.render(
    <Search /> ,
    document.getElementById('root')
)

