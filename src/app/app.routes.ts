import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OtroComponent } from './componentes/otro/otro.component';
import { ErrorComponent } from './componentes/error/error.component';
<<<<<<< HEAD
import { AcercaDEComponent } from './componentes/acerca-de/acerca-de.component';
import { CiclosDeVidaComponent } from './componentes/ciclos-de-vida/ciclos-de-vida.component';
=======
import { AcercaDEComponent } from './pages/acerca-de/acerca-de.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { RegisterComponent } from './pages/Auth/register/register.component';
>>>>>>> 87cc41a396323b07c33956442c7002e34a476447

export const routes: Routes = [
    {path: "home", component:InicioComponent},
    {path:"other", component:OtroComponent},
    {path:"about", component:AcercaDEComponent},
<<<<<<< HEAD
    {path:"livecicle",component:CiclosDeVidaComponent},
=======
    {path:"login", component:LoginComponent},
    {path:"signup", component:RegisterComponent},
>>>>>>> 87cc41a396323b07c33956442c7002e34a476447
    {path:"",redirectTo:"home", pathMatch:"full"},
    {path:"",component:ErrorComponent}
    
];
