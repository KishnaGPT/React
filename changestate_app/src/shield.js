import { Component } from "react";

export class AvengerClass extends Component{
    
        state={
            // name: "Bruce Banner",
            // heroic_name:"Hulk",

            name: this.props.name,
            heroic_name: this.props.heroic_name
        }

    render(){
        return <h1>I am {this.state.name} and people call me <q>{this.state.heroic_name}</q></h1>
    }
}