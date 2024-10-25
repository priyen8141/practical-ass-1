import React, { Component } from 'react'

export default class Employee extends Component {
  render() {
    return (
      <div>
        
        Employee Name is Smit.
        <br/>
        {this.props.id}


      </div>
    )
  }
}
