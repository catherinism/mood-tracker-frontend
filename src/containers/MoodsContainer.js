import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMoods } from '../redux/actions/moodsActions'

class MoodsContainer extends Component {
    state = {
        moods: []
    }
    componentDidMount() {
        this.props.fetchMoods()
    }

    render() {
        if (this.props.moods.length === 0) {
            return <h1>Loading moods...</h1>
        }
        return (
            <div>
                <ul>
                    {this.props.moods.map(mood => (
                    <div key = {mood.id} >
                    <p>Feeling: {mood.feeling}</p>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        moods: state.moods
    }
}
export default connect(
    mapStateToProps, 
    { fetchMoods }
    )(MoodsContainer)