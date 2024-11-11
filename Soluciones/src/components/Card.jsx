const Card = ({title='Card Title2'}) => {
    return (
        <div className="flex flex-row">
            <div className="">
                <img src="https://picsum.photos/100/100" alt="random" />
            </div>
            <div className="flex flex-col ml-3">
                <h3 className="card__title font-bold text-xl">{title}</h3>
                <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <button className="self-center text-white">Read More</button>
            </div>
        </div>
        
    )
  }
  
  export default Card