import React, {Component} from 'react';
import './App.css';

class App extends React.Component {

constructor(props){
  super();
  this.state = {
    title: 'Add University',  
    universities: []
  }
}
componentDidMount(){
  console.log('COMPONENT HAS MOUNTED');
  fetch('http://localhost:3000/api/universities')
  .then(function(response){
    response.json()
    .then(function(uni_data){
      console.log(uni_data)
    })
  })
}
addUni(event){
  event.preventDefault();
  let uni_data = {
    name: this.refs.name.value,
    location: this.refs.location.value,
    numStudents: this.refs.numStudents.value

  };
 var request = new Request('http://localhost:3000/api/new-uni',{
 method: 'POST',
 headers: new Headers({ 'Content-Type': 'application/json' }),
 body: JSON.stringify(uni_data)
});

 fetch(request)
 .then(function(response){
   response.json
   .then(function(data){
     console.log(data)
   })
 })
 .catch(function(err){
   console.log(err)
 })

}

render(){
  let title = this.state.title;
  let universities = this.state.universities;
  return (
    
    <div className="App">
      <h1>{title}</h1>
      <form ref="universityForm">

        <input type="text" ref="name" placeholder="Uni Name"/>
        <input type="text" ref="location" placeholder="Uni Location"/>
        <input type="text" ref="numStudents" placeholder="Number of students"/>

        <button onClick={this.addUni.bind(this)}>Add University</button>
      </form>
      <ul>
        {universities.map(universities =>universities.name)}
      </ul>
    </div>
  );
  }
  
}

export default App;
