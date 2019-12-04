import React, { Component } from 'react'

export default class QuotesContainer extends Component {
    state = {
        quotes: []
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/v1/quotes")
            .then(res => res.json())
            .then(quotes => this.setState({quotes}))
    }
    render() {
        if (this.state.quotes.length === 0) {
            return <h1>Loading quotes...</h1>
        }
        return (
            <div>
                <ul>
                    {this.state.quotes.map(quote => (
                    <div>
                        <p>Quote: {quote.phrase}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}
