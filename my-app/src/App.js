import React, {Component} from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/EmployeeTable";
// import './App.css';

class App extends Component {
  
  // Map over this.state.employees and render a EmployeeRowcomponent for each employee object
render () {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <EmployeeTable/>
    </Wrapper>
  
    );

}
  
}

export default App;
