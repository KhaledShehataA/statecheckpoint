import React, {Component} from 'react';
import './App.css';
import {Person} from './components/Person/index';

class App extends Component {

  state = {
    Person: [
      {
        id: 1,
        fullName: "Khaled Ahmed",
        bio: "Hello Geeks!",
        imgSrc: "",
        profession: "Frontend Engineer",
        isShow: true,
      }
    ]
  }

  
  render() {
    const showImage = () => {
      if (this.state.Person.isShow) {
          console.log("ShowImage")
      } else {
          console.log("Not Found")
      }
  }
  
    return (
      <div className="App">
        <Person  person={this.state.Person} showImage= {showImage}/>
      </div>
    );

  }
}

export default App;
