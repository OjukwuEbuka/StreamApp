import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({touched, error}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta})=>{
        const classNm = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={classNm}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formVals)=>{
        this.props.onSubmit(formVals);
    }

    render () {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title:" />
                <Field name="description" component={this.renderInput} label="Enter Description:" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.title) errors.title = "You must enter a title!";
    if(!formValues.description) errors.description = "You must enter a description!";
    
    return errors;
}

export default reduxForm({form: 'streamForm', validate,})(StreamForm);
