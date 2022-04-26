import React, {Component} from 'react';
import Form from './components/Form';
import FormWithRef from './components/FormWithRef';
import NewForm from './components/NewForm';
import UncontroledForm from './components/UncontroledForm';

const App =() => {
    return (
        <div>
            <Form/>
            <NewForm/>
            <FormWithRef/>
            <UncontroledForm/>
        </div>
    );
}

export default App;
