import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './FacilityOverview.css';
import Auto from './Auto'; 
//import data from "./data.json";
class FacilityOverview extends Component {


    //class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAvailable: true,
            numberOfEquipments: 2
        };
        this.state = { value: 'Kolkata' };
        this.state = { value: 'ABCPune' };
        this.state = { value: '9AM-10AM' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = { value: 'football' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
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
        function a() {
            ("#datepicker-13").datepicker();
            ("#datepicker-13").datepicker("show");
        };
        function myFunction() {
            window.location.replace("App.js")
        }
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

            <form class="frm1">
                <link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"
                    rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
                <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

                <form >
                    <div  >
                        <h1 class="wrapper">ABC Sports Facility</h1>

                        <div class="tab">
                            <button > <a href="/UserManagement">User Management</a></button>
                            <button><a href ="/Admin/FacilityModifier">Admin</a></button>
                            <button><a href="/Home">Home/Booking</a></button>
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
                    <h2 class="h2">Facilities Overview</h2>
                    <br></br>
                    <div>
                    <p class="p">
    <label for="tags" class="p">Search Facility :  </label>
    <input id="tags"  autofocus placeholder=" Enter Facility Name" ></input>
            </p>
            </div>
            <br />
                    <br></br>
                    <br></br>
                    <table>
                        <thead>
                            <tr>
                                <th>FacilityId</th>
                                <th>FacilityName</th>
                                <th>Address</th>
                                <th>Location</th>
                                <th>IsEnabled</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ABC Badminton</td>
                                <td>Guindy</td>
                                <td>11AM-12PM</td>
                                <td>  <label>
                                    <input
                                        name="isGoing"
                                        type="checkbox"
                                    />
                                </label></td>
                                <td><button onClick="myFunction()">Edit</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>PQRPune</td>
                                <td>Central</td>
                                <td>10AM-11AM</td>
                                <td> <label>
                                    <input
                                        name="isGoing"
                                        type="checkbox"
                                    />
                                </label></td>
                                <td><button onClick="myFunction()">Edit</button></td>
                            </tr>

                        </tbody>
                   </table>
                   <br />
                       
                        <button class="btn2"><a href="/AddFacility">Add Facility</a></button>
                        <button>Save Edited Facility</button>
                        <button class="btn3">Cancel</button>
                        <br></br>
                        <h2 class="h2">Booking Preview</h2>
                        <br></br>

                        <div>
                            <p  >Enter Booking Id : <input type="text"autofocus placeholder=" Enter Booking Id"></input></p>
                           
                            <button><a href="/Home/Booking">Modify Booking</a></button>
                           
                        </div>
                        <br></br>
                        <br />
                       
                    </form>
                </form>
        


        );
    }
}



ReactDOM.render(
    <FacilityOverview />,
    document.getElementById('root')
);




export default FacilityOverview