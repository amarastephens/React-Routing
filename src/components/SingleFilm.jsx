import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleFilm = () => {
    const [film, setFilm] = useState();
    const { filmid } = useParams(); //accessing what we named this parameter in App.jsx

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(response => response.json())
            .then(data => setFilm(data))
    }, [filmid]); //putting this in case the effect needs to load after this 

    return (
        <div className="row">
            <div className="col-12" key={film.id}>
                <div class="card">
                    <div class="card-body">
                        <h5 className="card-title">{film.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{film.original_title}</h6>
                        <p className="card-text">{film.description}</p>
                        <p className="card-text">Director: {film.director}</p>
                        <p className="card-text">Producer: {film.producer}</p>
                        <p className="card-text">Released: {film.release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleFilm;