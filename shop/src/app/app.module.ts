import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule, CardModule, DropdownModule, MenubarModule, OverlayPanelModule} from 'primeng';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {BasketComponent} from './pages/basket/basket.component';
import {CatalogListComponent} from './components/catalog-list/catalog-list.component';
import {CatalogRecommendedComponent} from './components/catalog-recommended/catalog-recommended.component';
import {ButtonToCartComponent} from './components/button-to-cart/button-to-cart.component';
import {CountProductComponent} from './components/count-product/count-product.component';
import {TopBasketComponent} from './components/top-basket/top-basket.component';
import {RegionComponent} from './components/region/region.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { PriceComponent } from './components/price/price.component';
import { SmallBasketComponent } from './components/small-basket/small-basket.component';
import { SmallBasketListComponent } from './components/small-basket-list/small-basket-list.component';
import { SmallBasketItemComponent } from './components/small-basket-item/small-basket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    BasketComponent,
    CatalogListComponent,
    CatalogRecommendedComponent,
    ButtonToCartComponent,
    CountProductComponent,
    TopBasketComponent,
    RegionComponent,
    ProductComponent,
    PriceComponent,
    SmallBasketComponent,
    SmallBasketListComponent,
    SmallBasketItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    FormsModule,
    DropdownModule,
    OverlayPanelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
