// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth'; // Voi lisätä myöhemmin jos tarvitsee
// import { getStorage } from 'firebase/storage'; // Voi lisätä myöhemmin jos tarvitsee

const firebaseConfig = {
  // TÄMÄ OSIO TULEE SINUN OMASTA FIREBASE-KONSOLISTA KOPIOIMASI
  // Esimerkki:
  apiKey: "AIzaSyCvKMrZAgUZS6eMnBQ9d7Am9I92LbQSmUU",
  authDomain: "al-zahra-hub.firebaseapp.com",
  projectId: "al-zahra-hub",
  storageBucket: "al-zahra-hub.firebasestorage.app",
  messagingSenderId: "357933418666",
  appId: "1:357933418666:web:b2cb99f30483762f3aa8d3",
  measurementId: "G-BSHLK12VWJ"
};

// Alusta Firebase-sovellus
const app = initializeApp(firebaseConfig);

// Vie Firestore-instanssi ulos, jotta sitä voidaan käyttää muissa tiedostoissa
export const db = getFirestore(app);

// Voit viedä ulos myös muita Firebase-palveluita täältä, jos ne on alustettu.
// Esimerkiksi:
// export const auth = getAuth(app);
// export const storage = getStorage(app);
