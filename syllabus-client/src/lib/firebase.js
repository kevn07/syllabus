import * as firebase from "firebase/app";
import "firebase/auth";
import { config } from "./config";
const firebaseConfig = config.firebaseConfig;

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

const auth = firebase.auth();

export { auth };
