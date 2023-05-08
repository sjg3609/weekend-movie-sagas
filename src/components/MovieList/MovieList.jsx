import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import './MovieList.css'
import MovieItem from './MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // const { id } = useParams();


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



 

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
                    {movies.map(movie => {
                        return (
                            <MovieItem movie={movie} />
                        )

                    })}
                </Grid>

            </Container>

        </main>

    );
}

export default MovieList;