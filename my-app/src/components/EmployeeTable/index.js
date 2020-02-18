import React, {Component} from "react";
// import "./style.css";
import employees from "./employees.json";
import EmployeeRow from "../EmployeeRow";
import Table from 'react-bootstrap/Table';




class EmployeeTable extends Component {
    // Setting this.state.employees to the employees json array

 state = {
    employees
  };

  render () {
    return (
        <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Hobby</th>
                    </tr>
                </thead>

                <tbody>
               {this.state.employees.map (employee => (
                <EmployeeRow
                    key={employee.id}
                    id={employee.id}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    department={employee.department}
                    title={employee.title}
                    location={employee.location}
                    hobby={employee.hobby}
                 />
               ))}
                
                </tbody>
            </Table>
       
      
    );

  }
    
  }
  
  export default EmployeeTable;