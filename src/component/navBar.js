import React from "react"


class  Navbar extends React.Component{
    render(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={process.env.PUBLIC_URL + "/image/employwise.png"} width="50" height="50"  alt="imagenotfound"/>
      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="td-containars">
          <img src={process.env.PUBLIC_URL + "/image/hrAdmin.png"}   alt="not available"/>
          </div>
     <li>Anam Aggrawal</li>
    </form>
    </div>
    </nav>
    </div>
    )
    }
}
export default Navbar