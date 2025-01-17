
import { writable } from 'svelte/store';
import { v4 as uuid } from "uuid"

export const idStore = writable(undefined, (set) => {
    

    const cachedId = localStorage.getItem('id');

    if (cachedId) {
        set(cachedId);
        return;
    }

    const newId = uuid();

    localStorage.setItem('id', newId);

    set(newId);
});