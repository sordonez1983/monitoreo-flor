import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h1>Bienvenido, {session.user.name}!</h1>
        <Image 
          src={session.user.image} 
          alt={session.user.name} 
          width={50} 
          height={50} 
          style={{ borderRadius: '50%' }} 
        />
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <div>
      <h1>No estás autenticado.</h1>
      <button onClick={() => signIn('google')}>Iniciar sesión con Google</button>
    </div>
  );
}
