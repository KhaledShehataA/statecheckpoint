import { Component } from "react";


export class Person extends Component  {

    
    render() {
       
    return (
        <div>
            <h1>Hello Guys!</h1>
            <button onClick={this.props.showImage}></button>
            </div>

    )

    
}
}