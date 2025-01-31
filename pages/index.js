import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (session || storedUser) {
      router.replace('/inicio'); // ✅ Evita el bucle infinito
    }
  }, [session, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: username, clave: password }),
      });

      if (!response.ok) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      router.replace('/inicio'); // ✅ Usar `replace` para evitar el bucle
    } catch (err) {
      setError(err.message);
    }
  };

  if (status === 'loading') return <p>Cargando...</p>;

  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <Image src="/logo2.png" alt="Logo de la aplicación" width={450} height={200} priority className={styles.logo} />
        <h1 className={styles.title}>Monitoreo de Flor</h1>
        <h2 className={styles.subtitle}>Inicio de Sesión</h2>

        <form onSubmit={handleLogin}>
          <div className={styles['form-group']}>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <input
              type="password"
              placeholder="Contraseña"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles['form-group']}>
            <button type="submit" className={`${styles.button} ${styles.buttonSecondary}`}>
              Acceder
            </button>
          </div>
        </form>

        <div className={styles['form-group']}>
          <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={() => signIn('google')}>
            <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
}

