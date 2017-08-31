import { Component } from '@angular/core';
import { Model } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Model[];

  addArticle(title: HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title: ${title.value} and link:${link.value}`);
    this.articles.push(new Model(title.value,link.value,0) );
    title.value='';
    link.value='';
    return false;

    sortedArticles():Model[]{
      return this.articles.sort((a:Article, b:Article)=>b.votes-A.votes);
    }

  }

  constructor(){
    this.articles=[
      new Model('Angular 2','http://angular.io',3),
      new Model('Fullstack','http://fullstack.io',2),
      new Model('Angular Homepage','http://angular.io',1),
    ];
  }
}
