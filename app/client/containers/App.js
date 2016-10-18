import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as LayoutActions from '../actions/layout'
import Home from '../components/Home'
import DevTools from './DevTools';

console.log("111")

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('componentWillMount')
    } 

    componentDidMount(){
        console.log('componentDidMount')
    }

    render() {
        // const { todo } = this.props;
        console.log('this.props:' + this.props)
        return (
            <div>
                <div>
                    Hello World!
                </div>
                <div>
                    { !this.props.children && <Home />}
                    { this.props.children}
                </div>
                <DevTools />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        // todo: state.todo.present
    }
}

function mapDispatchToProps(dispatch) {
    console.log(LayoutActions)
    return bindActionCreators(LayoutActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)