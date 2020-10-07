const {
    VUE_APP_FB_APIKEY,
    VUE_APP_FB_AUTH_DOMAIN,
    VUE_APP_FB_DATABASE_URL,
    VUE_APP_FB_PROJECT_ID,
    VUE_APP_FB_STORAGE_BUCKET,
    VUE_APP_FB_MESSAGING_SENDER_ID,
    VUE_APP_FB_APP_ID
} = process.env;

export const config = {
  firebaseConfig: {
    apiKey: `${VUE_APP_FB_APIKEY}` || "",
    authDomain: `${VUE_APP_FB_AUTH_DOMAIN}` || "",
    databaseURL:
      `${VUE_APP_FB_DATABASE_URL}` || "",
    projectId: `${VUE_APP_FB_PROJECT_ID}` || "",
    storageBucket: `${VUE_APP_FB_STORAGE_BUCKET}` || "",
    messagingSenderId: `${VUE_APP_FB_MESSAGING_SENDER_ID}` || "",
    appId: `${VUE_APP_FB_APP_ID}` || ""
  }
};
