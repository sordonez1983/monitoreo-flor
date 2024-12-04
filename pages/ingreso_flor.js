import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Ingreso_flor() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (!session) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={styles.container2}>
      {/* Encabezado */}
      <header className={styles.header}>
        <Image 
            src="/logo.jpg" 
            alt="Logo de la aplicación" 
            width={130} 
            height={70}
      />
        <h1 className={styles.welcome}>GARDAEXPORT S.A.</h1>
        <div className={styles.userInfo}>
          <Image 
            src={session.user.image} 
            alt={session.user.name} 
            width={40} 
            height={40}
            className={styles.profileImage} 
          />
          <span>{session.user.name}<div><button className={styles.signOutButton} onClick={() => signOut()}>Cerrar sesión</button></div></span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className={styles.main}>
        <h2>Ingrese el Monitoreo de Flor</h2>
        <form>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Fecha de Registro: 
          </label>
          <input type="date" name="fechaRegistro" className={styles.input_in} required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            N. de semana: 
          </label>
          <input type="number" name="numeroSemana" className={styles.input_in} placeholder='0' required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Tipo de flor: 
          </label>
          <input type="text" name="tipoFlor" className={styles.input_in} required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            N. de invernadero: 
          </label>
          <input type="number" name="numeroInvernadero" className={styles.input_in} placeholder='0' required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            N. de nave: 
          </label>
          <input type="number" name="numeroNave" className={styles.input_in} placeholder='0' required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            N. de cama:
          </label>
          <input type="number" name="numeroCama" className={styles.input_in} placeholder='0' required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Camas evaluadas: 
          </label>
          <input type="number" name="camasEvaluadas" className={styles.input_in} placeholder='0' required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Nombre de la variedad: 
          </label>
          <input type="text" name="nombreVariedad" className={styles.input_in} required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Tipo de problema:
          </label>
          <input type="text" name="tipoProblema" className={styles.input_in} required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Cantidad:
          </label>
          <input type="number" name="cantidad" className={styles.input_in} placeholder='0' required />
          </div>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            Observaciones: 
          </label>
          <textarea name="observaciones"></textarea>
          </div>
        <div className={styles['form-group']}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Sincronizar con ERP
        </button>
        </div>  
        </form>
      </main>
    </div>
  );
}
