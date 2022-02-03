
import app from './app.js';

import navbarComponent from './components/NavbarComponent.js'
import cartComponent from './components/CartComponent.js'
import productComponent from './components/ProductComponent.js'
import reviewZoneComponent from './components/ReviewZoneComponent.js'
import formulaireComponent from './components/FormulaireComponent.js'
import affichageComponent from './components/AffichageComponent.js'
// Vue application
const myApp = Vue.createApp(app);

// Components

myApp.component('navbar-component', navbarComponent);

myApp.component('cart-component', cartComponent);

myApp.component('product-component', productComponent);
myApp.component('formulaire-component', formulaireComponent);
myApp.component('affichage-component', affichageComponent);
myApp.component('reviewzone-component', reviewZoneComponent);


// Mount the application

myApp.mount('#app');
