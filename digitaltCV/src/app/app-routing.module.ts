import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './components/cv/cv.component';
import { InfoComponent } from './components/info/info.component';
import { MailComponent } from './components/mail/mail.component';

const routes: Routes = [
  {path:'', component: InfoComponent},
  {path:'cv', component: CVComponent},
  {path:'mail', component: MailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
