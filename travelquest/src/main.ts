import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => console.error(error));
