import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  constructor() { }

  public heroes = [1,2,3,4,5,6,7,8];

  ngOnInit(): void {
  }

}
