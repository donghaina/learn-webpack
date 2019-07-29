'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from '../src/images/avatar.jpg'

class Search extends React.Component{
    render(){
        return <h1 className="some-text">
            <img src={logo}/>
            <span>Search Text</span>
            </h1>;
    }
}

ReactDOM.render(
    <Search /> ,
    document.getElementById('root')
)

