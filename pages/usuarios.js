import { useEffect, useState } from "react";

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({ usuario: "", clave: "" });

    // Obtener usuarios al cargar la página
    useEffect(() => {
        async function fetchUsuarios() {
            const response = await fetch("http://localhost:8080/usuarios");
            const data = await response.json();
            setUsuarios(data);
        }
        fetchUsuarios();
    }, []);

    // Crear un usuario
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoUsuario),
        });
        if (response.ok) {
            setNuevoUsuario({ usuario: "", clave: "" }); // Resetear el formulario
            const data = await response.json();
            setUsuarios([...usuarios, data]); // Agregar el nuevo usuario a la lista
        }
    };

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map((user) => (
                    <li key={user.id}>{user.usuario}</li>
                ))}
            </ul>

            <h2>Agregar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={nuevoUsuario.usuario}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, usuario: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Clave"
                    value={nuevoUsuario.clave}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, clave: e.target.value })}
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}