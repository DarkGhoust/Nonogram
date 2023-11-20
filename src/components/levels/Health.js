

function Health({health}) {

    
   
    const healthHTML = Array( 3 ).fill(0).map( (item, id) => 
        <img src="nonogram/icons/heart.svg" key={id} className={ id < health ? "heart" : "heart small" } alt="heart"/>    
    )

    return (
        <>
            <div className="health_bar flex gap-0">
                {healthHTML}
            </div>
        </>
    )
}

export default Health
