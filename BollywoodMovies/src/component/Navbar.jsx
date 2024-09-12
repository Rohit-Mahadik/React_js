
export const NavBar=()=>{

    
    return(

        <div className="nav-container container-fluid position-sticky fixed-top ">
        
        <div className="row">

          <div className="col-md-4 p-3">

            <div className="logo-img w-25 ">
              <img src="./public/netflix.png" className="w-100"></img>
            </div>
            
          </div>


          <div className=" other-content col-md-8 p-3 ">

            <p className="me-2 mt-1">UNLIMITED TV SHOWS & MOVIES</p>

            <a href="https://www.netflix.com/in/" target='_blank' >
              <button className="button_app me-3">Join Now</button>
            </a>

            <a href="https://www.netflix.com/login" target='_blank'>
              <button className="btn border border-light text-light w-35">Sign In</button>
            </a>
            
          </div>



        </div>

      </div>
    )
    
    
    
}