import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Grid, Button, Card, Typography } from '@mui/material';


function MovieDetails() {
    // Don't think details is a necessary reducer anymore. We can just use the genres and movies reducers to get what we
    const details = useSelector(store => store.details);
    const movies = useSelector(store => store.movies);
    const { id } = useParams();
    const detail = details.find((movie) => movie.id === Number(id));
    console.log(`Show details:`, details);


    const dispatch = useDispatch();
    const history = useHistory();


    // Do not need to make a separate function to retrieve the details, I believe, either

    // const fetchDetails = () => {
    //     const action = { type: 'FETCH_DETAILS', payload: details.id};
    //     dispatch(action);
    // }

    // const fetchDetails = () => {
    //     dispatch({ type: 'FETCH_DETAILS' });
    // }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, []);


    // Code that we were trying to use during office hours and Marc was helping me with

    // if (movies.length != 0) {
    //     for (let i = 0; movies.length > 0; i++) {
    //         if (movies[i].id === id) {
    //             movie = movies[i]
    //             console.log(movie);
    //         }
    //     }
    // }

    const previousPage = () => {
        history.goBack('/');
    }

    return (
        <div className="movieDetails">
            <Container fixed>
                <h2>Movie Details {id}</h2>
                <Button variant="contained" size="large" onClick={previousPage}>Back to List</Button>
                <Grid>
                    <Card>
                        {
                            details.length === 0 ? (
                                <div>
                                    <h1>Loading...</h1>
                                </div>
                            ) : (
                                <div key={detail.id} >
                                    <h2>{detail.title}</h2>
                                    <h3>{detail.genres}</h3>
                                    <img src={detail.poster} alt={detail.title} />
                                    <br />
                                    <br />
                                    <Typography>{detail.description}</Typography>
                                </div>
                            )
                        }
                    </Card>
                </Grid>
            </Container>
        </div>
    )
}

export default MovieDetails;