import React, { useEffect, useState } from 'react';
import './App.css';


const tapas = [
    "Patatas Bravas",
    "Tortilla Española",
    "Gambas al Ajillo",
    "Pimientos de Padrón",
    "Chorizo al Vino",
    "Croquetas",
    "Pulpo a la Gallega",
    "Ensaladilla Rusa"
];


function App() {
    const [baloons, setBaloons] = useState([]);


    useEffect(() => {
        mostrarTapas();
    }, []);


    const crearBalon = (tapa) => {
        return {
            id: Math.random(),
            tapa,
            left: Math.random() * 100,
            top: Math.random() * 100
        };
    };


    const mostrarTapas = () => {
        const numBaloons = 10; // Número de globos a mostrar
        const nuevosBaloons = Array.from({ length: numBaloons }, () => {
            const tapa = tapas[Math.floor(Math.random() * tapas.length)];
            return crearBalon(tapa);
        });
        setBaloons(nuevosBaloons);
    };


    const seleccionarTapa = (tapa) => {
        alert(`Has seleccionado: ${tapa}`);
        // Aquí puedes agregar más lógica, como cerrar los globos o mostrar más información.
    };


    return (
        <div className="menu">
            {baloons.map(balon => (
                <div
                    key={balon.id}
                    className="balon"
                    style={{ left: `${balon.left}vw`, top: `${balon.top}vh` }}
                    onClick={() => seleccionarTapa(balon.tapa)}
                >
                    {balon.tapa}
                </div>
            ))}
        </div>
    );
}


export default App;