import { fetchAllProducts } from '../services/product.js'
import Toastify from 'toastify-js';
class cart {
    constructor() {
        this.products = [];
    }
    addProduct(product, quantity = 1) {
        const existingItem = this.products.find(listproduct => product.id == listproduct.id);
        if (existingItem) {
            existingItem.quantity += quantity;
            this.showNotification(`Dodano ${quantity} szt. produktu: ${product.title} do koszyka.`);
        } else {
            this.products.push({ ...product, quantity });
            this.showNotification(`Dodano nowy produkt: ${product.title} do koszyka.`);
        }

        this.saveCart();
    }
    showNotification(message) {
        Toastify({
            text: message,
            duration: 1500,
            gravity: 'bottom',
            position: 'center',
            backgroundColor: 'orange',
            style: {
                width: '350px',
                borderRadius: '10px',
                padding: '15px',
                position: 'fixed',
                bottom: '0',
                left: '40%',
                textAlign: 'center', // Dodaj tę linię
            },
        }).showToast();
        
    }
    
    
    
    removeProduct(product) {
        this.products = this.products.filter(listproduct => product.id !== listproduct.id);
        this.showNotification(`Usunięto produkt: ${product.title} z koszyka.`);
        this.saveCart();
    }

    clearCart() {
        this.products = [];
        this.saveCart();
    }
    
    setQuantity(product, quantity) {
        if (quantity < 1) {
            throw new Error("Quantity not correct");
        }
        const foundproduct = this.products.find(listproduct => product.id == listproduct.id);
        if (foundproduct) {
            foundproduct.quantity = quantity;
        } else {
            throw new Error("Produkt nie isnieje w koszyku");
        }
        this.saveCart();
    }
    calculateTotalPrice() {
        return this.products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    }
    getProducts() {
        return this.products;
    }
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.products));
    }
    getCart() {
        try {
            const storedCart = localStorage.getItem('cart');
            this.products = storedCart ? JSON.parse(storedCart) : [];
            return this.products;
        } catch (error){
            console.error("Blad pobierania koszyka", error);
            throw error;
        }
        
    }
    async verifyCart() {
        const storedProducts = this.getCart();
        const availableProducts = await fetchAllProducts();


        const filteredProducts = storedProducts.filter(storedProduct => {
            return availableProducts.some(availableProduct => availableProduct.id === storedProduct.id);
        });


        this.products = filteredProducts;
        this.saveCart();
    }
}

export default cart;