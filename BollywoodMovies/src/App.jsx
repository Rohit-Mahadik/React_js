import MoviesCard from "./component/MoviesCard"
import {NavBar} from "./component/Navbar"
import {Description} from "./component/Description"
import {Footer} from "./component/Footer"

export const App = ()=>{


  return(
   
   
   <div className="container-fluid">

      <NavBar></NavBar>

      <div className="container mt-5">

          <Description></Description>
          
          <div className=" rowsss row ">

          <MoviesCard></MoviesCard>
            
          </div>

        </div>

        <Footer></Footer>


   </div>



  )

}