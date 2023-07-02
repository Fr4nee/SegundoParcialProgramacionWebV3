import { Component, OnInit } from '@angular/core';
import { CategoriasService, ProductosService } from 'src/app/api/services';
import { Producto } from 'src/app/api/models/productos-model';
import { ProductosServicioService } from 'src/app/Servicios/productos-servicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/api/models/categorias-models';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {	
	categorias: Categoria[] = [];
	add!: FormGroup;
	dataSource: Producto[] = [];
	displayedColumns: string[] = ['id', 'nombre', 'precio', 'imagen', 'categoria', 'stock', 'descripcion', 'botones'];
	producto: Producto = {
		id: 0,
		nombre: '',
		descripcion: '',
		precio: 0,
		stock: 0,
		categoria: '',
		imagen: '',
	}

	abierto: boolean = true
	accion: string = ''
	idAEditar?: number = 0

	constructor(
		private prod: ProductosService,
		public prodServ: ProductosServicioService,
		public snackBar: MatSnackBar,		
		public catServ: CategoriasService,
	) {
		this.ListarProductos()
	}
	ngOnInit() {
		this.add = new FormGroup({
			nombre: new FormControl('', Validators.required),
			descripcion: new FormControl('', Validators.required),
			precio: new FormControl('', Validators.required),
			stock: new FormControl('', Validators.required),
			categoria: new FormControl('', Validators.required),
			imagen: new FormControl('', Validators.required),
		});

		this.catServ.listarCategoriasGet$Response()
		.subscribe((res) => {
			console.log(res)
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let cats = JSON.parse(jsonString)[0];
			this.categorias = cats;
			console.log(this.categorias)
		})
	}

	AbroForm(accion: string, id?: number) {
		this.accion = accion
		this.abierto = !this.abierto

		switch(accion){
			case 'nuevo':
			break;
			case 'editar':
				this.idAEditar = id
				this.DevolverProducto(id!)
			break;
		}
	}

	ListarProductos() {
		this.prod.productosListarProductosGet$Response()
		.subscribe((res) => {
			console.log(res)
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let productos = JSON.parse(jsonString)[0];
			this.dataSource = productos;
			console.log(this.dataSource)
		})
	}

	DevolverProducto(id: number) {
		this.prod.productosDevolverProductoGet$Response({
			id: id 
		}).subscribe((res) => {
			console.log(res)
			let result: any = res.body;
			let jsonParsed = JSON.parse(result)
			let jsonString = JSON.stringify(jsonParsed)
			let producto = JSON.parse(jsonString)[0][0];
			console.log(producto) 
			this.add.patchValue(producto)
		})
	}

	AgregarProducto() {
		this.prod.productosCargarProductoPost$Json$Response({
			nombre: this.add.controls['nombre'].value,
			descripcion: this.add.controls['descripcion'].value,
			precio: this.add.controls['precio'].value,
			stock: this.add.controls['stock'].value,
			categoria: this.add.controls['categoria'].value,
			imagen: this.add.controls['imagen'].value,
		}).subscribe((res) => {
			if (res.status === 200) {
				this.snackBar.open('Producto agregado correctamente', 'Cerrar', {
					duration: 3000
				});
			} else {
				this.snackBar.open('Error al agregar el producto', 'Cerrar', {
					duration: 3000
				});
			}
		})
	}

	EditarProducto() {
		this.prod.productosEditarProductoPut$Json$Response({
			id: this.idAEditar,
			nombre: this.add.controls['nombre'].value,
			descripcion: this.add.controls['descripcion'].value,
			precio: this.add.controls['precio'].value,
			stock: this.add.controls['stock'].value,
			categoria: this.add.controls['categoria'].value,
			imagen: this.add.controls['imagen'].value,
		}).subscribe((res) => {
			if (res.status === 200) {
				this.snackBar.open('Producto agregado correctamente', 'Cerrar', {
					duration: 3000
				});
			} else {
				this.snackBar.open('Error al agregar el producto', 'Cerrar', {
					duration: 3000
				});
			}
		})
		this.idAEditar = 0
	}

	EliminarProducto(element: number) {
		this.prod.productosDeleteProductoDelete$Json$Response({
			id: element
		}).subscribe((res) => {
			this.snackBar.open('Producto eliminado correctamente', 'Cerrar', {
				duration: 3000
			})
			this.ListarProductos()
		})
	}

}

