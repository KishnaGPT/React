//first step
// import { Component } from "react";

// export function Header(){
//     return <h1>Welcome Shield from Header</h1>
// }

// export function Footer(){
//     return <h1>Welcome Shield from Footer</h1>
// }

// export function Avenger(props){
//     return <h1>I am {props.fname} {props.lname} from Avenger Function</h1>
// }

// export class AvengerClass extends Component{
//     render(){
//         return <h1>I am {this.props.fname} {this.props.lname} from Avenger Class</h1>
//     }
// }


import {Component} from "react";

export function Header(){
    return <h1>Welcome Shield from Header</h1>
}

export function Footer(){
    return <h1>Welcome Sheild from Footer</h1>
}

export function Avenger(props){
    return <h2>Hello I am {props.fname} {props.lname} from Function</h2>

}
export class AvengerClass extends Component{
    render(){
        return <h2>Hello I am {this.props.fanme} {this.props.lname} from Class</h2>
    }
}
