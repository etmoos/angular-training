import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

lastUpdate = new Promise(
  (resolve)=> {
    var date = new Date();
    setTimeout(
      ()=> {
        resolve(date);
      }, 2000
    );
  }
);

//lastUpdate = new Date();

posts = [
  {
    title: "Mon premier post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    loveIts: 0,
    created_at: this.lastUpdate
  },
  {
    title: "Mon deuxième post",
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
    loveIts: 0,
    created_at: this.lastUpdate
  },
  {
    title: "Encore un post",
    content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire",
    loveIts: 0,
    created_at: this.lastUpdate
  }

]; 

/*appareils = [
  {
    name: "Machine à laver",
    status : 'éteint'
  },
  {
    name: "Télévision",
    status : 'éteint'
  },
  {
    name: "Ordinateur",
    status : 'éteint'
  }

];*/

  //isAuth = false;

  /*constructor() { 

    //this.propTest = true;

    setTimeout(
      () => {
        this.isAuth = !this.isAuth;
      }, 4000
    );

  }*/

  /*onAllumer(){

    for(var i = 0; i<this.appareils.length; i++){

      this.appareils[i].status = 'allumé';

    }

  }*/

  /*onEteindre(){

    for(var i = 0; i<this.appareils.length; i++){

      this.appareils[i].status = 'éteint';

    }

  }*/

}
