import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import './FacilityModifier.css'

//import data from "./data.json";
class FacilityModifier extends Component {


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
                            <button > <a href="UserManagement">User Management</a></button>
                            <button><a href ="admin/FacilityModifier">Admin</a></button>
                            <button><a href="Home">Home/Booking</a></button>
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
                    <h2 class="h2">Facility Modifier</h2>
                    <br></br>
                   
                    <form onSubmit={this.handleSubmit}>
                      <table><tr>
                      <th> Facility Name : </th>
                      <td>
                    <label class="lbl2">
                       
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="ABCPune">ABCPune</option>
                            <option value="PQRMumbai">PQRMumbai</option>
                            <option value="OPSDelhi">OPSDelhi</option>
                            <option value="BWKolkata">BWKolkata</option>
                        </select>
                    </label>
<br />               </td>
</tr>
                    <tr>
                        <th>Address</th>
                        <td>Chennai</td>
                
                    </tr>

                    <tr>
                        <th>Location</th>
                        <td>ABC Chennai</td>
                    </tr>
                <tr>
                    <th>Bookings Enabled:</th>
                    <td>
                        <label  class="lbl2">
                            <input
                                name="isAvailable"
                                type="checkbox"
                            />
                        </label>
                        </td>
                        </tr>
                        </table>
                        <br></br>
                        <h2 class="h2">Sport Management</h2>
                        <br></br>
                        <table>
                            <thead>
                                <tr>
                                    <th>SportId</th>
                                    <th>SportName</th>
                                    <th>Equipments</th>
                                    <th>Slots</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Cricket</td>
                                    <td>5</td>
                                    <td>11AM-12PM</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Tennis</td>
                                    <td>10</td>
                                    <td>10AM-11AM</td>
                                </tr>

                            </tbody>
                        </table>
                        <br />
                        <button class="btn2"><a href="/">Add Sport</a></button>
                        <button>Save Edited Sport</button>
                        <button class="btn3">Cancel</button>
                        <br></br>
                        <h2 class="h2">Booking Management</h2>
                        <br></br>
                        <div>
                        <p class="p">Enter Date: <DatePickerComponent></DatePickerComponent></p>
                       <br />
                       <br></br>
                        <label class="lbl3">
                         Select Sport:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="football">football</option>
                                <option value="BasketBall">BasketBall</option>
                                <option value="BaseBall">BaseBall</option>
                                <option value="Tennis">Tennis</option>
                            </select>
                        </label>
                        </div>
                        <br></br>
                        <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Slots</th>
                                    <th>9AM-10AM</th>
                                    <th>10AM-11AM</th>
                                    <th>11AM-12PM</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>Status</th>
                                    <td>Booked</td>
                                    <td>Booked</td>
                                    <td><button onClick="myFunction()"><a href="/Home">Available</a></button></td>
                                </tr>


                            </tbody>
                        </table>


                    </form>
                </form>
            </form>


        );
    }
}



ReactDOM.render(
    <FacilityModifier />,
    document.getElementById('root')
);




export default FacilityModifier