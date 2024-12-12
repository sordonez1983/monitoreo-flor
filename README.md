## Digitalización del Monitoreo de Flores en Gardaexport S.A. con una Solución Móvil

## Resumen Ejecutivo:
Se propone una aplicación móvil innovadora para optimizar los procesos fitosanitarios en el sector floricultor de Gardaexport S.A. Esta solución permitirá recolectar datos en tiempo real sobre el estado de las flores, facilitando la toma de decisiones informadas, reduciendo costos y mejorando la calidad del producto final.

## Objetivos:
## Digitalización: Sustituir los registros manuales por una herramienta digital.
Optimización: Mejorar la eficiencia de los procesos fitosanitarios.
Información en tiempo real: Facilitar la toma de decisiones basadas en datos actualizados.
Reducción de costos: Optimizar el uso de insumos químicos y recursos.

## Mapa de Capacidades:
## Foco: Monitoreo de flores.
## Objetivo: Digitalizar y optimizar los procesos fitosanitarios.
## Beneficios:
* Mejora de la calidad del producto.
* Ahorro de recursos.
* Reducción de costos.

![image](https://github.com/user-attachments/assets/0978e673-fae0-49ed-91ca-e87050cde44e)

## Solución Propuesta:
## Aplicación móvil

## Ingreso de datos en campo: 
Facilita la captura de información sobre plagas, enfermedades, etc.
## Información en tiempo real: 
Presenta datos actualizados sobre el estado de las flores.
## Alertas:
Notifica al usuario sobre posibles problemas o acciones a tomar.
## Integración con sistemas existentes: 
Se conecta a la base de datos SQL Server de Gardaexport S.A. para una gestión centralizada de la información.

## Implementación:
## Frontend: 
React con Next.js para un desarrollo de aplicaciones web de una sola página (SPA) eficiente y con renderizado en el lado del servidor (SSR).
## Backend: 
Se utiliza Node.js y se consume API de google

## Desarrollo:
## Entorno de desarrollo:
Visual Studio Code con extensiones como ESLint, Prettier y debugging para mejorar la productividad y la calidad del código.
## Gestión de versiones:
Git para controlar los cambios en el código y colaborar compartir la tarea.
## Despliegue: 
Vercel para un despliegue automático y escalable de la aplicación, y localmente para pruebas y desarrollo.

## Integración con Google Sign-In:
## Biblioteca: 
Se utiliza la biblioteca oficial de Google Sign-In para JavaScript para gestionar la autenticación de usuarios.
## Flujo de autenticación:
El usuario inicia sesión con su cuenta de Google, se obtiene un token de acceso y se utiliza para verificar la identidad del usuario y obtener información de su perfil.

## Prototipado:

![image](https://github.com/user-attachments/assets/42426d0e-ca64-4c8f-a6bc-7d209dba3c73)

## Deploy Local:
http://localhost:3000

## Deploy on Vercel:
https://monitoreo-flor.vercel.app/
