import * as firebase from "firebase/app";
import "firebase/auth";
import { config } from "./config";
const firebaseConfig = config.firebaseConfig;

console.log(config.firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
