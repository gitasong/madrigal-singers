import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SingersComponent } from './singers/singers.component';
import { AboutComponent } from './about/about.component';
import { SingerDetailComponent } from './singer-detail/singer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SingersComponent,
    AboutComponent,
    SingerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
