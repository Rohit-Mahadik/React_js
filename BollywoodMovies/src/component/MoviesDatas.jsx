

export const CardData=(propx)=>{
    const{id,img,name,rating,Audio,Starring,Subtitles,Web_url}=propx.ele;

    const RatingCheck=`${rating>8?"Superhit":"Average"}`
    return(

        <div className="netflix-cards col-md-3 mb-2 mt-4 " key={id} >

        <div className="movie-img text-center mt-2">
            <img src={img} className=" w-100 rounded " alt="image" />
        </div>

        <div className="card_deatils p-2 d-flex flex-column flex-direction">
            <h3 className='mt-2'>{name}</h3>
            <h6 >Rating: <span className={RatingCheck}>{rating}</span></h6>
            <p className="mt-2">Audio: {Audio}</p>
            <p>Starring: {Starring}</p>
            <p>Subtitles: {Subtitles}</p>
        </div>

        <div className="btn w-100 d-flex align-items-end">
           <a href={Web_url} target="_blank">
            <button className="btn button_app my-4">Watch Now</button>
           </a>
        </div>

    </div>


    )
}