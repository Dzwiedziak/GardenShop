export async function addOrder(newOrder) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
    };

    try {
        const response = await fetch('http://localhost:3000/order', requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('B³¹d podczas dodawania produktu:', error);
    }
}
export async function fetchAllOrders() {
    try {
        const response = await fetch('http://localhost:3000/order');
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