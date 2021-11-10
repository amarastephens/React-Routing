import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePerson = () => {
    const [person, setPerson] = useState({});
    const { personid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [personid]);

    return (
        <div className="col-12 mt-3" key={person.id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{person.gender}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Hair Color: {person.hair_color}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Eye Color: {person.eye_color}</h6>
                    <p className="card-text">{person.age}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePerson;