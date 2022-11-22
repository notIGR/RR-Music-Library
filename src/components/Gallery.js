import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import GalleryItem from './GalleryItem'

<<<<<<< HEAD
const Gallery = () => {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
=======

const Gallery = (props) => {
    const myData = props.data.result.read()

    const display = myData.map((item, index) => {
>>>>>>> origin/with_suspense
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