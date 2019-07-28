'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';

class Search extends React.Component{
    render(){
        return <h1 className="some-text">Some Search Text</h1>;
    }
}

ReactDOM.render(
    <Search /> ,
    document.getElementById('root')
)

