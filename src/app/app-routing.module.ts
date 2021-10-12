import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'acerca',component: AcercaComponent},
  {path: 'tecnologias',component: TecnologiasComponent},
  {path: 'proyectos',component: ProyectosComponent},
  {path: '**' ,component: AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
