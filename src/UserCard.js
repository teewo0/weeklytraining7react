import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
            <h2>Name: {this.props.myUser.name}</h2>
            <p>Age: {this.props.myUser.age}</p>
            <p>Height: {this.props.myUser.height}</p>
            </div>
        )
    }
}
