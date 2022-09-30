import { Component, OnInit } from '@angular/core';
import { QueryService, QueryResponse } from '../query.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  schema: string = "";
  sql: string = "";
  output: string | Array<string> = "";

  error: string = "";
  info: string = "Please enter your schema!";
  table: Array<string> = [];

  infoClass = "";
  errorClass = "hidden";
  tableClass = "hidden";

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  runSchema() {
    this.schema = localStorage.getItem("schema")!;
    
    if (this.schema !== "") {
      this.queryService.sendQuery(this.schema, 'http://127.0.0.1:5001/' + localStorage.getItem("version")).subscribe(data => this.output = data.output)
      this.info = "Schema entered.";
      this.displayOutput();
    }
  }

  runSQL() {
    this.sql = localStorage.getItem("sql")!;
    if(this.sql !== "") {
      this.queryService.sendQuery(this.sql, 'http://127.0.0.1:5001/' + localStorage.getItem("version")).subscribe(data => this.output = data.output)
      
      this.displayOutput();
    }
  }

  displayOutput() {
    if (this.output === "") return;

    if (Array.isArray(this.output)) {
      
      // for(var i = 0; i < this.output.length; i++) {
      //   this.table += "<tr>";
      //   if (Array.isArray(this.output[i])) {
      //     for (var j = 0; j < this.output[i].length; j++) {

      //     }
      //   } else {
      //     this.table += "<td>" + this.output[i] + "</td>";
      //   }
      //   this.table += "</tr>";
      // }
      this.table = this.output;
      this.tableClass = "";
      this.errorClass = "hidden";
      this.infoClass = "hidden";
    } else {
      this.error = this.output;
      this.tableClass = "hidden";
      this.errorClass = "";
      this.infoClass = "hidden";
    }
  }

}
