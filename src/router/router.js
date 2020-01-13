import React, { Component } from 'react';
import Routerview from './Routerview'
import routes from './Routerconfig'
class store extends Component {
    render() {
        return (

               <Routerview routes={routes}></Routerview>

        );
    }
}

export default store;