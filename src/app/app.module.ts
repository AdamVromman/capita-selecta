import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { CapitaSelectaComponent } from './capita-selecta/capita-selecta.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HistoryComponent } from './history/history.component';
import { DifferencesComponent } from './differences/differences.component';
import { PopularityComponent } from './popularity/popularity.component';
import { OverviewComponent } from './overview/overview.component';
import { ComponentsComponent } from './components/components.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { AngularAnimationsComponent } from './angular-animations/angular-animations.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { HistoryItemCardComponent } from './history-item-card/history-item-card.component';
import { HistoryItemNametagComponent } from './history-item-nametag/history-item-nametag.component';
import {FormsModule} from '@angular/forms';
import { LifecycleLoggerComponent } from './lifecycle-logger/lifecycle-logger.component';
import { MiscComponent } from './misc/misc.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CapitaSelectaComponent,
    IntroductionComponent,
    HistoryComponent,
    DifferencesComponent,
    PopularityComponent,
    OverviewComponent,
    ComponentsComponent,
    LifecycleComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
    LibrariesComponent,
    AngularMaterialComponent,
    AngularAnimationsComponent,
    HistoryItemComponent,
    HistoryItemCardComponent,
    HistoryItemNametagComponent,
    LifecycleLoggerComponent,
    MiscComponent,
    SourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
