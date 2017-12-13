import actions from './actionTypes';


export const addProject = (projectObj) => ({
    type: actions.ADD_PROJECT,
    payload: projectObj
});

export const updateProject = (id, updates) => ({
    type: actions.UPDATE_PROJECT,
    payload: {
        id,
        updates
    }
});

