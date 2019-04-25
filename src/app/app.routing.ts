import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
 
// appRoutes é do tipo Routes
// { path: '', pathMatch: 'full', component: HomeComponent } -> root do projeto
      // component: HomeComponent -> qual component deve ir pro root      
// { path: 'not-found', component: NotFoundComponent }
      // path: 'not-found' -> url corresponde ao component:
          // component: NotFoundComponent  
// { path: '**', redirectTo: 'not-found' }
      // path: '**' -> quando não encontrar a url, redirecione para a url 'not-found'      
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];
 
// rounting do tipo 'ModuleWithProviders' recebe RouterModule.forRoot(appRoutes)
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);