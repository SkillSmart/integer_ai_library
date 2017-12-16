
export const getCourseReviewBySlug = (reviews, slug) => {
    return reviews.find( review => review.slug === slug);
};

export const getCourseReviewById = (reviews, id) => (
    reviews.find(review => review.id === id)
);