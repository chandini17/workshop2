import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"chinnu",
             Employee:[
                 {name:"suvarna"},
                 {name:"chiitti"}
             ]
        }
    }

    
    
    render() { 
        setTimeout(()=> 
        this.setState({name:"suvi"})
        ,5000 )

        return (
            <div>
            <h1> {this.state.Employee[1].name} </h1>
              <h2>{this.state.name}</h2>  
            </div>
        )
    }
}
        


        

