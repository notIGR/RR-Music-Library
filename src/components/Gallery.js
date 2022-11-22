import { useContext } from 'react'
<<<<<<< HEAD
import { DataContext } from '../context/dataContext'
import GalleryItem from './GalleryItem'

<<<<<<< HEAD
=======
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

<<<<<<< HEAD
>>>>>>> origin/with_context
const Gallery = () => {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
<<<<<<< HEAD
=======

const Gallery = (props) => {
    const myData = props.data.result.read()

    const display = myData.map((item, index) => {
>>>>>>> origin/with_suspense
=======
>>>>>>> origin/with_context
=======
    const display = props.data.map((item, index) => {
>>>>>>> origin/with_router
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery