import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './AddFacility.css'
class AddFacility extends Component {
	

//class Reservation extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		isAvailable: true,
		numberOfEquipments: 2
	  };
  
	  this.handleInputChange = this.handleInputChange.bind(this);
	  this.state = {value: 'football'};

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	  }
	
	  handleSubmit(event) {
		alert('submit: ' + this.state.value);
		event.preventDefault();
	  };
	  
  
	handleInputChange(event) {
	  const target = event.target;
	  const value = target.type === 'checkbox' ? target.checked : target.value;
	  const name = target.name;
  
	  this.setState({
		[name]: value
	  });
	  function shoot() {
		alert("Form Submitted!");
	  }
	  
	  const myelement = (
		<button onClick={shoot}>Submit!</button>
	  );
	}
  
	render() {
		const mystyle = {
			color: "pink",
			backgroundColor: "DodgerBlue",
		
			padding: "10px",
			fontFamily: "Arial"
			
		};
		
		function shoot() {
			alert("Form Submitted!");
		  }	
		
			
		
	  return (
		
			  
		  	<form  class="frm1">
				 
			
		<h1 class="wrapper">ABC Sports Facility</h1>
		
	   <h2 class="h2">Add Facility</h2>
	   <br></br>
		  <form onSubmit={this.handleSubmit}>
			  <table>
          <thead>
           
          </thead>
          <tbody>
			  <tr>
				  <th>Facility Name</th>
				  <td> <label class="lbl2">
			<input
			  name="sportName"
			  type="text"
			  />
		  </label>
		  <br></br></td>
			  </tr>
            <tr>
              <th>Address : </th>
              <td> <label class="lbl2">
		
			<input
			 
			  type="text"
			 
			  />
		  </label>
		  <br></br>
    
		 </td>
     </tr>
     <tr>
     <th>Sports Available</th>
     
              <td> <label class="lbl2">
         
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="cricket">Cricket</option>
            <option value="tennis">Tennis</option>
            <option value="football">Football</option>
            <option value="baseball">Baseball</option>
          </select>
        </label></td>
      </tr>
            <tr>
            <th>Bookings Enabled : </th>
            <td><label class="lbl2">
					Is Enabled:
					<input
						name="isAvailable"
						type="checkbox"
						checked={this.state.isAvailable}
						onChange={this.handleInputChange} />
				</label></td>
            </tr>
               </tbody>
			 
        </table>
		
		
	  
		
		<button onClick={shoot} >Submit!</button>
	  
		
      </form>
		</form>
		
		
	  
	  );
	}
  }

  
  ReactDOM.render(
	<AddFacility />,
	document.getElementById('root')
  );
  

  

export default AddFacility