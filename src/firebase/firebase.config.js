// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDFCzXCR4zailyrvRG8BKUT97g8EcY5DdQ",
  authDomain: "ecommerce-react-425b5.firebaseapp.com",
  projectId: "ecommerce-react-425b5",
  storageBucket: "ecommerce-react-425b5.appspot.com",
  messagingSenderId: "766606910628",
  appId: "1:766606910628:web:2191d450df1ba60b753231",
  measurementId: "G-VXNKXXQ1LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;