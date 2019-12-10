import React, { Component } from 'react'

// import { connect } from 'react-redux'
import { getUserInfo } from '../redux/actions/getUserInfo'


class UserForm extends Component {

    state = {
        firstName: ''
    }

    handleChange = (event) => {
         this.setState({
             firstName: event.target.value
         })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.getUserInfo(this.state.firstName)
        // this.setState({
        //     firstName: ''
        // })
        localStorage.setItem('auth', true)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                    <input 
                    type="text" 
                    // placeholder="First Name" 
                    onChange={this.handleChange}
                    />
                    <h4>{this.state.firstName}</h4>
                    <button type="submit">Enter Name</button>
                    </label>
                   
                </form>
                
            </div>
        )
    }
}

export default UserForm