import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from 'src/app/service/product.service';
import { CustomerService } from 'src/app/service/customer.service';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TriPipe } from './pipe/tri.pipe';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    TriPipe,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    CustomerService,
    // utilisé en parallède du @Inject()
    {provide: 'welcomeMsg', useValue: 'Bienvenue sur ce site !!'},
    // pour avoir le symbole € à la fin
    {provide: LOCALE_ID, useValue: navigator.language},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
