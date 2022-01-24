import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXSmHRNqAjnTz5CFJDBjRR6kNeHAtXj3I",
  authDomain: "ecommerce-jc.firebaseapp.com",
  projectId: "ecommerce-jc",
  storageBucket: "ecommerce-jc.appspot.com",
  messagingSenderId: "164282104159",
  appId: "1:164282104159:web:7f79a2b23e49fe01519eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}