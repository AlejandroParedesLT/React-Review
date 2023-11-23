//import { type } from 'os';
import React, { useEffect } from 'react';
import {useReducer} from 'react';
//import { TypeOfExpression } from 'typescript';

interface AuthState{
    validando : boolean;
    token: string|null;
    userName: string;
    nombre: string;
}

const initialState : AuthState = {
    validando : true,
    token: null,
    userName: '',
    nombre: ''
}

type LoginPayload={
    username:string;
    nombre:string;
}

type AuthAution = 
    | {type:'logout'}
    | {type: 'login', payload:LoginPayload};

const authReducer = (state:AuthState, action:AuthAution) :AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando:false,
                token:null,
                nombre:'',
                userName:''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return{
                validando:false,
                token:'ABC12',
                nombre:nombre,
                userName:username
            }
        default:
            return state;
    }
}

export const Login = () => {
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
      setTimeout(() => {
        dispatch({type:'logout'} )
      }, 1500);
    }, []);
    
    const login = () => {
        dispatch({
            type:'login', 
            payload:{
                nombre:'Alejandro',
                username:'Stride'
            }
        })
    }

    const logout = () => {
        dispatch({
            type:'logout'
        })
    }

    if(validando){
        return(
            <>
                <h3>Login</h3>
                <div className='alert alert-info'>
                    Validando...
                </div>
            </>
            
        )
    }

    return (
        <div>
            <h3>Login</h3>
            
            {
                (token)
                ? 
                (
                    <div className='alert alert-success'>
                        Autenticado como: {nombre}
                    </div>
                    
                )
                :<div className='alert alert-danger'>No autenticado</div>
            }
            {
                (token)
                ?(
                    <button
                        className='btn btn-primary'
                        onClick={logout}
                    >
                        LogOut
                    </button>
                )
                :
                (
                    <button
                        className='btn btn-danger'
                        onClick={login}
                    >
                        Login
                    </button>
                )

            }
        </div>
    )
}
