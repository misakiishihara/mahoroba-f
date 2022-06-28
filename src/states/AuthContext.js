import { createContext, useEffect, useReducer } from "react"
import { AuthReducer } from "./AuthReducer"

//ユーザーの初期状態を定義
const initialState = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    user: {
    _id: "62a695c53017862a5e9b7669",
    username: "misakiishihara",
    email: "misaki.ishihara0004@gmail.com",
    password: "abcdef",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    },
    isFetching: false,
    error: false,
}

//状態をグローバルに管理
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])

    return(
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}