import React from 'react';

const CastFunc = ({ cast }) => {
  return (
    <ul>
      {cast.map(person => (
        <li key={person.id}>
          <img
            src={
              person.profile_path
                ? `https://www.themoviedb.org/t/p/original/${person.profile_path}`
                : 'https://i.ibb.co/VVFCdTD/image.jpg'
            }
            alt={person.name}
            width="400px"
            height="400px"
          />
          <h3>{person.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CastFunc;
