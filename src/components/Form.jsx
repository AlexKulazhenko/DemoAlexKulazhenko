import React from "react";

class Form extends React.Component{
    state = {
        firstName: '',
        email: '', 
        message: '',
        select: '',
        subsription: '',
        gender:''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if(this.state.firstName.length < 7){
            alert(`Your first name can't be less than 7 letters`)
        }
    }

    validateEmail = () => {
        if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.
        test(this.state.email))){
            alert('email is not valid')
        }
    }

    handleCheckBoxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }


    render(){
        const {firstName, email, message, select, subsription, gender} = this.state
        return(
            <div>
                <input 
                    type='text' 
                    placeholder='firstName' 
                    name='firstName' 
                    value={firstName}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                />    
                <input 
                    type='email'    
                    placeholder='email'
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <br/>
                <br/>
                <textarea name="message" value={message} onChange={this.handleChange}/>
                <br/>
                <br/>
                <select name='select' value={select} onChange={this.handleChange}>
                    <option value='' disabled></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <br />
                <br />
                <label>
                    <input
                        type='checkbox'
                        name="subsription"
                        checked={subsription}
                        onChange={this.handleCheckBoxChange}

                    />
                    Subscription
                </label>
                <br />
                <br />
                <input type='radio' name='gender' value='male' onChange={this.handleChange} 
                       checked={gender === 'male'}/>Male
                <input type='radio' name='gender' value='female' onChange={this.handleChange}
                        checked={gender === 'female'}/>Female
            </div>
        )
    }
}
export default Form;