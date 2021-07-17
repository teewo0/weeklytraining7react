
// import React from 'react'


// export default class Button2 extends React.Component {
//    render() {
//        return <button>Sign Out</button>;
//    }

// }

import React, { Component } from 'react'

export default class Button2 extends Component {
    render() {
        return <button>{this.props.text}</button>;
    }
}

