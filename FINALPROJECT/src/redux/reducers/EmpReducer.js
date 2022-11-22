const initialState=[
    {
        id: 1,
        name: "hari",
        number: 9876543210,
        email: "dharanhari2207@gmail.com"
    },
    {
        id: 2,
        name: "prem",
        number: 9786543210,
        email: "ppremkumar3112@gmail.com"
    },
];
 
const EmpReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_LIST":
            state =[...state, action.payload];
            return state;
        case "UPDATE_LIST":
            const updateState = state.map(emplist=> emplist.id === action.payload.id? action.payload: emplist);
            state = updateState;
            return state;
        case "DELETE_LIST":
            const filterList = state.filter((emplist) => emplist.id !== action.payload && emplist);
            state = filterList;
            return state;
        default:
            return state;
    }
};

export default EmpReducer;