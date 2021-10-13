import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, query, where,  getDoc, doc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app)


export const getItem = (iditem) =>{
    return new Promise ((resolve, reject) => {
        getDoc(doc(db, 'items' , iditem)).then((querySnapshot) => {
            const item = { id: querySnapshot.id, ...querySnapshot.data() }
            resolve(item)
            }).catch((error) => {
                reject('Error buscando item', error)
            })
    })
}

export const getItems = () =>{
    return new Promise ((resolve, reject) => {
        getDocs(collection(db, 'items')).then((querySnapshot) =>{
            const items = querySnapshot.docs.map(doc=> {
                return { id: doc.id, ...doc.data()}
            })
            resolve(items)
            }).catch((error) =>{
                reject('Error buscando los items '+ error)
            })
    })
}

export const getItemsCategory = (category) =>{
    return new Promise ((resolve, reject) => {
        getDocs(query(collection(db, 'items'),where('category', '==', category))).then((querySnapshot) =>{
        const items = querySnapshot.docs.map(doc =>{
            return {id: doc.id, ...doc.data()}
        })
            resolve(items)
        }).catch((error) => {
            reject('Error en la busqueda de items'+ error)
        })
    })
}

export const getCategories = () =>{
    return new Promise ((resolve, reject) => {
        getDocs(collection(db, 'categories')).then((querySnapshot) =>{
            const categories = querySnapshot.docs.map(cat => {
                return { id: cat.id, ...cat.data()}
            })
                resolve(categories)
            }).catch((error) =>{
                reject('Error buscando los items '+ error)
            })
    })
}

export const getHistory = (user) => {
    return new Promise ((resolve, reject) => {
        getDocs(query(collection(db, 'orders'), where ('buyer', '==', user))).then((querySnapshot) =>{
        const items = querySnapshot.docs.map(doc =>{
            return {id: doc.id, ...doc.data()}
        })
            resolve(items)
            console.log(items)
        }).catch((error) => {
            reject('Error en la busqueda de usuario'+ error)
        })
    })
}