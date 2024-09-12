import MoviesData from '../Api/MoviesList.json'
import {CardData} from '../component/MoviesDatas'
const MoviesCard=()=>{
    return(
       <>
       
       { MoviesData.map((ele) => (
                
           <>
   
                <CardData key={ele.id} ele={ele}></CardData>
              
           
           </>
        
        
         ))


        }
       

       </>

        
    )
}

export default MoviesCard