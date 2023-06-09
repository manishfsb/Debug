import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const  firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

const datab = getFirestore()

// get collection data
const col1 = collection(datab, "proUserInfo")
getDocs(col1).then((snapshot) => {
    // console.log(snapshot.docs)
    let pro = []
    snapshot.docs.forEach((doc) => {
        pro.push({ ...doc.data(), id: doc.id })
    })
    console.log(pro)
})

const col2 = collection(datab, "patUserInfo")
getDocs(col2).then((snapshot) => {
    // console.log(snapshot.docs)
    let pat = []
    snapshot.docs.forEach((doc) => {
        pat.push({ ...doc.data(), id: doc.id })
    })
    console.log(pat)
})

const col3 = collection(datab, "surveyResponses")
getDocs(col3).then((snapshot) => {
    // console.log(snapshot.docs)
    let survey = []
    snapshot.docs.forEach((doc) => {
        survey.push({ ...doc.data(), id: doc.id })
    })
    console.log(survey)
})

.catch(err => {
    console.log(err.message)
})

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;