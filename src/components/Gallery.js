import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        { display }
    )
}

export default Gallery