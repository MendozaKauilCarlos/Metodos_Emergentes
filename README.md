# Metodos_Emergentes

Aplicacion web de transporte estudiantil desarrollada con React + Vite + TypeScript, integrada con Firebase Authentication y Cloud Firestore. Demo en produccion: https://ride-to-class-eeaba.web.app/

## Stack

- React + Vite
- TypeScript
- Firebase (Auth, Firestore, Storage, Hosting)
- Tailwind CSS
- Leaflet / React-Leaflet

## Requisitos

- Node.js 18 o superior
- npm 9 o superior
- Cuenta de Firebase

## Instalacion

```bash
npm install
```

## Configuracion de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Activa:
   - Authentication (Email/Password o Google)
   - Firestore Database
3. Registra una app web y copia el objeto `firebaseConfig`.
4. Crea un archivo `.env` en la raiz usando `.env.example`:

```bash
cp .env.example .env
```

5. Completa las variables:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Desarrollo local

```bash
npm run dev
```

Disponible en `http://localhost:3000`.

## Enlaces del proyecto desplegado

- Produccion principal: [ride-to-class-eeaba.web.app](https://ride-to-class-eeaba.web.app)
- Dominio alterno: [ride-to-class-eeaba.firebaseapp.com](https://ride-to-class-eeaba.firebaseapp.com)

## Firebase CLI y despliegue

1. Inicia sesion:

```bash
firebase login
```

2. Asocia el proyecto (opcional si ya existe `.firebaserc`):

```bash
firebase use --add
```

3. Despliega hosting + firestore:

```bash
npm run deploy
```

Tambien puedes desplegar por partes:

```bash
firebase deploy --only hosting
firebase deploy --only firestore:rules,firestore:indexes
```

## Notas

- Las reglas estan definidas en `firestore.rules`.
- Los indices estan en `firestore.indexes.json`.
- Si faltan variables `VITE_*`, la app detendra el arranque con un error para evitar configuraciones incompletas.
