import React, { Component } from 'react';
import Contact from './Contact.js';

class Contracts extends Component {
    state = {
        search : "",
        contacts : [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }]
    }
    handleSearchChange = e => {
        this.setState({search: e.target.value})
        let search=this.state.search
        console.log(search)
        function isMatch (contact){
            let lastName=contact.lastName;
            console.log(lastName.toLowerCase());
            console.log(search.toLowerCase());
            return lastName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        }
        let currentContacts= this.state.contacts;
         let filteredContacts = currentContacts.filter(isMatch)
        console.log(filteredContacts);
        this.setState({contacts:filteredContacts})

    }
    

    render() {
        return (
      //      <div className = "contacts">{this.state.contacts.map((contact)=><div>{contact.firstName}</div>)}</div>
      <div className = "contacts"> 
      <div className= "input-search">
          <input value={this.state.search} onChange={this.handleSearchChange}  className= "input-search-field"  type="text"/>
          </div>
      {this.state.contacts.map((contacts) => 
      <Contact contact ={contacts}/>)}</div>
        )
    }
}

export default Contracts;


