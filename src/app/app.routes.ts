import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AcercaDEComponent } from './componentes/acerca-de/acerca-de.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { RegisterComponent } from './pages/Auth/register/register.component';

export const routes: Routes = [
    {path: "home", component:InicioComponent},
    {path:"other", component:OtroComponent},
    {path:"about", component:AcercaDEComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:RegisterComponent},
    {path:"",redirectTo:"home", pathMatch:"full"},
    {path:"",component:ErrorComponent}
];
