export function getBookById(id, books) {
    return books.find( book => book.id === id);
};

export function getBookBySlug(slug, books) {
    return books.find( book => book.slug === slug);
};