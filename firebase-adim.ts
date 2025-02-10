import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Replace this with your correct service key path
const service_key= `require("@/service_key.json")`;

// Initialize Firebase app
let app;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(service_key),
    });
} else {
    app = getApp();
}

// Optionally, you can get Firestore
const admindb = getFirestore(app);

export { app as adminApp, admindb };