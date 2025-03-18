TodoListApp 🚀

Una aplicación de lista de tareas construida con Ionic + Angular y Firebase para almacenamiento en la nube. Permite gestionar tareas, marcarlas como completadas y eliminarlas con una interfaz amigable.

📌 Características

✅ Agregar, editar y eliminar tareas

✅ Sincronización en tiempo real con Firebase Firestore

✅ UI responsiva y moderna con Ionic

✅ Persistencia de datos con Firebase

🛠️ Tecnologías Utilizadas

Ionic Framework (con Angular)

Firebase Firestore (para almacenamiento)

AngularFire (conexión con Firebase)

Typescript (desarrollo con Angular)

🚀 Instalación y Configuración

1️⃣ Clonar el repositorio

git clone https://github.com/tuusuario/TodoListApp.git
cd TodoListApp

2️⃣ Instalar dependencias

npm install

3️⃣ Configurar Firebase

Crea un proyecto en Firebase Console.

Agrega una aplicación web y copia la configuración de Firebase.

Crea un archivo src/environments/environment.ts y agrega:

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
  }
};

4️⃣ Ejecutar la aplicación
