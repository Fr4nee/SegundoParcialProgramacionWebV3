import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
	title = 'SegundoParcialProgramacionWebV3';
	showFiller = false;
	mobileQuery: MediaQueryList;

	fillerNav = ['Categorias', 'Productos','Clientes'];

	private _mobileQueryListener: () => void;

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		media: MediaMatcher,
		private router: Router
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	Redirect(url: string) {
		switch (url) {
			case 'Productos':
				this.router.navigate(['Productos'])
			break;
			case 'Categorias':
				this.router.navigate(['Categorias'])
			break;			
			case 'Clientes':
				this.router.navigate(['Clientes'])
			break;
		break;
		}
	}

	LogOut() {
		localStorage.clear()
		this.router.navigate(['/'])
	}

	ReturnHome() {
		this.router.navigate(['/Ecommerce/PaginaPrincipal'])
	}
}
