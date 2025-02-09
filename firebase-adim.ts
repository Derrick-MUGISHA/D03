import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Replace this with your correct service key path
const serviceKey = `require("@/service_key.json")`;

// Initialize Firebase app
let app;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApp();
}

// Optionally, you can get Firestore
const admindb = getFirestore(app);

export { app as adminApp, admindb };