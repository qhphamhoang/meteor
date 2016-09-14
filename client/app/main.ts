// import { bootstrap } from 'angular2-meteor-auto-bootstrap'; 
// import { AppComponent } from './app.component';
 
// bootstrap(AppComponent);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);