import { createContext, useEffect, useState } from "react";
import { fetchGalleryProducts } from "../../services/galleryServices/galleryServices";

export const GalleryContext: any = createContext({
    products: []
})

export const GalleryProvider = ({children}: any) => {
    const [galleryMap, setGalleryMap] = useState([])

    useEffect(() => {
        const getGalleryMap = async () => {
            const gallery = await fetchGalleryProducts()
            console.log(gallery)
            setGalleryMap(gallery)
        }
        getGalleryMap()
    },[])

    const value = {galleryMap}
    return (
        <GalleryContext.Provider value = {value}>{children}</GalleryContext.Provider>
    )
}