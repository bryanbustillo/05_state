import React from 'react';

class EmployeeForm extends React.Component{
    initialState = {
        id: 0,
        name: '',
        position: '',
    };
    
    state = this.initialState;

    render(){
        const { id, name, position } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">ID</label>
                <input type='number' id="id" name="id" placeholder="ID" value={id} onChange={this.handleChange}/>
                <label htmlFor="name">Name</label>
                <input type='text' id="name" name="name" placeholder="Name" value={name} onChange={this.handleChange}/>
                <label htmlFor="position">Position</label>
                <input type='text' id="position" name="position" placeholder="Position" value={position} onChange={this.handleChange}/>

                <input type="submit" value="Hire"/>
            </form>
        )
    }

    // handleChange = function(e){
    //     const { name, value } = e.target;
    //     this.setState({
    //         [name]: value, 
    //     });
    // }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value, 
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const {hire} = this.props;
        hire(this.state);
        this.setState(this.initialState);
    }
}

export default EmployeeForm;

