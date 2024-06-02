import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Movie(props) {
    const navigate = useNavigate();

    const onclickMovieItem = () => {
        navigate(`/movie/${props.title}`, {
            state:props
        })
    }
    return (
        <div className='movie-container' onClick={onclickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt='영화포스터' />
            <div className='movie-info'>
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
            <div className='movie-detail'>
                <h4>{props.title}</h4>
                <span>{props.overview}</span>
            </div>
        </div>
    );
}