import { signIn, useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/ingreso_flor');
    return null;
  }

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
      <Image 
        src="/logo2.png"
        alt="Logo de la aplicación" 
        width={450} 
        height={200} 
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
