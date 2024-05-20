import { writable } from 'svelte/store';
import { fetchAllAccounts } from '../services/account.js'

export const loginState = writable(2);

export async function login(username, password) {
    const accounts = await fetchAllAccounts();
    const account = accounts.find(account => account.login === username && account.password === password);
    if (account) {
        if (account.permission_level == 0) {
            loginState.set(0);
        }
        else if (account.permission_level == 1) {
            loginState.set(1);
        }
    }
}