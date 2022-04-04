export const EDIT_FIELDS = "EDIT_FIELDS";
export const DELETE_FIELD = "DELETE_FIELD";
export const ADD_FIELD = "ADD_FIELD";

export const editFieldsAction = (section, newState) => ({
    type: EDIT_FIELDS,
    payload: { section, newState },
});

export const deleteFieldAction = (id) => ({
    type: DELETE_FIELD,
    payload: { id },
});

export const addFieldAction = () => ({
    type: ADD_FIELD,
});

export function editFields(section, newData) {
    return (dispatch) => {
        dispatch(editFieldsAction(section, newData));
    };
}
