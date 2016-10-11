import React,{ Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                Hello World!
            </div>
        )
    }
}