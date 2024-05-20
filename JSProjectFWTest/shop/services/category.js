export async function fetchAllCategories() {
    try {
        const response = await fetch('http://localhost:3000/category');
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
export async function fetchCategoryById(id) {
    try {
        const response = await fetch(`http://localhost:3000/category/${id}`);
        if (!response.ok) {
            throw new Error(`Category id ${id} fetching failed`);
        }
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
}
export async function fetchChildCategoriesById(id) {
    try{
        const categories = await fetchAllCategories();
        const childcategories = [];
        categories.forEach(category => {
            if (category.parent_category_id == id)
                childcategories.push(category);
        });
        return childcategories;
    }catch (error) {
        throw error;
    }
}
export async function fetchAllChildCategoriesById(id) {
    try {
        const categories = await fetchAllCategories();
        const childCategories = [];

        function findChildCategories(parentId) {
            const children = categories.filter(category => category.parent_category_id == parentId);
            children.forEach(child => {
                childCategories.push(child);
                findChildCategories(child.id); // Rekurencyjne pobieranie kategorii podrzêdnych
            });
        }

        findChildCategories(id);
        return childCategories;

    } catch (error) {
        throw error;
    }
}