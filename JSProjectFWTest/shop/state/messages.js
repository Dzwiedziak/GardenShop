import { writable } from 'svelte/store';
import { Message } from '../models/message'

export const messagesStore = writable([]);