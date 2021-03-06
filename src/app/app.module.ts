import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { PayWithBtcComponent }   from './pay-with-btc.component';
import { CoinsComponent }       from './coins.component';
import { CoinDetailComponent }  from './coin-detail.component';
import { CoinService }          from './coin.service';
import { PayWithFiatComponent }   from './pay-with-fiat.component';
import { TransactionDetailComponent }   from './transaction.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PayWithBtcComponent,
    PayWithFiatComponent,
    CoinDetailComponent,
    CoinsComponent,
    TransactionDetailComponent
  ],
  providers: [ CoinService, {provide: APP_BASE_HREF, useValue : '/' } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
