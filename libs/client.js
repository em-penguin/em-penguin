import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'em-penguin',
    apiKey: process.env.API_KEY,
});