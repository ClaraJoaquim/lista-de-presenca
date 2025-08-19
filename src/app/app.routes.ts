import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { BuscaPresencaComponent } from './shared/busca-presenca/busca-presenca.component';
import { LoginComponent } from './shared/login/login.component';
import { ImporteChamadaComponent } from './admin/importe-chamada/importe-chamada.component';
import { ListaChamadaComponent } from './shared/lista-chamada/lista-chamada.component';
import { ListaGeralPresencaComponent } from './shared/lista-geral-presenca/lista-geral-presenca.component';
import { RegistroComponent } from './admin/registro/registro.component';
import { RelacaoServidoresComponent } from './admin/relacao-servidores/relacao-servidores.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


export const routes: Routes = [
    { path: 'admin', component: AdminComponent},
    { path: 'busca-presenca', component: BuscaPresencaComponent},
    { path: 'importe-chamada', component: ImporteChamadaComponent},
    { path: 'lista-chamada', component: ListaChamadaComponent},
    { path: 'lista-geral', component: ListaGeralPresencaComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'relacao-servidores', component: RelacaoServidoresComponent},
    { path: 'nav', component: NavbarComponent}, // Assuming NavComponent is defined elsewhere
    { path: '', redirectTo: 'login', pathMatch: 'full'},
];
