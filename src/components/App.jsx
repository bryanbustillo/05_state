import React from 'react';
import EmployeeList from './EmployeeList';

class App extends React.Component{
    render(){
      return (
        <div className='App'>
          <h1>Hello React!</h1>
          <EmployeeList/>
        </div>
      );
    }
  }

  export default App;