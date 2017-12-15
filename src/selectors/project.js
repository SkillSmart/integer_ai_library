export const getProjectBySlug = (projectList, slug) => {
    return (
        projectList.find(project => project.slug === slug)
    );}