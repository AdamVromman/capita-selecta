import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitaSelectaComponent } from './capita-selecta/capita-selecta.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path: '', component: CapitaSelectaComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'introduction/history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
