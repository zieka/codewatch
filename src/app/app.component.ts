import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // Initialize Firebase
    let config = {
      apiKey: 'AIzaSyAcyKj4sATgCl2cOP4FqtK4LRV-MfQ9Zqk',
      authDomain: 'codewatch-56eb1.firebaseapp.com',
      databaseURL: 'https://codewatch-56eb1.firebaseio.com',
      storageBucket: 'codewatch-56eb1.appspot.com',
      messagingSenderId: '350421315980'
    };
    initializeApp(config);

    let root = database().ref('messages');

    root.on('value', function(snap) {
      console.log(snap.key, snap.val());
    });
  }
}
