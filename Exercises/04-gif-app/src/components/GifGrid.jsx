
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifCard } from "./GifCard"
import { PropTypes } from "prop-types";




export const GifGrid = ({ category }) => {  

    const {images, isLoading} = useFetchGifs( category );
  
    return (
        <>
            <h3>{ category }</h3>
            {isLoading && <h2>Loading...</h2>}

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifCard 
                            key={image.id}
                            {...image}
                            // Spread operator can be used to spread all the props of the component
                            />
                    ))
                }
            </div>
            
        </>
  )
}


GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}