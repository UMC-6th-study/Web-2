import React from 'react';
import { dummy } from '../movieDummy';
import Movie from '../components/Movie';


export default function PopularPage() {
    

    return (
        <div className='page-default'>
            <div className='movies-container' >
                {
                dummy.results.map((item) => {
                    return (
                    <Movie
                        title = {item.title}
                        poster_path =  {item.poster_path}
                        vote_average = {item.vote_average}
                        overview = {item.overview}
                    />
                    )
                })
                }
            </div>
        </div>
    );
}

