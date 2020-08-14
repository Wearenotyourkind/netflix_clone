import React from 'react';
import './App.css';
import Row from './Row';
import Requests from './Requests';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>

        <Row
            title="NETFLIX ORIGINAL"
            fetchUrl={Requests.fetchNetflixOrigianls}
            isLargeRow =  {true}
        />

        <Row title="Trending Now" fetchUrl={Requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={Requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={Requests.fetchTopRated}/>
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries}/>



    </div>
  );
}

export default App;
