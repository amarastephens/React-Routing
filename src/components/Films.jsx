import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="row">
            {films.map(film => (
                <div className="col-6" key={film.id}>
                    <div class="card">
                        <div class="card-body">
                            <img src={film.movie_banner} alt="poster from movie" class="card-img-top" />
                            <h5 class="card-title">{film.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{film.original_title}</h6>
                            <p class="card-text">{film.description}</p>
                            <Link to={`/films/${film.id}`} class="card-link">See More</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Films;