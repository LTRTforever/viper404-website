// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDaCF5dNg8KiVQL0P_eqvkVs-VIW7JveY8",
  authDomain: "viper404-web.firebaseapp.com",
  projectId: "viper404-web",
  storageBucket: "viper404-web.appspot.com",
  messagingSenderId: "376775037494",
  appId: "1:376775037494:web:66a4e07bd101903350be97",
  measurementId: "G-SWWQZ84DFN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Registro
window.register = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registro exitoso");
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// Login
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Inicio de sesión exitoso");
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// Logout
window.logout = async function () {
  await signOut(auth);
};

// Estado del usuario
onAuthStateChanged(auth, (user) => {
  const authDiv = document.getElementById("auth");
  const userInfo = document.getElementById("userInfo");
  const secretsSection = document.getElementById("secretsSection");
  if (user) {
    document.getElementById("userEmail").textContent = user.email;
    authDiv.style.display = "none";
    userInfo.style.display = "block";
    secretsSection.style.display = "block";
    // Aquí podrías llamar a una función para cargar secretos
  } else {
    authDiv.style.display = "block";
    userInfo.style.display = "none";
    secretsSection.style.display = "none";
  }
});
