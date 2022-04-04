export const EDIT_PROJECTS = "EDIT_PROJECTS";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";

export const editProjectsAction = (newState) => ({
    type: EDIT_PROJECTS,
    payload: newState,
});

export const deleteProjectAction = (id) => ({
    type: DELETE_PROJECT,
    payload: { id },
});

export const addProjectAction = () => ({
    type: ADD_PROJECT,
});

export function editProjects(id, newData) {
    return (dispatch) => {
        dispatch(editProjectsAction(id, newData));
    };
}

// export function delelet
