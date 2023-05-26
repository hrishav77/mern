import { createContext,useReducer } from "react";

export const AuthContext=createContext()

export const authReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {user:action.payload}
        case 'LOGOUT':
            return{user:null}
        default:
            return state
    }
}

export const AuthContextProvider=({children})=>{

    const [state,dispatch]=useReducer(authReducer,{user:null})
    console.log("authcontext state ",state)
    return(//state is basically the user property
<AuthContext.Provider value={{...state,dispatch}}>
    {children}
</AuthContext.Provider>
    )

}