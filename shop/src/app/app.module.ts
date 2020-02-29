import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CardModule, DropdownModule, MenubarModule} from 'primeng';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {BasketComponent} from './pages/basket/basket.component';
import {CatalogListComponent} from './components/catalog-list/catalog-list.component';
import {CatalogItemComponent} from './components/catalog-item/catalog-item.component';
import {CatalogRecommendedComponent} from './components/catalog-recommended/catalog-recommended.component';
import {ButtonToCartComponent} from './components/button-to-cart/button-to-cart.component';
import {CountProductComponent} from './components/count-product/count-product.component';
import {TopBasketComponent} from './components/top-basket/top-basket.component';
import {RegionComponent} from './components/region/region.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    BasketComponent,
    CatalogListComponent,
    CatalogItemComponent,
    CatalogRecommendedComponent,
    ButtonToCartComponent,
    CountProductComponent,
    TopBasketComponent,
    RegionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
