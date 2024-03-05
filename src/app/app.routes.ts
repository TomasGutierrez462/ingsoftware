import { Routes } from '@angular/router';
import path from 'path';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AcercaDEComponent } from './componentes/acerca-de/acerca-de.component';

export const routes: Routes = [
    {path: "home", component:InicioComponent},
    {path:"other", component:OtroComponent},
    {path:"about", component:AcercaDEComponent},
    {path:"",redirectTo:"home", pathMatch:"full"},
    {path:"",component:ErrorComponent}
];
