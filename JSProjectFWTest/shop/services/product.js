import { deletePhotoById } from './photo.js'
export async function fetchAllProducts() {
    try {
        const response = await fetch('http://localhost:3000/product');
        if (!response.ok) {
            throw new Error('Category all fetching failed');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}
export async function fetchProductsByCategoryId(categoryid) {
    try {
        const products = await fetchAllProducts();
        const productcategory = [];
        products.forEach(product => {
            if (product.category_id == categoryid) {
                productcategory.push(product);
            }
        });
        return productcategory;
    } catch (error) {
        console.error("Product fetching by category id failed", error);
        throw error;
    }
}
export async function fetchProductById(categoryid) {
    try {
        const products = await fetchAllProducts();
        for (const product of products) {
            if (product.id == categoryid) {
                return product;
            }
        }
        return null;
    } catch (error) {
        console.error("Product fetching by category id failed", error);
        throw error;
    }
}

export async function addProduct(newProduct) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    };

    try {
        const response = await fetch('http://localhost:3000/product', requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('B³¹d podczas dodawania produktu:', error);
    }
}

export async function updateProduct(productId, updatedProduct) {
    const requestOptions = {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    };

    try {
        const response = await fetch(`http://localhost:3000/product/${productId}`, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('B³¹d podczas aktualizacji produktu:', error);
    }
}

export async function deleteProductById(productId) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(`http://localhost:3000/product/${productId}`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.photo_id !== null) {
            await deletePhotoById(data.photo_id);
        }
        return data;
    } catch (error) {
        console.error('B³¹d podczas usuwania produktu:', error);
        throw error;
    }
}

