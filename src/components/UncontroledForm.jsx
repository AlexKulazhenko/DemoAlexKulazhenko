import React from "react";

class UncontroledForm extends React.Component{
    constructor(){
        super();
        this.cardRef= React.createRef();
        this.emailRef=React.createRef()
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        if(this.cardRef.current.value.length<16){
            alert('invalid card number')
            return
        }
        this.cardRef.current.value = ''
        this.emailRef.current.value = ''
    }

    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='card'
                    name="card" 
                    ref={this.cardRef}
                />    
                <input 
                    type='email'    
                    placeholder='email'
                    name='email' 
                    ref={this.emailRef}
                />
                <button>Submit</button>
                
            </form>
        )
    }
}
export default UncontroledForm;