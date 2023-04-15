import { Searcher } from '../components/searcher/Searcher';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/card-list/CardList';
import { CardList } from '../components/card-list/CardList';
import { getAPIData } from '../api';
import { partialCardInfo } from 'types';

function HomePage() {
  const [searchRequest, setSearchRequest] = useState<partialCardInfo[]>([]);
  const [notFoundError, setNotFoundError] = useState<boolean>(false);
  const [activeIndicator, setActiveIndicator] = useState(false);

  const startSearch = async (request: string) => {
    setActiveIndicator(true);
    const characters = await getAPIData(request);
    setActiveIndicator(false);
    try {
      const character = characters.filter((card: { name: string }) =>
        card.name.toLowerCase().includes(request.toLowerCase())
      );

      if (request === '') {
        setSearchRequest(characters);
        setNotFoundError(false);
      } else if (character.length === 0) {
        setNotFoundError(true);
      } else if (character) {
        setSearchRequest(character);
        setNotFoundError(false);
      } else {
        setSearchRequest(character);
        setNotFoundError(false);
      }
    } catch {
      console.error();
      setNotFoundError(true);
    }
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/"></Link>
      <div>{<Searcher startSearch={startSearch} />}</div>
      <section className="cards-list-container">
        {
          <CardList
            cards={searchRequest}
            isActiveIndicator={activeIndicator}
            isNotFoundError={notFoundError}
          />
        }
      </section>
    </>
  );
}

export { HomePage };
