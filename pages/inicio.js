import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

import IngresoFlor from './ingreso_flor';
import Ingresos from './ingresos';

export default function Inicio() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activePage, setActivePage] = useState('inicio');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (session) {
      setUser(session.user);
    } else if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (status !== 'loading') {
      router.replace('/'); // ✅ Evita el bucle infinito
    }
  }, [session, status, router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    signOut({ callbackUrl: '/' });
  };

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={styles.container2}>
      <aside className={styles.sidebar}>
        <div className={styles.divider}>
          <Image src="/logo2.png" alt="Logo de la aplicación" width={130} height={85} className={styles.main} />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li onClick={() => setActivePage('inicio')} className={activePage === 'inicio' ? styles.activeItem : ''}>
              Inicio
            </li>
            <li onClick={() => setActivePage('ingreso_flor')} className={activePage === 'ingreso_flor' ? styles.activeItem : ''}>
              Ingreso
            </li>
            <li onClick={() => setActivePage('ingresos')} className={activePage === 'ingresos' ? styles.activeItem : ''}>
              Reportes</li>
            <li>Configuración</li>
          </ul>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.welcome}>GARDAEXPORT S.A.</h1>
          <div className={styles.userInfo}>
            {user.image ? (
              <Image src={user.image} alt={user.name} width={40} height={40} className={styles.profileImage} />
            ) : (
              <Image src="/default-user.png" alt="Usuario" width={40} height={40} className={styles.profileImage} />
            )}
            <span>
              {user.name || user.usuario}
              <div>
                <button className={styles.signOutButton} onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </span>
          </div>
        </header>

        <section>
          {activePage === 'inicio' && <h1>Bienvenido</h1>}
          {activePage === 'ingreso_flor' && <IngresoFlor />}
          {activePage === 'ingresos' && <Ingresos />}
        </section>
      </main>
    </div>
  );
}
