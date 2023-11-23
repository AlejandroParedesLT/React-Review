import React from 'react'
import {useState} from 'react'
import { useCounter } from '../hooks/useCounter';

export const ContadorconHook = () => {
    const {valor, acumular} = useCounter(100);

    return (
        <div><h3>Contador con Hook: <small>{valor}</small></h3>
            <button 
                className='btn btn-primary'
                onClick={()=>acumular(1)}
            >+1</button>
            &nbsp;
            <button 
                className='btn btn-primary'
                onClick={()=>acumular(-1)}
            >-1</button>
        </div>
    )
}
