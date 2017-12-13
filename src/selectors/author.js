export const getAuthorByName = (authors, name) => {
    return authors.find( author => author.name === name);
};