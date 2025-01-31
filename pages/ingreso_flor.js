import { useState } from 'react';
import styles from './Home.module.css';

export default function Ingreso_flor() {
  const [formData, setFormData] = useState({
    fecha: "",
    semana: "",
    tipoflor: "",
    numinvernadero: "",
    numnave: "",
    numcama: "",
    camevaluada: "",
    variedad: "",
    problema: "",
    cantidad: "",
    observaciones: ""
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enviar los datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/ingresos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Ingreso registrado con éxito');
        setFormData({
          fecha: "",
          semana: "",
          tipoflor: "",
          numinvernadero: "",
          numnave: "",
          numcama: "",
          camevaluada: "",
          variedad: "",
          problema: "",
          cantidad: "",
          observaciones: ""
        });
      } else {
        alert('Error al registrar el ingreso');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema con la conexión');
    }
  };

  return (
    <div className={styles.container2}>
      <main className={styles.main}>
        <h2>Ingrese el Monitoreo de Flor</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label className={styles.label}>Fecha de Registro:</label>
            <input type="date" name="fecha" className={styles.input_in} value={formData.fecha} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>N. de semana:</label>
            <input type="number" name="semana" className={styles.input_in} value={formData.semana} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>Tipo de flor:</label>
            <input type="text" name="tipoflor" className={styles.input_in} value={formData.tipoflor} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>N. de invernadero:</label>
            <input type="number" name="numinvernadero" className={styles.input_in} value={formData.numinvernadero} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>N. de nave:</label>
            <input type="number" name="numnave" className={styles.input_in} value={formData.numnave} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>N. de cama:</label>
            <input type="number" name="numcama" className={styles.input_in} value={formData.numcama} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>Camas evaluadas:</label>
            <input type="number" name="camevaluada" className={styles.input_in} value={formData.camevaluada} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>Nombre de la variedad:</label>
            <input type="text" name="variedad" className={styles.input_in} value={formData.variedad} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>Tipo de problema:</label>
            <input type="text" name="problema" className={styles.input_in} value={formData.problema} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>Cantidad:</label>
            <input type="number" name="cantidad" className={styles.input_in} value={formData.cantidad} onChange={handleChange} required />
          </div>

          <div className={styles['form-group']}>
            <label className={styles.label}>Observaciones:</label>
            <textarea name="observaciones" className={styles.input_in} value={formData.observaciones} onChange={handleChange}></textarea>
          </div>

          <div className={styles['form-group']}>
            <button type="submit" className={styles.button}>Registrar Ingreso</button>
          </div>
        </form>
      </main>
    </div>
  );
}

