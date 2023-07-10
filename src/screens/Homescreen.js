import React from 'react'
import Navbar from '../NavBar'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../request'

function Homescreen() {
  return (
    <div className='homeScreen'>
      <Navbar />

      <Banner />
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow  />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Popular Movies' fetchUrl={requests.fetchPopularMovies}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      
    </div>
  )
}

export default Homescreen
