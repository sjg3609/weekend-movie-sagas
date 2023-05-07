import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


function MovieDetails() {

    const details = useSelector(store => store.details);
    const dispatch = useDispatch();
    const history = useHistory();



    const fetchDetails = () => {
        const action = { type: 'FETCH_DETAILS', payload: details};
        dispatch(action);
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    const previousPage = () => {
        history.goBack('/');
    }

    return (
        <>
            <h3>Movie Details</h3>
            <section className="details">
                {details.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <h4>{movie.description}</h4>
                        </div>
                    );
                })}
            </section>
            <button onClick={previousPage}>Back to List</button>
        </>
    )
}

export default MovieDetails;