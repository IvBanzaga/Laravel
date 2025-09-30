import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

/* TODO: Punto de entrada principal que arranca la aplicación Angular con la configuración */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
