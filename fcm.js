const SERVER_KEY =
  "AAAAHGitbNU:APA91bFyWScHkbteBuuPDUSlZgxo-HKKvy8LU6F4Iy1Wwlr4rQ6qtlO6ak701XsGgs-snQTgoqnOsZES_HYKgnrTIo8gEEC6m9FxILoR2Oxi96OIss6r1uz_GgFU9fKnCgB_OGodwnno";
const DEVICE_TOKEN =
  "f-s30mbuR42aKkVav7cMwY:APA91bGURSZZ6929j7JCgpDySBxt0RbPgFWNa_kqXfWSAvTajItfvaYAKHu5ti9xRmsWpxaYMhL2UGWbozoeAd581kQgelZDBdv54FzXqqC8osmyVVUX00RgTTA1oL9VesgaBOFRQwnf";

var FCM = require("fcm-node");
var fcm = new FCM(SERVER_KEY);

var s1AlertMessage = {
  to: DEVICE_TOKEN,
  notification: {
    title: "S1 Message",
    body: "S1 Message from NodeJS server",
  },
  android: {
    notification: {
      channel_id: "alert-channel",
    },
  },
  data: {
    route: "/s1", //would be '/s2', '/s3'
  },
};

var normalAlertMessage = {
  to: DEVICE_TOKEN,
  notification: {
    title: "S1 Message",
    body: "S1 Message from NodeJS server",
  },
  android: {
    notification: {
      channel_id: "default-channel",
    },
  },
  data: {
    route: "/",
  },
};

//send notification
const sendNotification = (message) => {
  fcm.send(message, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!" + err);
      console.log("Respponse:! " + response);
    } else {
      console.log("Successfully sent with response: ", response);
    }
  });
};

//trigger normal notification
sendNotification(normalAlertMessage);

// trigger S1
// sendNotification(s1AlertMessage);
