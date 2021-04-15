import React, { Component } from 'react';


class Contact extends Component {
    render() {
        return (
                <div className = "contact">
                <div className = "firstName">{this.props.contact.firstName}</div><span>{" "}</span>
                <div className = "lastName">{this.props.contact.lastName}</div>
                <div className = "phone">{this.props.contact.phone}</div>
                <div className = "gender">{this.props.contact.gender}</div>
                </div>
            

        )
    }


}
export default Contact;
