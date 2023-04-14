import { Searcher } from '../components/searcher/Searcher';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/card-list/CardList';
import { CardList } from './../components/card-list/CardList';
import { getAPIData } from '../api';
import { partialCardInfo } from 'types';

function Home() {
  const [searchRequest, setSearchRequest] = useState<partialCardInfo[]>([]);

  const startSearch = async (request: string) => {
    const characters = await getAPIData(request);
    try {
      const character = characters.filter((card: { name: string }) =>
        card.name.toLowerCase().includes(request.toLowerCase())
      );
      if (request === '') {
        setSearchRequest(characters);
      } else if (character.length === 0) {
        console.log('CARD NOT FOUND! PLEASE TRY AGAIN!');
      } else if (character) {
        setSearchRequest(character);
      } else {
        setSearchRequest(character);
      }
    } catch {
      console.error();
    }
  };

  return (
    <>
      <h1>Home</h1>
      <Link to="/"></Link>
      <div>{<Searcher startSearch={startSearch} />}</div>
      <section className="cards-list-container">
        {<CardList cards={searchRequest} isActiveIndicator={false} />}
      </section>
    </>
  );
}

export { Home };
