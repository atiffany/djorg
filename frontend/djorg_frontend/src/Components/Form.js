import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {

    handleSubmit= event => {
        event.preventDefault();
        axios.post('/', form.input) // todo: figure out how to send an axios post with html form data (of varying input)
            .then(response => {
                res.json(response.data);
            })
            .catch(error => {
                res.json({ error });
            });
    };

    render() {
        // todo: map through props???
        // todo: restyle the form's css
        return (
            <form className="form">
                <input className="input" type ="text" placeholder={ this.props.title } />
                <br/>
                <button className ="input button" type = "submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }   
}
export default Form;