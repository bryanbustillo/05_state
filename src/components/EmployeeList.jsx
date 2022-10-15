import React from 'react';
import Employee from './Employee';
import EmployeeForm from './EmployeeForm';

class EmployeeList extends React.Component{
    state = {
        employees: [
            {
                id: 1,
                name: 'Bryan',
                position: 'Manager',
            },
            {
                id: 2,
                name: 'Ronald',
                position: 'CEO',
            },
            {
                id: 3,
                name: 'Josue',
                position: 'Salesman',
            },
        ],
    };
                 
    render(){        
        return(
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <Employee 
                            key={employee.id} 
                            id={employee.id} 
                            name={employee.name} 
                            position={employee.position} 
                            fire={this.fireEmployee}/>
                        ))}             
                    </tbody>
                </table>

                <hr/>

                <EmployeeForm hire={this.hireEmployee}/>
            </React.Fragment>          
        );
    };

    fireEmployee = id => {
        const {employees} = this.state;
        //const filterEmployees = employees.filter(employee => employee.id !== id);
        this.setState({
            employees: employees.filter(employee => employee.id !== id),
        });
    };

    hireEmployee = employee => {
        this.setState({
            employees: [...this.state.employees, employee],
        });
    }
}

export default EmployeeList;