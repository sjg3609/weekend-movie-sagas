import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === '#423E3D',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <main>
            <Container fixed>
                <h1>MovieList</h1>
                <Grid >
                    <section className="movies">
                        <Grid
                            container
                            columnSpacing={4}
                            rowSpacing={2}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            padding={8}>
                            <Item>
                                {
                                    movies.map(movie => {
                                        return (
                                            <div key={movie.id} >
                                                <h3>{movie.title}</h3>
                                                <img src={movie.poster} alt={movie.title} onClick={() => movieDetails(movie.id)} />
                                            </div>
                                        );
                                    })}
                            </Item>
                        </Grid>


                    </section>
                </Grid>

            </Container>

        </main>

    );
}

export default MovieList;