export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token: "BQB_mqaqhpdhRlpz7jfG3SFAshup86v4gd5FuYx1ppB-ANgAm-Ii2FI0Xg7uJb0Ewut_foO1AOLcIBVkzJZ9n2sO8FsdBVn2hNVA3CtG2jJ5tJJUSopP_0UX-LjJ1y2yqHesTdOTOCb010i58fQP9vLs1eZbGreQUYHpsEAW_uxKL6BbGNW16JOeX7KAnqUTN_04LioyyPzxkWwD",
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
};

export default reducer;
