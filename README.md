# MAS
Project for "Modelação e Análise de Sistemas", 2022-2023.

## Used frameworks
- [Bootstrap 5.2.3](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Font Awesome 6.2.0 Pro](https://fa-v6.hung1001.com/)
- [JQuery 3.6.1](https://jquery.com/)
- [JQuery UI 1.13.2](https://jquery.com/)
- [Knockout.js 3.5.1](https://knockoutjs.com/)

## Color palette
Color                  | Hex
-----------------------|--------
Secondary blue         | #0099FF
White                  | #FFFFFF
Off white              | #F8F8F8
Main gray              | #555555
Light gray             | #CCCCCC
Middle gray (for text) | #666666
Dark gray (for text)   | #333333

## Common code between pages
```html
<head>
  <title></title>
  <meta charset="utf-8">
  
  <!-- Responsive design & PWA -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="application-name" content="Fitness Hut">

  <!-- External CDNs -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    body, * {font-family: 'Open Sans', sans-serif;}
    h1, h2, h3 {
      font-family: 'Lato', sans-serif;
      font-weight: bold;
    }
    .primary-blue {color: #0066CC}
    .secondary-blue {color: #0099FF}
    /* White is already defined in Bootstrap 5 */
    .off-white {color: #F8F8F8}
    .main-gray {color: #555555}
    .dark-gray {color: #333333} /* For text */
    .middle-gray {color: #666666} /* For text */
    .light-gray {color: #CCCCCC}
  </style>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.js"></script>
</body>
```

## Firebase code
```html
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzB7wjIXw6n6M4d7OdPuGBb870LZ33MmM",
    authDomain: "fitness-hut-81dd9.firebaseapp.com",
    projectId: "fitness-hut-81dd9",
    storageBucket: "fitness-hut-81dd9.appspot.com",
    messagingSenderId: "640669419192",
    appId: "1:640669419192:web:977c700ab966c4a6b8964d",
    measurementId: "G-779DG0WW5J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```