import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayProductPipe } from './pipes/display-product.pipe';
import { PricePipe } from './pipes/price.pipe';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeNL);

@NgModule({
  declarations: [AppComponent, DisplayProductPipe, PricePipe, ProductFormComponent, ProductCardsComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [CurrencyPipe, { provide: LOCALE_ID, useValue: 'nl-NL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
