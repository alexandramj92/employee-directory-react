import React from "react";
// import "./style.css";

function EmployeeRow(props) {
    return (
       
                <tr>
                    <td>{props.id}</td>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.department}</td>
                    <td>{props.title}</td>
                    <td>{props.location}</td>
                    <td>{props.hobby}</td>
                </tr>

       
      
    );
  }
  
  export default EmployeeRow;