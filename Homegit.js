import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
//import data from "./data.json";
import './HomeApp.css';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";


class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {value: 'Kolkata'};
	  this.state = {value: 'ABCPune'};
	  this.state = {value: '9AM-10AM'};
      this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	        handleChange(event) {
			this.setState({value: event.target.value});
		    };
	
	  handleSubmit(event) {
		alert('Location is: ' + this.state.value);
		event.preventDefault();
	  };
	  render() {
	  function shoot() {
	  alert("Form Submitted!");
		  }	
		  return (
		 
			  <form class="frm1">
				  <link href = "https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
		  rel = "stylesheet"/>
	   <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>
	   <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	  
	   <form class="frm1">  
			<div  >
		<h1  class="wrapper">ABC Sports Facility</h1>
		
		<div class="tab">
        <button ><a href="/UserManagement">User Management</a></button>
        <button><a href="/Admin/FacilityOverview">Admin</a></button>
        <button><a href="/Home/Booking">Home/Booking</a></button>
    </div>
   </div>
   <br></br>
   <label class="lbl1">
          Location:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </label>
		<br></br>
		<h2 class="h2">Booking Page</h2>
		<br></br>
		<br></br>

    <table>
          <thead>
           
          </thead>
          <tbody>
            <tr>
              <th>Select Facility </th>
              <td><label class="lbl2">
         
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="ABCPune">ABCPune</option>
            <option value="PQRMumbai">PQRMumbai</option>
            <option value="OPSDelhi">OPSDelhi</option>
            <option value="BWKolkata">BWKolkata</option>
          </select>
		 </label>
    
		 </td>
     </tr>
     <tr>
     <th>Select Date</th>
     
              <td>	<p class="p">Enter Date:<DatePickerComponent></DatePickerComponent> </p>
		  <br></br></td>
      </tr>
           
			<tr>
      <th>Sports Available</th>
              <td><label class="lbl2" text-align="left">
        
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="cricket">Cricket</option>
            <option value="tennis">Tennis</option>
            <option value="football">Football</option>
            <option value="baseball">Baseball</option>
          </select>
        </label></td>
        </tr>
            <tr>
            <th>TimeSlot</th>
            <td><label class="lbl2">
        
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="7AM-8AM">7AM-8AM</option>
            <option value="8AM-9AM">8AM-9AM</option>
            <option value="9AM-10AM">9AM-10AM</option>
            <option value="10AM-11AM">10AM-11AM</option>
			<option value="11AM-12PM">11AM-12PM</option>
			<option value="12PM-1PM">12PM-1PM</option>
          </select>
		  </label></td>
            </tr>
               </tbody>
			 
        </table>
	
		
		  <form onSubmit={this.handleSubmit}>
			 
	  <br></br>
	  <h2 class="h2">Equipments</h2>
	  <br></br>
	  <table>
          <thead>
            <tr>
              <th>Equipments</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CricketBall</td>
              <td>10</td>
            </tr>
			<tr>
              <td>CricketBat</td>
              <td>2</td>
            </tr>
			<button onClick={shoot}>Add</button>
               </tbody>
			 
        </table>
		<br></br>
		<table>
          <thead>
            <tr>
              <th colSpan="3">Equipment Summary</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CricketBall</td>
              <td>5</td>
			  <td><button onClick= "myFunction()">Edit</button></td>
            </tr>
			<tr>
              <td>CricketBat</td>
              <td>2</td>
			  <td><button onClick= "myFunction()">Edit</button></td>
            </tr>
			
			
               </tbody>
			 
        </table>
        <br/>
		
		<button onClick={shoot} text-align="center">Book Now</button>
		<br>
		</br>
		<h2 class="h2">Upcoming Events</h2>
		<table>
          <thead>
            <tr>
              <th>BookingId</th>
              <th>Date</th>
			  <th>Venue</th>
			  <th>Timeslot</th>
			  <th>Sports</th>
			  <th>Equipments Booked</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td>1001</td>
              <td>12-05-2021</td>
			  <td>ABCPune </td>
			  <td>9AM-10AM </td>
			  <td>Cricket </td>
			  <td>Bat=2,Ball=4
			   </td>
            </tr>
            
              
          </tbody>
        </table>
	  
	
      </form>
		</form>
		</form>
		
	  
	  );
	}
}
	  
;
  
 // ReactDOM.render(
	//<Form />,
	//document.getElementById('root')
 // );
//export default Form

  

export default Home