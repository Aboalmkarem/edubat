

function Card(prop) {

    return(
        <div className={prop.class}>
            <div className='card-img'><img src={prop.img}></img></div>
            <div className='card-content'>
                {prop.content}
            </div>
        </div>
    )
}

export default Card