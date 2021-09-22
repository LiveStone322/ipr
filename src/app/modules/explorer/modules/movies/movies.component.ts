import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  items = new Array(12).fill('Star Wars').map((m) => `${m}  ${Math.trunc(Math.random() * 9) + 1}`);

  constructor() {}

  ngOnInit(): void {}
}
