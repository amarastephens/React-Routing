import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]); //film array

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films") //async way
            .then(res => res.json()) //parse json data into javascript
            .then(data => setFilms(data)) //change the state 
            .catch(err => console.log(err));
    }, []); //renders only one time when the page loads

    return (
        <div className="row">
            {films.map(film => ( //map calls a function for every element in an array & returns a new array
                <div className="col-6 d-flex mb-2" key={film.id}>
                    <div class="card">
                        <div class="card-body">
                            <img src={film.movie_banner} alt="poster from movie" class="card-img-top" />
                            <h5 className="card-title">{film.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{film.original_title}</h6>
                            <p className="card-text">{film.description}</p>
                            <Link to={`/films/${film.id}`} className="card-link">See More</Link> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Films;