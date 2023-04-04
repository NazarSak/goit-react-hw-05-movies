import React, { useEffect, useState } from 'react';
import { SearchM } from 'components/services/getMovies';
import Notiflix from 'notiflix';
import TitleGallery from 'components/titleGallery/TitleGallery';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [value, setValue] = useState('');
  const [searchText, setSearchText] = useState('');
  const [title, setTitle] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(null);

  const valueQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchText) {
      return;
    }
    SearchM(searchText)
      .then(response => response.json())
      .then(data => {
        if (data.results.length === 0) {
          Notiflix.Notify.failure('Sorry,but nothing was found');
        }

        return setTitle(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchText]);

  useEffect(() => {
    title && setQuery(
      title.filter(el =>
        el.title.toLowerCase().includes(valueQuery.toLowerCase)
      )
    );
  }, [searchParams, title, valueQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    reset();
  };

  const handleSearch = searchTextе => {
    if (searchText.trim() === searchTextе) {
      return;
    }
    setSearchText(searchTextе);
  };

  const handleChange = e => {
    setValue(e.currentTarget.value);
    setSearchParams({ query: e.target.value });
  };

  const reset = () => {
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          value={value}
          name="search"
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>

      {query !== null && <TitleGallery data={title} />}
    </>
  );
};

export default Movies;
