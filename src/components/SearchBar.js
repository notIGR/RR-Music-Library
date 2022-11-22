import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchBar = () => {
<<<<<<< HEAD
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
=======
    const {term, handleSearch} = useContext(SearchContext)

    return (
            <form>
                <input ref={term} type="text" placeholder="Search Here" />
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
>>>>>>> origin/with_context
    )
}

export default SearchBar