import { io } from "socket.io-client";
import { validateMessage } from "../models/message"
import { messagesStore } from "../state/messages"

const socket = io("ws://localhost:3001");

socket.on("connect", () => {
    console.log("Successfully connected to socket");
});

socket.on("messages", (messages) => {
    if (!Array.isArray(messages)) {
        return;
    }

    let validateMessages = [];

    let limitedMessages = messages.filter((_, index) => {
        return index < 25;
    });

    for (const message of limitedMessages) {
        const validatedMessage = validateMessage(message);

        if (validatedMessage) {
            validateMessages.push(validatedMessage);
        }
    }
    messagesStore.set(validateMessages);
});

export function sendMessage(content, id) {
    return new Promise((resolve, reject) => {
        socket.emit("message", content, id, (response) => {
            const error = response.error;

            if (error) {
                if (typeof error !== "string") {
                    reject({ error: "Error sending message" });
                    return;
                }
            }

            const message = response.message;

            if (!message || typeof message !== "string") {
                reject({ error: "Unexpected result from server" });
                return;
            }

            resolve({ message });
        });
    });
}