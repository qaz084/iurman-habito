const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBBJ1FL2nsXi9_jbeyK4hy6zhMtFCLV7xk",
    authDomain: "habito-iurman.firebaseapp.com",
    projectId: "habito-iurman",
    storageBucket: "habito-iurman.appspot.com",
    messagingSenderId: "853513810174",
    appId: "1:853513810174:web:9106f415963261e45735af"
  });

  const db = firebase.firestore();

const products =[
    {
   
     "img1": "/images/products/tanktop_01.png",
     "img2": "/images/products/tanktop_02.png",
     "img3": "/images/products/tanktop_03.png",
     "img4": "/images/products/tanktop_04.png",
     "CategoryId": 1,
     "category": "Remeras",
     "price": 2000.00,
     "discount": 40,
     "name": "Musculosa",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":5
 
     },
    {
    
     "img1": "/images/products/poloshirt_01.jpg",
     "img2": "/images/products/poloshirt_02.jpg",
     "img3": "/images/products/poloshirt_03.jpg",
     "img4": "/images/products/poloshirt_04.jpg",
     "CategoryId": 1,
     "category": "Remeras",
     "price": 3200.00,
     "discount": 40,
     "name": "Polo",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":5
 
     },
    {
     
     "img1": "/images/products/tshirt-ejemplo-01.jpg",
     "img2": "/images/products/tshirt-ejemplo-02.jpg",
     "img3": "/images/products/tshirt-ejemplo-03.jpg",
     "img4": "/images/products/tshirt-ejemplo-04.jpg",
     "CategoryId": 1,
     "category": "Remeras",
     "price": 2500.00,
     "discount": 40,
     "name": "Remera",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":5
 
     },
    {
     
     "img1": "/images/products/jean_01.jpg",
     "img2": "/images/products/jean_02.jpg",
     "img3": "/images/products/jean_03.jpg",
     "img4": "/images/products/jean_04.jpg",
     "CategoryId": 2,
     "category": "Pantalones",
     "price": 5800,
     "discount": 40,
     "name": "Jean",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":5
 
     },
    {
     
     "img1": "/images/products/joggin_01.jpg",
     "img2": "/images/products/joggin_02.jpg",
     "img3": "/images/products/joggin_03.jpg",
     "img4": "/images/products/joggin_04.jpg",
     "CategoryId": 2,
     "category": "Pantalones",
     "price": 4200,
     "discount": 40,
     "name": "Joggin",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":5
 
     },
    {
    
     "img1": "/images/products/trouser_01.jpg",
     "img2": "/images/products/trouser_02.jpg",
     "img3": "/images/products/trouser_03.jpg",
     "img4": "/images/products/trouser_04.jpg",
     "CategoryId": 2,
     "category": "Pantalones",
     "price": 7500,
     "discount": 40,
     "name": "Trouser",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":3
 
     },
    {
    
     "img1": "/images/products/shirt_01.jpg",
     "img2": "/images/products/shirt_02.jpg",
     "img3": "/images/products/shirt_03.jpg",
     "img4": "/images/products/shirt_04.jpg",
     "CategoryId": 3,
     "category": "Camisas",
     "price": 10500,
     "discount": 40,
     "name": "Camisa Formal",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":7
 
     },
    {
    
     "img1": "/images/products/shirt-long-sleeves_01.jpg",
     "img2": "/images/products/shirt-long-sleeves_02.jpg",
     "img3": "/images/products/shirt-long-sleeves_03.jpg",
     "img4": "/images/products/shirt-long-sleeves_04.jpg",
     "CategoryId": 3,
     "category": "Camisas",
     "price": 9500,
     "discount": 40,
     "name": "Camisas Manga Larga",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":2
 
     },
    {
     
     "img1": "/images/products/shirt-short-sleeves_01.jpg",
     "img2": "/images/products/shirt-short-sleeves_02.jpg",
     "img3": "/images/products/shirt-short-sleeves_03.jpg",
     "img4": "/images/products/shirt-short-sleeves_04.jpg",
     "CategoryId": 3,
     "category": "Camisas",
     "price": 8400,
     "discount": 40,
     "name": "Camisas Manga Corta",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":2
 
     },
    {
     
     "img1": "/images/products/swimwear_01.jpg",
     "img2": "/images/products/swimwear_02.jpg",
     "img3": "/images/products/swimwear_03.jpg",
     "img4": "/images/products/swimwear_04.jpg",
     "CategoryId": 4,
     "category": "Shorts",
     "price": 8400,
     "discount": 40,
     "name": "Bermuda de Baño",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":4
 
     },
    {
     
     "img1": "/images/products/biker_01.jpg",
     "img2": "/images/products/biker_02.jpg",
     "img3": "/images/products/biker_03.jpg",
     "img4": "/images/products/biker_04.jpg",
     "CategoryId": 4,
     "category": "Shorts",
     "price": 5500,
     "discount": 40,
     "name": "Biker",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":8
 
     },
    {
     
     "img1": "/images/products/short_01.jpg",
     "img2": "/images/products/short_02.jpg",
     "img3": "/images/products/short_03.jpg",
     "img4": "/images/products/short_04.jpg",
     "CategoryId": 4,
     "category": "Shorts",
     "price": 7300,
     "discount": 40,
     "name": "Bermuda",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":10
 
     },
    {
    
     "img1": "/images/products/hoddie_01.jpg",
     "img2": "/images/products/hoddie_02.jpg",
     "img3": "/images/products/hoddie_03.jpg",
     "img4": "/images/products/hoddie_04.jpg",
     "CategoryId": 4,
     "category": "Buzos",
     "price": 9500,
     "discount": 40,
     "name": "Hoddie",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":3
 
     },
    {
     
     "img1": "/images/products/sweatshirt_01.png",
     "img2": "/images/products/sweatshirt_02.png",
     "img3": "/images/products/sweatshirt_03.png",
     "img4": "/images/products/sweatshirt_04.png",
     "CategoryId": 4,
     "category": "Buzos",
     "price": 8200,
     "discount": 40,
     "name": "Buzo OverSize Unisex",
     "description":"convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla",
     "size": [
     "XS",
     "S",
     "L",
     "XL"
   ],
   "stock":6
 
     }
 
 
 ]

 products.forEach(product => {

    db.collection('products').add({
        ...product
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
 });