import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import { SyntaxService } from '../syntax.service';
import { Token } from '../syntax.service';
import { WindowRef } from './../WindowRef';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() name: string = "";
  value: string = "";
  tokens: Array<Token> = [];

  constructor(private syntax: SyntaxService) { }

  ngOnInit(): void {
    localStorage.setItem(this.name, '');
  }

  doKeyUp() {
    localStorage.setItem(this.name, this.value);
  }
}
