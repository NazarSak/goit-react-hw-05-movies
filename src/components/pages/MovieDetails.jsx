import { useParams } from 'react-router-dom';
import { SearchById } from 'components/services/getMovies';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [info, setInfo] = useState('');
  const { moveid } = useParams();

  useEffect(() => {
    SearchById(moveid)
      .then(response => response.json())
      .then(data => setInfo(data));
  }, [moveid]);

  const { popularity, original_title, overview, status } = info;

  return (
    <div>
      <img src={(info.poster_path) ? (`https://www.themoviedb.org/t/p/original/${info.poster_path}`) : ("https://i.ibb.co/FB037FW/image.jpg")} 
      alt={info.tagline} 
      width="1000"
      height="1000"/>
      <h2>{original_title}</h2>
      <p>Popularity:{popularity}</p>
      <h3>Overview</h3>
      {overview === '' ? <p>sorry,but overview empty </p> : <p>{overview}</p>}
      <p>
        <span>Status</span>:{status}
      </p>

      <h4>Adittional information</h4>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
    
  );
};

export default MovieDetails;
