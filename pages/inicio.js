import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

import IngresoFlor from './ingreso_flor';

export default function Inicio() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activePage, setActivePage] = useState('inicio');

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
      <aside className={styles.sidebar}>
        <div className={styles.divider}>
        <Image 
            src="/logo2.png" 
            alt="Logo de la aplicación" 
            width={130} 
            height={85}
            className={styles.main}
        />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li onClick={() => setActivePage('inicio')}
              className={activePage === 'inicio' ? styles.activeItem : ''}>
                Inicio</li>
            <li onClick={() => setActivePage('ingreso_flor')}
              className={activePage === 'ingreso_flor' ? styles.activeItem : ''}>
                Ingreso</li>
            <li>Reportes</li>
            <li>Configuraciòn</li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
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
        <section>
            {activePage === 'inicio' && <h1>Bienvenido</h1>}
            {activePage === 'ingreso_flor' && <IngresoFlor />}
        </section>
      </main>
    </div>
  );
}
