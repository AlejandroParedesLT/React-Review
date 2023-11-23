import React from 'react'

interface Persona{
    nombre: string;
    edad: Number;
    direccion:Direccion;
}

interface Direccion{
    pais:string;
    CasaNo:number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canada',
            CasaNo : 615
        }
    }    


    
    return (
        <>
            <h3> Objetos literales </h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}