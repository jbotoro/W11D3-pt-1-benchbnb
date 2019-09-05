import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    renderErrors () {
        return (
            <ul>
                {this.props.errors.map( (error, idx) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render () {
        return (
            <div className='login-form-parent'>
                <form onSubmit={this.handleSubmit} className='login-form'>
                    {this.props.formType} or {this.props.navLink}
                    <br/>
                    {this.renderErrors()}

                    <div className='login-label-container'>
                        <label> Username:
                            <input 
                            type="text" 
                            value={this.state.username} 
                            />
                        </label>
                        <br/>
                        <label> Password:
                            <input 
                            type="password" 
                            value={this.state.password} 
                            />
                        </label>
                        <br/>
                        <input className="login-submit" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;