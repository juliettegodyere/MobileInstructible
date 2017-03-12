import { NgModule }                from '@angular/core';
import { IonicApp, IonicModule,  } from 'ionic-angular';

import { MyApp }                   from './app.component';
import { Reddits }                 from '../providers/reddits';

import { AboutPage }               from '../pages/about/about';
import { RedditsPage }             from '../pages/reddits/reddits';
import { SettingsPage }            from '../pages/settings/settings';
import { TabsPage }                from '../pages/tabs/tabs';
import { DetailsPage }             from '../pages/details/details';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RedditsPage,
    SettingsPage,
    DetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RedditsPage,
    SettingsPage,
    DetailsPage,
    TabsPage
  ],
  providers: [Reddits]
})
export class AppModule {}
