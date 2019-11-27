import React, { Component } from 'react'

export default class MoodsContainers extends Component {
    state = {
        moods: []
    }
    componentDidMount() {
        fetch('localhost:3000')
            .then(res => res.json())
            .then(moods => this.setState({ moods }))
    }
    render() {
        if (this.state.moods.length === 0) {
            return <h1>Loading...</h1>
        }
    }
}
