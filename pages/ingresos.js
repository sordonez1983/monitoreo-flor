import { useEffect, useState } from "react";

export default function Ingresos() {
    const [ingresos, setIngresos] = useState([]);

    // Obtener ingresos al cargar la página
    useEffect(() => {
        async function fetchIngresos() {
            const response = await fetch("http://localhost:8080/ingresos");
            const data = await response.json();
            setIngresos(data);
        }
        fetchIngresos();
    }, []);

    return (
        <div>
            <h1>Lista de Ingresos</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Semana</th>
                        <th>Tipo de Flor</th>
                        <th>Invernadero</th>
                        <th>Nave</th>
                        <th>Cama</th>
                        <th>Cama Evaluada</th>
                        <th>Variedad</th>
                        <th>Problema</th>
                        <th>Cantidad</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ingresos.map((ingreso) => (
                        <tr key={ingreso.id}>
                            <td>{ingreso.fecha}</td>
                            <td>{ingreso.semana}</td>
                            <td>{ingreso.tipoflor}</td>
                            <td>{ingreso.numinvernadero}</td>
                            <td>{ingreso.numnave}</td>
                            <td>{ingreso.numcama}</td>
                            <td>{ingreso.camevaluada}</td>
                            <td>{ingreso.variedad}</td>
                            <td>{ingreso.problema}</td>
                            <td>{ingreso.cantidad}</td>
                            <td>{ingreso.observaciones}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
