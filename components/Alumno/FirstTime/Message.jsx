import React from 'react'

const Message = ({nombre}) => {
    return (
        <>
            <h1 className="transition-all duration-200 ease-in text-black dark:text-white font-semibold text-2xl">¡Hola <span className="font-bold text-ultra-violet hover:underline cursor-default">{nombre}</span>!</h1>
            <h1 className="transition-all duration-200 ease-in text-black dark:text-white pb-5 font-light text-xl">¿Primera vez? Necesitaremos un par de datos más...</h1>
        </>
    )
}

export default Message;