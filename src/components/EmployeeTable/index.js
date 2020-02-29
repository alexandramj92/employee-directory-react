import React, {Component} from "react";
import "./style.css";
import employees from "./employees.json";
import EmployeeRow from "../EmployeeRow";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';






class EmployeeTable extends Component {
    // Setting this.state.employees to the employees json array

 state = {
    employees: employees,
    search: '',
    isSortedASC: false,
    isSortedDSC: false,
    columnName: 'lastName'

  };

  handleInputChange = event => {
      this.setState({ search: event.target.value });
   
  };
  

  sortColumn = event => {
      this.setState({columnName: event.target.parentNode.getAttribute('value')})
      let value = this.state.columnName;

      switch(this.state.isSortedASC) {
        case false : 
          this.setState({ isSortedASC: true, isSortedDSC: false});
          employees.sort(
                  function(a, b) {
                  var valueA = a[value]; // ignore upper and lowercase
                  var valueB = b[value]; // ignore upper and lowercase
                  if (valueA < valueB) {
                    return -1;
                  }
                  if (valueA > valueB) {
                    return 1;
                  }
                
                  // names must be equal
                  return 0;
                });        
          break;
        case true :
          this.setState({isSortedASC: false, isSortedDSC: true});
          employees.sort(
          function(a, b) {
            var valueA = a[value]; // ignore upper and lowercase
            var valueB = b[value]; // ignore upper and lowercase
            if (valueA < valueB) {
              return 1;
            }
            if (valueA > valueB) {
              return -1;
            }
          
            // names must be equal
            return 0;
          });        
        break;

        default : 
          this.setState({isSortedASC: true, isSortedDSC: false});

    } 
      
  };
 

  render () {
    let selectedDep = this.state.search;

    return (
      <div>
      
      <Form>
      <Form.Label>Search by Department: </Form.Label>
      <Form.Control
            type="text"
            value={this.state.search}
            onChange={e => this.handleInputChange(e)}
            placeholder= "dpt name"
      />

      </Form>
      
      <Table striped bordered hover responsive>
                <thead value="thead">
                    <tr value="tr">
                    <th value="id">id</th>
                    <th value="firstName">First Name</th>
                    <th value="lastName">Last Name<Button value="btnVal" variant="outline-info" size="sm" onClick = {e => this.sortColumn(e)}> Sort</Button></th>
                    <th value="department">Department</th>
                    <th value="title">Title</th>
                    <th value="location">Location</th>
                    <th value="hobby">Hobby</th>
                    </tr>
                </thead>

                <tbody>

                {selectedDep ? this.state.employees.filter(function(employee) {
                return employee.department === selectedDep;

               }).map(employee => (
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
               )): this.state.employees.map(employee => (
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

               {/* {this.state.employees.filter(function(employee) {
                return employee.department === selectedDep;

               }).map(employee => (
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
               ))} */}
                
                </tbody>
            </Table>



      </div>
      
       
      
    );

  }
    
  }
  
  export default EmployeeTable;


//   switch(this.state.isSortedASC) {
//     case false : 
//     this.setState({ isSortedASC: true});
//     employees.sort(
//       function(a, b) {
//       var lastNameA = a.lastName.toUpperCase(); // ignore upper and lowercase
//       var lastNameB = b.lastName.toUpperCase(); // ignore upper and lowercase
//       if (lastNameA < lastNameB) {
//         return -1;
//       }
//       if (lastNameA > lastNameB) {
//         return 1;
//       }
    
//       // names must be equal
//       return 0;
//     });
//     break;
//     case true :
//     this.setState({isSortedASC: false, isSortedDSC: true});
//     employees.sort(function(b, a) {
//       var lastNameA = a.lastName.toUpperCase(); // ignore upper and lowercase
//       var lastNameB = b.lastName.toUpperCase(); // ignore upper and lowercase
//       if (lastNameB < lastNameA) {
//         return -1;
//       }
//       if (lastNameB > lastNameA) {
//         return 1;
//       }
    
//       // names must be equal
//       return 0;
//     });
//     break;



// }
