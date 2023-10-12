import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAnhpEt_92zHyQz5cD11w_8bEgPgFdQ1L0",
  authDomain: "karya-lokal.firebaseapp.com",
  projectId: "karya-lokal",
  storageBucket: "karya-lokal.appspot.com",
  messagingSenderId: "816182831555",
  appId: "1:816182831555:web:73940650f14c946e3a7576",
  measurementId: "G-H0T0XYLVBB",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();