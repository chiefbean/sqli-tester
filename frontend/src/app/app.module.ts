import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';
import { SchemaComponent } from './schema/schema.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { WindowRef } from './WindowRef';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    InputComponent,
    SchemaComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CodemirrorModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
