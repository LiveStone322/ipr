import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreComponent } from './components/core/core.component';
import { MockRequestInterceptor } from './interceptors/mock-request-interceptor/mock-request-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardModule } from './shared/modules/card/card.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CoreComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CardModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
