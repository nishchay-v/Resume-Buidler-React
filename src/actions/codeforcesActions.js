import axios from "axios";

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => ({
    type: GET_DATA,
});

export const getDataSuccess = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: data,
});

export const getDataFailure = () => ({
    type: GET_DATA_FAILURE,
});

export function fetchData(handle) {
    return async (dispatch) => {
        dispatch(getData());

        try {
            const uri =
                "https://codeforces.com/api/user.info?handles=" + handle;
            const response = await axios.get(uri);
            const data = response.data.result[0];
            dispatch(getDataSuccess(data));
        } catch (error) {
            dispatch(getDataFailure());
        }
    };
}
