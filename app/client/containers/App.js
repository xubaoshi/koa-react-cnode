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
        const { todo } = this.props;
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.todo)
    return {
        todo: state.todo.present
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(LayoutActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)