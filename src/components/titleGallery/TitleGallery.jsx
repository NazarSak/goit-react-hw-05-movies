import { Link } from "react-router-dom";


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
