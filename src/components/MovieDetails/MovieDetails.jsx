import { useSelector } from 'react-redux';


function MovieDetails() {

    const movies = useSelector(store => store.movies);

    return (
        <>
            <h3>Movie Details</h3>
            {
                movies.map(movie => {
                    <div className="movieDetails" key={movie.id}>
                         <h4>{movies.description}</h4>
                    </div>
                    
                })
            }
        </>
    )
}

export default MovieDetails;