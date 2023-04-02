import { Searcher } from '../components/searcher/Searcher';
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/card-list/CardList';
import { CardList } from './../components/card-list/CardList';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>Home</h1>
        <Link to="/"></Link>
        <form className="form-input">
          {
            <Searcher
              id={''}
              bookName={''}
              author={''}
              price={''}
              publishingHouse={''}
              quantityInStock={''}
              image={''}
              publicationYear={''}
              isPopular={''}
            />
          }
        </form>
        <section className="cards-list-container">{<CardList />}</section>
      </>
    );
  }
}

export default Home;
