"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = __importStar(require("firebase"));
var config = {
    apiKey: "AIzaSyARrvUNhxTQ-bZ8iszJAm17q505TygAYbo",
    authDomain: "firestore-playground-7c2f4.firebaseapp.com",
    databaseURL: "https://firestore-playground-7c2f4.firebaseio.com",
    projectId: "firestore-playground-7c2f4",
    storageBucket: "firestore-playground-7c2f4.appspot.com",
    messagingSenderId: "372415511067"
};
firebase.initializeApp(config);
var db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
var citiesRef = db.collection("cities");
citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000
});
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000
});
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000
});
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000
});
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000
});
