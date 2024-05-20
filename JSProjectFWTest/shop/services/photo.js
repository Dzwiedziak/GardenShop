import productservice, { fetchProductById, fetchProductsByCategoryId } from './product.js'
export async function fetchAllPhotos() {
    try {
        const response = await fetch('http://localhost:3000/photo');
        if (!response.ok) {
            throw new Error("Fetching all photos failed");
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Fetching photos all failed", error);
        throw error;
    }
}
export async function fetchMainPhotoForProduct(productid) {
    const photos = await fetchAllPhotos();
    const product = fetchProductById(productid);
    const photoid = product.photo_id;
    photos.forEach(photo => {
        if (photo.id == photoid) {
            return photo;
        }
    });
    return null;
}
export async function fetchPhotoById(id) {
    const photos = await fetchAllPhotos();
    const foundPhoto = photos.find(photo => photo.id === id);
    return foundPhoto || null;
}
export async function addPhoto(newPhoto) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPhoto),
    };

    try {
        const response = await fetch('http://localhost:3000/photo', requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('B³¹d podczas dodawania produktu:', error);
    }
}
export async function deletePhotoById(photoId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(`http://localhost:3000/photo/${photoId}`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('B³¹d podczas usuwania produktu:', error);
        throw error;
    }
}