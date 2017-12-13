
export const getCourseBySlug = (courses, slug) => {
    return courses.find( course => course.slug === slug);
};