import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas:[NO_ERRORS_SCHEMA], 
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,UiModule,UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }