import admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import serviceAccount from "../config/virtus-interior-firebase-adminsdk-65yo0-380f3a35b3.json"; // Replace with the path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://virtus-interior.appspot.com", // Replace with your Firebase Storage bucket
});

const bucket = getStorage().bucket();

export { bucket };
