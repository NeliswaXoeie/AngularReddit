import { Component, OnInit,Input } from '@angular/core';
import { Model } from "./model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article:Model;


  constructor() { 
 
  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown():boolean{
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }

}
