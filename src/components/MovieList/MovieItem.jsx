import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';


function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();


    const movieDetails = (id) => {
        console.log('In movieDetails');
        history.push(`/details/${id}`);
        //    dispatch({ type: 'SET_DETAILS' });

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === '#423E3D',
            ...theme.typography.body2,
            padding: theme.spacing(3),
            margin: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));
    }

    return (
        <div className="movieItem">
            <Grid item md={8}>
                <div key={movie.id} >
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title} onClick={() => movieDetails(movie.id)} />
                </div>
            </Grid>

        </div>
    )
}

export default MovieItem;