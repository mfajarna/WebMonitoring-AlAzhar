var firebaseConfig = {
  apiKey: "AIzaSyD6iWpE1wsEq3lfkTkvlOjVsywyv_2vaLw",
  authDomain: "abdimas2020-bd25f.firebaseapp.com",
  databaseURL: "https://abdimas2020-bd25f.firebaseio.com",
  projectId: "abdimas2020-bd25f",
  storageBucket: "abdimas2020-bd25f.appspot.com",
  messagingSenderId: "1040154742131",
  appId: "1:1040154742131:web:978acda73f8567a8720906",
  measurementId: "G-LLJ8NPKMEL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var valueA = 0,
  valueB = 0;

var nilaiDrumA = firebase.database().ref("Persen/drumA");
var nilaiDrumB = firebase.database().ref("Persen/drumB");

nilaiDrumA.on("value", function (dataSnap) {
  const dataDrumA = dataSnap.val();

  valueA = dataDrumA;
  console.log(dataDrumA);
  document.getElementById("drumA").innerText = dataDrumA;
});

nilaiDrumB.on("value", (snapData) => {
  const dataDrumB = snapData.val();

  valueB = dataDrumB;
  console.log(dataDrumB);
  document.getElementById("drumB").innerText = dataDrumB;
});
