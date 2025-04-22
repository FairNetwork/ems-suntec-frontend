import { REFERENCES } from '../constants/references';

export const useReferences = () => {
    return REFERENCES.map(({ id }) => {
        return {
            id
        };
    });
};

export const useReference = (id: string) => {
    return REFERENCES.find((reference) => reference.id === id);
};
