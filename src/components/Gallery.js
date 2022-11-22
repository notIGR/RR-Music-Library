import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)
    const myData = data.result.read()

    const display = myData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        { display }
    )
}

export default Gallery