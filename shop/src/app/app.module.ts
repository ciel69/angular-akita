import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CardModule, MenubarModule} from 'primeng';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {BasketComponent} from './pages/basket/basket.component';
import {CatalogListComponent} from './components/catalog-list/catalog-list.component';
import {CatalogItemComponent} from './components/catalog-item/catalog-item.component';
import {CatalogRecommendedComponent} from './components/catalog-recommended/catalog-recommended.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    BasketComponent,
    CatalogListComponent,
    CatalogItemComponent,
    CatalogRecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
