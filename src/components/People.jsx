import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="row">
            {people.map(person => (
                <div className="col-6 mt-3" key={person.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{person.gender}</h6>
                            <p className="card-text">{person.age}</p>
                            <Link to={`/people/${person.id}`} className="card-link">See More</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default People