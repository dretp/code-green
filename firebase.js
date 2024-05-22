const { initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

//const serviceAccount = require('./creds.json')


const firebaseConfig = {
  apiKey: "AIzaSyAXYlw_SDsAoyso4Ev7WuVoSC9Uxg_eFNk",
  authDomain: "budgeting-dbd72.firebaseapp.com",
  projectId: "budgeting-dbd72",
  storageBucket: "budgeting-dbd72.appspot.com",
  messagingSenderId: "800176321077",
  appId: "1:800176321077:web:eb85ee25d264546705b77c",

  measurementId: "G-REV7YEZEHT"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

module.exports = { db }