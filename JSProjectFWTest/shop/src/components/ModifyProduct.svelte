<script context="module">
    export const elements = new Set();
  </script>
  
  <script>
      import { addProduct, fetchProductById, updateProduct, } from '../../services/product.js'
      import { addPhoto, fetchPhotoById } from '../../services/photo.js';
      import { onMount } from 'svelte';
      import { fetchAllCategories } from '../../services/category';
      let categories = [];
      let newProduct = {
          title: '',
          description: '',
          price: '',
          photo: {
              base64: '',
              extension: ''
          },
          category_id: '',
          properties: [
              { type: '', value: '' }
          ]
      };
      export let productid;
  
      async function setProduct(){
          let gettedProduct = await fetchProductById(productid);
          let gettedPhoto = await fetchPhotoById(gettedProduct.photo_id);
          newProduct = {
              title: gettedProduct.title,
              description: gettedProduct.description,
              price: gettedProduct.price,
              photo: {
                  base64: gettedPhoto.base64,
                  extension: gettedPhoto.extension
              },
              category_id: gettedProduct.category_id,
              properties: gettedProduct.properties
          };

      }
  
      onMount(async () => {
          await setProduct();
          categories = await fetchAllCategories();
          console.log("onMount")
      });
  
      const addProperty = () => {
          newProduct.properties.push({ type: '', value: '' });
          console.log("addingProperty");
          newProduct = { ...newProduct }; // Aktualizacja obiektu, aby od�wie�y� widok
      };
      export let viewstate;
  
      async function onaddProduct() {
          titleError = '';
          photoError = '';
          descriptionError = '';
          propertiesError = '';
          priceError = '';

          let dbPhoto = {
              name: "default",
              extension: newProduct.photo.extension,
              base64: newProduct.photo.base64,
              "next_photo_id": null
          }
  
          const addedPhoto = await addPhoto(dbPhoto);
          
          let dbProduct = {
              title : newProduct.title,
              description: newProduct.description,
              price: newProduct.price,
              photo_id: addedPhoto.id,
              category_id: newProduct.category_id,
              properties: newProduct.properties
          }



              if (!newProduct.title.trim()) {
                 titleError = 'Tytuł jest wymagany';
            }

            // Walidacja zdjęcia
            if (!newProduct.photo.base64) {
                photoError = 'Zdjęcie jest wymagane';
            }

            // Walidacja opisu
            if (!newProduct.description.trim()) {
                descriptionError = 'Opis jest wymagany';
            }

            // Walidacja ceny
            if (!newProduct.price.trim()) {
                priceError = 'Cena jest wymagana';
            } else if (isNaN(newProduct.price)) {
                priceError = 'Cena musi być liczbą';
            } else if (newProduct.price <= 0) {
                priceError = 'Cena musi być większa niż 0';
            }

            newProduct.properties.forEach(property => {
                if(!property.type.trim() || !property.value.trim()){
                    propertiesError = 'Fields in properties are required'
                }
            });

            // Check if there are any validation errors
            if (titleError || photoError || descriptionError || priceError || propertiesError) {
                // Handle validation errors, display messages, etc.
                console.log('Validation failed. Please check the form for errors.');
                return;
            }




          const addedProduct = await updateProduct(productid ,dbProduct);
          viewstate=0;
      };
  
      const handleFileChange = async (event) => {
          const fileInput = event.target;
          const file = fileInput.files[0];
  
          if (file) {
              newProduct.photo.base64 = await readFileAsBase64(file);
              newProduct.photo.extension = getFileExtension(file.name);
          } else {
              newProduct.photo.base64 = '';
              newProduct.photo.extension = '';
          }
          newProduct = { ...newProduct }; // Aktualizacja obiektu, aby od�wie�y� widok
      };
  
      const readFileAsBase64 = (file) => {
          return new Promise((resolve, reject) => {
              const reader = new FileReader();
  
              reader.onload = () => {
                  resolve(reader.result.split(',')[1]);
              };
  
              reader.onerror = (error) => {
                  reject(error);
              };
  
              reader.readAsDataURL(file);
          });
      };
  
      
  
      const getFileExtension = (filename) => {
          return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
      };

      let titleError = '';
      let photoError = '';
      let descriptionError = '';
      let propertiesError = '';
      let priceError = '';
  </script>
  
  <div class="container">
      <div class="form-group">
          <label>Title</label>
          {#if titleError}<p class="error">{titleError}</p>{/if}
          <input bind:value={newProduct.title} type="text" name="title" required>
      </div>
      <div class="form-group">
          <label>Photo</label>
          {#if photoError}<p class="error">{photoError}</p>{/if}
          <img class="product-image" src="data:image/{newProduct.photo.extension};base64,{newProduct.photo.base64}" alt="product"/>
          <input bind:value={newProduct.photo_id} type="file" name="photo" on:change={handleFileChange}>
          {#if newProduct.photo.base64}
              <p>Wybrano plik: {newProduct.photo.extension}</p>
          {/if}
      </div>
      <div class="form-group">
          <label>Description</label>
          {#if descriptionError}<p class="error">{descriptionError}</p>{/if}
          <textarea bind:value={newProduct.description} rows="4" cols="50" name="description" placeholder="Opis"></textarea>
      </div>
      <div class="form-group">
          <label>Properties</label>
          {#if propertiesError}<p class="error">{propertiesError}</p>{/if}
          <ul>
              {#each newProduct.properties as property, index}
                  <li>
                      <input bind:value={newProduct.properties[index].type} type="text" required>
                      <input bind:value={newProduct.properties[index].value} type="text" required>
                      {#if newProduct.properties.length > 1}
                          <button on:click={() => newProduct.properties.splice(index, 1)}>Usuń</button>
                      {/if}
                  </li>
              {/each}
          </ul>
          <button on:click={addProperty}>Dodaj pole</button>
      </div>
      <div class="form-group">
          <label>Price</label>
          {#if priceError}<p class="error">{priceError}</p>{/if}
          <input bind:value={newProduct.price} type="text" name="price" required>
      </div>
      <div class="form-group">
          <label>Category</label>
          <select bind:value={newProduct.category_id}>
              {#each categories as category (category.id)}
                  <option value={category.id}>{category.name}</option>
              {/each}
          </select>
      </div>
      <button on:click={onaddProduct} class="to-cart">
          Zapisz
      </button>
  </div>
  
  <style>
      .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f8f8;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
        .error{
            color: red;
            font-weight: bold;
        }
      .form-group {
          margin-bottom: 15px;
      }
  
      label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
      }
  
      input,
      textarea,
      select {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
      }
  
      textarea {
          resize: vertical;
      }
  
      button {
          background-color: #4caf50;
          color: #fff;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
      }
  
      button:hover {
          background-color: #45a049;
      }
  
      .product-image {
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
      }
  </style>
  