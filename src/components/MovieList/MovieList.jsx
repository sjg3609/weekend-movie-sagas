import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Grid, Card } from '@mui/material';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();
    // const { id } = useParams();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const movieDetails = (id) => {
        console.log('In movieDetails');
        history.push(`/details/${id}`);
        //    dispatch({ type: 'SET_DETAILS' });
    }

    return (
        <main>
            <Container fixed>
                <h1>MovieList</h1>
                <Grid container 
                    columnSpacing={4}
                    rowSpacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    padding={8}>
                    <section className="movies">
                        {
                            movies.map(movie => {
                                return (
                                    <div key={movie.id} >
                                        <h3>{movie.title}</h3>
                                        <img src={movie.poster} alt={movie.title} onClick={() => movieDetails(movie.id)} />
                                    </div>
                                );
                            })}
                    </section>
                </Grid>

            </Container>

        </main>

    );
}

export default MovieList;