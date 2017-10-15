const initialCommonState = {
    page : "Landing",
};
const reducer =
    function (state = initialCommonState, action) {
        switch (action.type) {
            case "nav":
                return Object.assign({}, state, {
                    page: action.page
                });
            default:
                return state;
        }
    };


export default reducer;