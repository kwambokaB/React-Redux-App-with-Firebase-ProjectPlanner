const initState ={
    authError: null
};

 const authReducer = (state=initState, action) => {
    switch (action.type){
       case 'LOGIN_SUCCESS':
           console.log('Login success');
            return {
                ...state,
                authError: null
            };
       case 'LOGIN_ERROR':
        return{
            ...state,
            authError: 'Login Failed!'
        }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            
        return state
        case 'SIGNUP_SUCCESS' :
            console.log('signup success');
        return {
            ...state,
            authError : null
        }
        
        case 'SIGNUP_FAILED':
            console.log('signup failed');
        return {
            ...state,
            authError : action.err.message
        }   
            
            
        default:
            return state;
    }

}

export default authReducer;