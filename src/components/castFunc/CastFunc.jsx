import React from 'react';
import PropTypes from "prop-types";


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




CastFunc.propTypes = {
  cast: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          profile_path:PropTypes.string,
          name:PropTypes.string,
        })
      ),
}

export default CastFunc;
