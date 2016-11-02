import { AuthMethods, AuthProviders } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAcyKj4sATgCl2cOP4FqtK4LRV-MfQ9Zqk',
  authDomain: 'codewatch-56eb1.firebaseapp.com',
  databaseURL: 'https://codewatch-56eb1.firebaseio.com',
  storageBucket: 'codewatch-56eb1.appspot.com',
  messagingSenderId: '350421315980'
};



export const authConfig = {
  ovider: AuthProviders.Password,
  thod: AuthMethods.Password
};
