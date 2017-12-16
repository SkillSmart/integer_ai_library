import actions from '../actions/actionTypes';

const initialState = {
    projects: [
        {
            id: "12345",
            title: 'First Project',
            slug: "first-project-slag",
            headline: 'Webcrawler for Topic extraction from Tech Articles',
            situation: 'A situation that got me or the client actually involved in producing the solution',
            usecase: 'A simple usecase to describe the project',
            tags: ['ai', 'webagent', 'NLP'],
            stack: ['MongoDB', 'Express', 'React', 'Node.js'],
            status: 'in-production',
            url: 'https://anaconda.com/exampleurl',
            startDate: '2017-11-01',
            endDate: '2017-21-12'
        },
        {
            id: "12346",
            title: 'Second Project',
            slug: 'second-project-slag',
            headline: 'Nightcrawler for Shop Loading',
            situation: 'A situation that got me or the client actually involved in producing the solution',
            usecase: 'A simple usecase to describe the project',
            tags: ['neural networks', 'deep learning', 'apache hadoop'],
            stack: ['postgres', 'django', 'bootstrap', 'jquery'],
            status: 'in-production',
            url: 'https://anaconda.com/exampleurl',
            startDate: '2017-11-01',
            endDate: '2017-21-12',

        }
    ],
    selectedProject: "12345",
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.ADD_PROJECT:
            return state.projects.concat(payload);
        case actions.SELECT_PROJECT:
            console.log("[Select Project]", state);
            const selectedProject = state.projects.find(project => project.id === payload);
            return {
                ...state,
                selectedProject: selectedProject.id
            };
        case actions.REMOVE_PROJECT:
            console.log("[Remove Project]", payload);
            return state.filter(course => !course.id === payload);
        case actions.UPDATE_PROJECT:
            let { id, updates } = payload;
            console.log("UPATE-PROJECT", payload)
            const updatedProjects = state.projects.map(project => {
                if (project.id === id) {
                    return {
                        ...project,
                        ...updates
                    };
                }
                return project;
            });

            return {
                ...state,
                projects: updatedProjects
            };
        default:
            return state;
    }
};