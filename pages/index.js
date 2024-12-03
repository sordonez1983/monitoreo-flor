import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <h1 className={styles.welcome}>Bienvenido, {session.user.name}!</h1>
        <Image 
          src={session.user.image} 
          alt={session.user.name} 
          width={100} 
          height={100} 
          className={styles.profileImage} 
        />
        <p>¡Has iniciado sesión con Google!</p>
        <button 
          onClick={() => signOut()} 
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image 
        src="/logo.png" 
        alt="Logo de la aplicación" 
        width={300} 
        height={150} 
        priority 
        className={styles.logo}
      />
      <h1 className={styles.title}>MONITOREO DE FLOR</h1>
      <h2 className={styles.subtitle}>Inicio de Sesión</h2>
      <form className={styles.form}>
        <label htmlFor="usuario" className={styles.label}>Usuario</label>
        <input
          type="text"
          placeholder="Ingrese su Usuario"
          className={styles.input}
        />
        <label htmlFor="clave" className={styles.label}>Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese su Contraseña"
          className={styles.input}
        />
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => signIn('google')}
        >
          Iniciar sesión
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
