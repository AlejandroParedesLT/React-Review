import React from 'react'

export const Funciones = () => {
    const sumar = (a:number, b:number):number =>{
        return a*b;
    }
    return (
        <div>
            <h3>Funciones</h3> 
            <span>El resultado es: {sumar(1, 2)}</span>
        </div>
    )
}
