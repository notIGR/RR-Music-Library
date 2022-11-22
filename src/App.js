import './App.css';
import { useState, Suspense, useEffect, useRef } from 'react';
import Spinner from './components/Spinner';
import { createResource as fetchData } from './helper';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { DataContext } from './context/dataContext';
import { SearchContext } from './context/SearchContext';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView'


function App() {
  let [data, setData] = useState([]);
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!');
  let searchInput = useRef('');

  const API_URL = `https://itunes.apple.com/search?term=`

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  useEffect(() => {
    if (searchTerm) {
      document.title = `${searchTerm} Music`

      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
    }
  }, [searchTerm])


  const handleSearch = (e, term) => {
    e.preventDefault()
    fetch(`https://itunes.apple.com/search?term=${term}`)
      .then(response => response.json())
      .then(resData => {
        if (resData.results.length > 0) {
          return setData(resData.results)
        } else {
          return setMessage('Not Found.')
        }
      })
      .catch(err => setMessage('An Error has Occurred!'))
  }

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }

    function App() {
      let [data, setData] = useState([])
      let [message, setMessage] = useState('Search for Music!')
      let searchInput = useRef('')

      const handleSearch = (e, term) => {
        e.preventDefault()
        fetch(`https://itunes.apple.com/search?term=${term}`)
          .then(response => response.json())
          .then(resData => {
            if (resData.results.length > 0) {
              return setData(resData.results)
            } else {
              return setMessage('Not Found.')
            }
          })
          .catch(err => setMessage('An Error has Occurred!'))

        const fetchData = async () => {
          const response = await fetch(API_URL + searchTerm)
          const resData = await response.json()
          if (resData.results.length > 0) {
            setData(resData.results)
          } else {
            setMessage('Not Found')
          }
        }
        fetchData()
      }
    }, [searchTerm, API_URL])

    const handleSearch = (e, term) => {
      e.preventDefault()
      term = toTitleCase(term)
      setSearchTerm(term)
      return (<Redirect to="/" />)

    }

    return (
      <div className="App">

        <SearchContext.Provider value={{ term: searchInput, handleSearch: handleSearch }}>
          <SearchBar />
        </SearchContext.Provider>
        {message}
        {renderGallery()}

        <SearchContext.Provider value={{ term: searchInput, handleSearch: handleSearch }}>
          <SearchBar />
        </SearchContext.Provider>
        {message}
        <DataContext.Provider value={data}>
          <Gallery />
        </DataContext.Provider>

        {message}
        <Router>
          <Route exact path="/">
            <SearchBar handleSearch={handleSearch} />
            <Gallery data={data} />
          </Route>
          <Route path="/album/:id">
            <AlbumView term={searchTerm} />
          </Route>
          <Route path="/artist/:id">
            <ArtistView term={searchTerm} />
          </Route>
        </Router>
      </div >
    );
  }

  export default App