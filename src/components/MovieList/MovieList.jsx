import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import './MovieList.css'
import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <Container fixed>
                <h1>Movie List</h1>
                <Grid container
                    columnSpacing={8}
                    rowSpacing={6}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    padding={8}
                    >
                    {movies.map(movie => {
                        return (
                            <MovieItem movie={movie} 
                                key={movie.id}
                            />
                        )
                    })}
                </Grid>
            </Container>
        </main>
    );
}

export default MovieList;