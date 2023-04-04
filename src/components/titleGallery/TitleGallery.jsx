import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const TitleGallery = ({ data }) => {
  return (
    <ul>
      {data
      .map((query) => (
        <Link key={query.id} to={`${query.id}`}>
          <p>{query.original_title}</p>
        </Link>
      ))}
    </ul>
  );
};


export default TitleGallery;

TitleGallery.propTypes = {
  query:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    original_title:  PropTypes.string,
  }))
}