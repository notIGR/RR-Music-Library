import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/dataContext'
import { SearchContext } from './context/SearchContext'

function App() {
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')
  let searchInput = useRef('')
=======
import { useState, Suspense, useEffect } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import { createResource as fetchData } from './helper'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
  }
  }, [searchTerm])
>>>>>>> origin/with_suspense

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
    if(data){
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
=======
import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

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
>>>>>>> origin/with_context
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <SearchContext.Provider value={{ term: searchInput, handleSearch: handleSearch }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
<<<<<<< HEAD
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
=======
      {renderGallery()}
>>>>>>> origin/with_suspense
=======
      <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
>>>>>>> origin/with_context
    </div>
  );
}

export default App;