import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceImagenService } from './service-imagen.service';


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
