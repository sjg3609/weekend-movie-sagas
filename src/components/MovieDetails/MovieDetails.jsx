import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function MovieDetails() {

    const details = useSelector(store => store.details);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_DETAILS' });
    // }, []);

    return (
        <>
            <h3>Movie Details</h3>
            {
                details.map(movie => {
                    <div className="movieDetails" key={movie.id}>
                         <h4>{details.description}</h4>
                    </div>
                    
                })
            }
        </>
    )
}

export default MovieDetails;