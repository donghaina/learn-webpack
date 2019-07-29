'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from '../src/images/avatar.jpg'
import wechat from '../src/images/wechat.png'

class Search extends React.Component{
    render(){
        return <div className="page-content">
            <img src={logo}/>
            <img src={wechat}/>
            <h1>Some Search Text</h1>
            </div>;
    }
}

ReactDOM.render(
    <Search /> ,
    document.getElementById('root')
)

