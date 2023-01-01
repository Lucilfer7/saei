import React from 'react';
import { useRouter } from 'next/router';
import Button from '../UI/Button';

const HomePageAdmin = () => {
    const router = useRouter();

    const handleClick = (e) => {
        router.push(`/admin/${e.target.name}`);
    };

    return (
        <div className='w-full h-full container mx-auto'>
            <div className='grid md:grid-cols-2 gap-4 content-evenly place-items-stretch p-2'>
                <Button
                    text="Lista de Usuarios"
                    style="random"
                    name="lista-usuarios"
                    color="bg-greenery"
                    onClick={handleClick}
                />
                <Button
                    text="Lista de Cursos"
                    style="random"
                    name="lista-cursos"
                    color="bg-classic-blue"
                    onClick={handleClick}
                />
                <Button
                    text="Estadísticas"
                    style="random"
                    name="estadisticas"
                    color="bg-living-coral"
                    onClick={handleClick}
                />
                <Button
                    text="Docentes"
                    style="random"
                    name="docentes"
                    color="bg-serenity"
                    onClick={handleClick}
                />
                <Button
                    text="Preceptores"
                    style="random"
                    name="preceptores"
                    color="bg-ultra-violet"
                    onClick={handleClick}
                />
                <Button
                    text="Alumnos"
                    style="random"
                    name="lista-alumnos"
                    color="bg-ultra-violet"
                    onClick={handleClick}
                />
            </div>

        </div>
    )
}

export default HomePageAdmin