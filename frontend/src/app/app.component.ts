import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  version = "SQLite";

  ngOnInit() {
    localStorage.setItem("version", this.version.toLowerCase());
  }

  updateDB() {
    localStorage.setItem("version", this.version.toLowerCase());
  }
}
