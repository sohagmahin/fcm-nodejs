// const { credential } = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");
const serviceAccount = require("./test-firebase-adminsdk-key.json");
const xioamToken =
  "ddrjfkFCQbKhtUvSIpcBoK:APA91bFO1b8iMXU9d4FnU_56QzIjao_77jNOl-bYGW10tDpgUuMY81tK1T7GtCgY_uWnK0KAe8C343o069gH3n2AC--l41YxjytoexLHAtNsTvMSpMOrvGT2CnLJ7Fq8H9Ga6ODQ2ajh";

const emulatorToken =
  "dAORULc2St6IkdWGqT07Nc:APA91bHTc6ocm3vrtWBY20DGJ96piHmKQCFtdHp96QWKlYcvV5vtpGl0R1kyaPK3LIxgE2yGGSLDIUHBpe2bvawNf64mippCvd8WXK7nUkTvRCU_i-8787GdKj2CYkdgWns8RbEGF19J";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const sendPushNotification = async () => {
  await admin.messaging().sendMulticast({
    // tokens: ["token_1", "token_2"],
    tokens: [xioamToken, emulatorToken],
    notification: {
      title: "Weather Warning!",
      body: "A new weather warning has been issued for your location.",
      imageUrl: "https://my-cdn.com/extreme-weather.png",
    },
    data: {
      route: "/voicecall",
    },
    android: {
      notification: {
        channelId: "alert",
      },
      priority: "high",
    },
  });
};

sendPushNotification();

console.log("send notification..");
