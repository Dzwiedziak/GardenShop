export async function fetchAllAccounts() {
    try {
        const response = await fetch('http://localhost:3000/account');
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
export async function addAccount(login, password) {
    const allAccounts = await fetchAllAccounts();
    const existingAccount = allAccounts.find(account => account.login === login);

    if (existingAccount) {
        console.log('Konto o podanym loginie ju¿ istnieje.');
        return null;
    }

    const newAccount = {
        "id": "0",
        "login": login,
        "password": password,
        "permission_level": "1",
        "first_name": "default",
        "last_name": "default"
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount),
    };

    try {
        const response = await fetch('http://localhost:3000/account', requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dodane konto:', data);
        return data;
    } catch (error) {
        console.error('B³¹d podczas dodawania konta:', error);
    }
}