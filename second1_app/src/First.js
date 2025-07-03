// First Step

import {Component} from "react";

export function Header(props){
    return <h1>Welcome! We Are <q>{props.name}</q> </h1>
}

export class AvengersClass extends Component{
    render(){
        return <h2>I am {this.props.fname} {this.props.lname}. People Call Me <q>{this.props.name}</q></h2>
    }
}

export function Footer(){
    return <h1>Thank You!</h1>
}