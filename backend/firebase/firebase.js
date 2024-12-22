import admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import fs from "fs";

// Load the service account key dynamically
const serviceAccount = JSON.parse(
  fs.readFileSync(
    new URL("../config/firebase-service-account-key.json", import.meta.url)
  )
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://virtus-interior.appspot.com", // Replace with your Firebase Storage bucket
});

const bucket = getStorage().bucket();

export { bucket };
