import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AngularAnimationsComponent } from './angular-animations/angular-animations.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { LibrariesComponent } from './libraries/libraries.component';

const routes: Routes = [
  {path: '', component: CapitaSelectaComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'introduction/history', component: HistoryComponent},
  {path: 'introduction/differences', component: DifferencesComponent},
  {path: 'introduction/popularity', component: PopularityComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'overview/components', component: ComponentsComponent},
  {path: 'overview/lifecycle', component: LifecycleComponent},
  {path: 'overview/directives', component: DirectivesComponent},
  {path: 'overview/dependency-injection', component: DependencyInjectionComponent},
  {path: 'libraries', component: LibrariesComponent},
  {path: 'libraries/angular-material', component: AngularMaterialComponent},
  {path: 'libraries/angular-animations', component: AngularAnimationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
