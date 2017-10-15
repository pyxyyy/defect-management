const initialCommonState = {
    page : "Landing",
    color : false
};
const reducer =
    function (state = initialCommonState, action) {
        switch (action.type) {
            case "nav":
                return Object.assign({}, state, {
                    page: action.page
                });
            case "color":
                return Object.assign({}, state, {
                    color: true
                });
            case "disappear":
                return Object.assign({}, state, {
                    disappear: true
                });
            default:
                return state;
        }
    };


export default reducer;