import { Component } from "react";

export class AvengerState extends Component{
    
        state={
            name: 'Steve Roger'
        }

        //Arrow Function
        changeName=()=>{
            this.setState({'name':'Tony Stark'})
        }

        render(){
            return <>
                <h1>I am {this.state.name}</h1>
                <button type="submit" onClick={this.changeName}>Change Name</button>
            </>
        }
}