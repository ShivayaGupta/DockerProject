const initialState={
    students:[],
    student:[],
    loading:false,
    error:""
}

function StudentReducer(state=initialState,action){
    switch(action.type){
        case "GetStudentById":{
            return{
                ...state,
                loading:true,
                student:action.payload
            }}
            case "GetAllStudents":{
                return{
                    ...state,
                    loading:false,
                    student:action.payload,
                    error:""
                }
            }
            case "AddStudent":{
                return{
                    ...state,
                    students:[...state.students,action.payload],
                    loading:false,
                    error:""
                }
            }
            case "Error":{
                return{
                    ...state,loading:false,
                    error:action.payload
                }
            }
            default : return state;
    }
}

export default StudentReducer;