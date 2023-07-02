import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { CategoriasComponent } from './Componentes/categorias/categorias.component';
import { ClientesComponent } from './Componentes/clientes/clientes.component';

const routes: Routes = [
	{
		path: 'Categorias',
		component: CategoriasComponent,
	},
	{
		path: 'Productos',
		component: ProductosComponent
	},
	{
		path: 'Clientes',
		component: ClientesComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
