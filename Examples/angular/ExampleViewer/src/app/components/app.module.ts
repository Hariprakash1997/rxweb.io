import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { APP_LAZY_ROUTING } from './start/app.lazy.routing';

import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { NgAisModule } from 'angular-instantsearch';


import { environment } from 'src/environments/environment';

import { RxFormsModule, RxValidation } from '@rx/forms';
import { RxViewModule, RxViewServiceModule } from '@rx/view';
import { RxStorageModule } from '@rx/storage';
import { RxSecurityModule } from "@rx/security";

import { AppComponent } from './start/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormConfigComponent } from './reactive-form-config/reactive-form-config.component';
import { PromptUpdateService } from '../services/prompt-update.service';
import { LogUpdateService } from '../services/log-update.service';
import { CheckForUpdateService } from '../services/check-for-update.service';
import { FooterSharedModule } from './shared/footer/footer-shared.module';

import { GettingStartedComponent } from './getting-started/getting-started.component';
import { DisqusSharedModule } from './shared/disqus/disqus-shared.module';
import { RightSideBarSharedModule } from './shared/right-sidebar/right-sidebar-shared.module';
import { HomeComponent } from './home/home.component';
import { PipeCommonModule } from '../pipes';
import { ApplicationBroadcaster } from '@rx/core';
import { APP_VERSION } from '@rx/http';
import { ApplicationRequestHeaders } from '../domain/application-request-headers';
import { ApplicationResponse } from '../domain/application-response';
import { BasicExamplesExtendedModule } from 'src/assets/examples/reactive-form-validators/basic-examples/basic-examples-extended.module';
export const API_HOST_URI: string = 'API_URL';


import { TextPageModule } from './text-page/text-page.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)


 

@NgModule({
  declarations: [
      AppComponent, DashboardComponent, GettingStartedComponent, ReactiveFormConfigComponent, HomeComponent,],
  imports: [BrowserModule, FormsModule, RxReactiveFormsModule, ReactiveFormsModule, HttpModule, HttpClientModule, RouterModule, APP_LAZY_ROUTING, RightSideBarSharedModule, DisqusSharedModule, BasicExamplesExtendedModule, FooterSharedModule, PipeCommonModule, TextPageModule,
    HighlightModule.forRoot({ theme: 'default' }), ClipboardModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), NgAisModule.forRoot(),
    BrowserAnimationsModule,  
    RxSecurityModule, CommonModule,
    RxFormsModule, RxViewModule, RxStorageModule, RxViewServiceModule,

  ],
  providers: [RxValidation, ApplicationBroadcaster,
    {
      provide: API_HOST_URI,
      useValue: 'https://rxweb.io/'
    }
    ,{ provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: APP_VERSION,
      useValue: environment.appVersion
    },
    { provide: 'RequestHeaders', useClass: ApplicationRequestHeaders },
    { provide: 'ResponseResult', useClass: ApplicationResponse },
    ApplicationBroadcaster, PromptUpdateService, LogUpdateService, CheckForUpdateService, 
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
