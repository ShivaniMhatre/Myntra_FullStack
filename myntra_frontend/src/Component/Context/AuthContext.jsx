import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const Login = (userData, token) => {
        localStorage.setItem('Token', JSON.stringify(token))
        // localStorage.setItem("User", JSON.stringify(userData.user))
        dispatch({
            type: "LOGIN",
            payload: userData
        })
    }
    const Logout = () => {
        localStorage.removeItem('Token')
        dispatch({
            type: "LOGOUT"
        })
    }

    useEffect(() => {
        async function get_CurrentUser() {
            const token = JSON.parse(localStorage.getItem('Token'))
            if (token) {
                const response = await axios.post('http://localhost:4001/getcurrentUser', { token })
                if (response.data.success) {
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.userData
                    })
                } else {
                    dispatch({
                        type: "LOGOUT"
                    })
                }
            }
        } get_CurrentUser()
    }, [])

    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}