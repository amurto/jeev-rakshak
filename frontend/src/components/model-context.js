import { createContext } from 'react';

export const ModelContext = createContext({
    model: null,
    loadModel: (model) => {},
});