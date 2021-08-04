import firebase from 'firebase';

const firebaseConfig = ({
  apiKey:           process.env.REACT_APP_apiKey,
  authDomain:       process.env.REACT_APP_authDomain,
  databaseURL:      process.env.REACT_APP_databaseURL,
  projectId:        process.env.REACT_APP_projectId,
  storageBucket:    process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:            process.env.REACT_APP_appId,
});

let instance;
let database;

export default function getFirebase() {
    if (typeof window !== "undefined") {
        if (instance) return instance;
        instance = firebase.initializeApp(firebaseConfig);
        return instance;
    }
    return null;
}

export function getDatabase() {
    if (typeof window !== "undefined") {
        if (database) return database;
        database = firebase.database();
        return database;
    }
    return null;
}