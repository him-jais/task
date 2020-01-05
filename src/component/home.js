import React from 'react'
import Calenders from './calender'
import './style.css'

class Home extends React.Component{

    render(){
        return(
            <div>
             <h2> HR Home</h2>
             <h3>Hi! Anam</h3>
             <p>welcome to HR Dashboard</p>
      <div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
          <div className="container">
            <div className="img-background"  style={{backgroundColor:'blue'}}>
              <img src={process.env.PUBLIC_URL + "/image/employees.svg"} width="30" height="30"   alt="not available" />
            </div>
            <div className="number-stat">
              <div className="number">9,988</div>
              <div className="next">Number of employees</div>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <div className="container">
            <div className="img-background" style={{backgroundColor:'pink'}}>
              <img src={process.env.PUBLIC_URL + "/image/calendar.svg"} width="30" height="30" alt="not available"/>
            </div>
            <div className="number-stat">
              <div className="number">22</div>
              <div className="next">Employees on Leave</div>
            </div>
          </div>
      </div>
      </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <div className="container">
            <div className="img-background"  style={{backgroundColor:'pink' }}>
              <img src={process.env.PUBLIC_URL + "/image/smartphone.svg"} width="30" height="30" alt="not available"/>
              
            </div>
            <div className="number-stat">
              <div className="number">4,400</div>
              <div className="next" >Employees have the App</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
<h3>Task List</h3>
<div className="row">
   
<div className="col-sm-8">
    <div className="card">
      <div className="card-body">
     
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Applied on</th>
      <th scope="col">Employee</th>
      <th scope="col">Subject</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01 Jan</th>
      <td>
        <div className="td-containar">
      <img src={process.env.PUBLIC_URL + "/image/radhika1.jpg"}  alt="imagenotfound"/>
        <div>Radhika Vashisht |RE1234</div></div></td>
      <td>Performance: Jan 01-Dec 31,2019</td>
      <td>Set Goals</td>
    </tr>
    <tr>
      <th scope="row">01 Jan</th>
      <td>
        <div className="td-containar">
          <img src={process.env.PUBLIC_URL + "/image/anand.jpg"}   alt="imagenotfound"/>
       <div>Anand Kumar |RE1234</div> </div></td>
      <td>Performance: Jan 01-Dec 31,2019</td>
      <td>Set Goals</td>
    </tr>
    <tr>
      <th scope="row">01 Jan</th>
      <td>
        <div className="td-containar">
          <img src={process.env.PUBLIC_URL + "/image/suresh.jpg"} alt="imagenotfound"/>
        <div>Suresh Raina |RE1234</div></div></td>
      <td>Self Assessment due</td>
      <td>Message</td>
    </tr>
    <tr>
      <th scope="row">01 Jan</th>
      <td>
        <div  className="td-containar">
        <img src={process.env.PUBLIC_URL + "/image/sandhir.jpg"}  alt="imagenotfound"/>
       <div> Sandhir Gupta |RE1234</div></div></td>
      <td>Select Multi Raters</td>
      <td>Select</td>
    </tr>
    <tr>
      <th scope="row">01 Jan</th>
      <td>
        <div className="td-containar">
        <img src={process.env.PUBLIC_URL + "/image/radhika2.jpg"} alt="imagenotfound"/>
       <div> Radhika Vashisht |RE1234</div></div></td>
      <td>Performance: Jan 01-Dec 31,2019</td>
      <td>Set Goals</td>
    </tr>
  </tbody>
</table>
       
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Calendar</h5>
        <Calenders/>
      
      </div>
    </div>
  </div>
</div>
</div>
        )
    }

}
export default Home