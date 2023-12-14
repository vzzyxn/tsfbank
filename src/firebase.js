import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs} from 'firebase/firestore'; 
const firebaseConfig = { 
	apiKey: "AIzaSyD9LKpxv_LI4A8HjOdLAkYhS2wK6SZZ5wQ",
  	authDomain: "tsf-bank-system.firebaseapp.com",
  	databaseURL: "https://tsf-bank-system-default-rtdb.firebaseio.com",
  	projectId: "tsf-bank-system",
  	storageBucket: "tsf-bank-system.appspot.com",
  	messagingSenderId: "702258277981",
  	appId: "1:702258277981:web:ce5b31e6fb15f7fe2527b4"
};  
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app); 



/*
getDocs(colRef)
        .then((snapshot) => {
                let tsfbank = []
                snapshot.docs.forEach((doc) => {
                        tsfbank.push({ ... doc.data(), id: doc.id })
                }) 
                document.write('<pre>' + JSON.stringify(tsfbank,null,2) + '</pre>');
})*/

