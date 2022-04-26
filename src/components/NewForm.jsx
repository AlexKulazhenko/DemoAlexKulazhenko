import React from "react";

class NewForm extends React.Component{
    state = {
        email: '',
        subscription: ''
    }

    handleChange = (event) =>{
        this.setState({email: event.target.value})
    }
    handleSubsriptions = (event) =>{
        this.setState({subscription: event.target.checked})
    }

    checkSubsription = ()=>{
        const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)
        const valideCheckbox = this.state.subscription

        if(!validateEmail){
             alert(`Email is not valid`)
             return
        }
        else if (!valideCheckbox){
            alert(`You should accept all teerms and conditions`)
            return
        }
        else{
            this.setState({
                email: '',
                subscription: ''
            })
            alert('Thank you for subsription!')
        }


    }

    render(){
        const {email, subscription} = this.state
        return(
            <div>
                <input 
                    type='email'
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
                <br />
                <input
                    type='checkbox'
                    name="subscription"
                    checked={subscription}
                    onChange={this.handleSubsriptions}
                /> I agree with terms and conditions
                <br />
                <button onClick={this.checkSubsription}>Send</button>

            </div>
        )
    }
}

export default NewForm;