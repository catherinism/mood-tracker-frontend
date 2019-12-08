import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuotes } from '../redux/actions/quotesActions'

class QuotesContainer extends Component {
    state = {
        quotes: []
    }
    componentDidMount() {
       this.props.fetchQuotes()
    }
    
    render() {
        if (this.props.quotes.length === 0) {
            return <h1>Loading quotes...</h1>
        }
        return (
            <div>
                <ul>
                    {this.props.quotes.map(quote => (
                    <div key = {quote.id} >
                        <p>Quote: {quote.phrase}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quotes: state.quotes
    }
}
export default connect(
    mapStateToProps, 
    { fetchQuotes }
    )(QuotesContainer)