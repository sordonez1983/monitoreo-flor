import { signIn, signOut, useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
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
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
      <Image 
        src="/logo.png" 
        alt="Logo de la aplicación" 
        width={450} 
        height={150} 
        priority 
        className={styles.logo}
      />
      <h1 className={styles.title}>Monitoreo de Flor</h1>
      <h2 className={styles.subtitle}>Inicio de Sesión</h2>
      <form>
      <div className={styles['form-group']}>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className={styles.input}
        />
      </div>
      <div className={styles['form-group']}>
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.input}
        />
      </div>
      <div className={styles['form-group']}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Acceder
        </button>
      </div>
      <div className={styles['form-group']}>  
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => signIn('google')}
        >
          <FontAwesomeIcon icon={faGoogle} className={styles.icon}/>
          Iniciar sesión con Google
        </button>
      </div>
      </form>
    </div>
    </div>
  );
}
