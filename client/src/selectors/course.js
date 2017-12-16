
export const getCourseBySlug = (courses, slug) => {
    return courses.find( course => course.slug === slug);
};

export const getCourseById = (courses, id) => (
    courses.find(course => course.id === id)
);