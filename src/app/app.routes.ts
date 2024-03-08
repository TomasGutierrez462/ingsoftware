import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AcercaDEComponent } from './pages/acerca-de/acerca-de.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { RegisterComponent } from './pages/Auth/register/register.component';
import { CiclosDeVidaComponent } from './pages/ciclos-de-vida/ciclos-de-vida.component';
import { SwebokComponent } from './pages/swebok/swebok.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';

export const routes: Routes = [
    {path: "home", component:InicioComponent},
    {path:"other", component:OtroComponent},
    {path:"about", component:AcercaDEComponent},
    {path:"lifecycle",component:CiclosDeVidaComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:RegisterComponent},
    {path:"swebok", component:SwebokComponent},
    {path:"requeriments", component:RequirementsComponent},
    {path:"",redirectTo:"home", pathMatch:"full"},
    {path:"**",component:ErrorComponent}
    
];
