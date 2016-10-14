import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as LayoutActions from '../actions/layout'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         todos:state.todos.
//     }
// }

export default connect({}, {})(App)