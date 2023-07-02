/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';


@Injectable({ providedIn: 'root' })
export class CategoriasService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listarCategoriasGet()` */
  static readonly ListarCategoriasGetPath = '/ListarCategorias';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listarCategoriasGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarCategoriasGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.ListarCategoriasGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listarCategoriasGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listarCategoriasGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.listarCategoriasGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `devolverCategoriaGet()` */
  static readonly DevolverCategoriaGetPath = '/DevolverCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `devolverCategoriaGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  devolverCategoriaGet$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.DevolverCategoriaGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `devolverCategoriaGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  devolverCategoriaGet(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.devolverCategoriaGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `cargarCategoriaPost()` */
  static readonly CargarCategoriaPostPath = '/CargarCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargarCategoriaPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Plain$Response(
    params?: {
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CargarCategoriaPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cargarCategoriaPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Plain(
    params?: {
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.cargarCategoriaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargarCategoriaPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Json$Response(
    params?: {
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CargarCategoriaPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cargarCategoriaPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargarCategoriaPost$Json(
    params?: {
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.cargarCategoriaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `editarCategoriaPut()` */
  static readonly EditarCategoriaPutPath = '/EditarCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarCategoriaPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPut$Plain$Response(
    params?: {
      id?: number;
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EditarCategoriaPutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarCategoriaPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPut$Plain(
    params?: {
      id?: number;
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.editarCategoriaPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editarCategoriaPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPut$Json$Response(
    params?: {
      id?: number;
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EditarCategoriaPutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('nombre', params.nombre, {});
      rb.query('descripcion', params.descripcion, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `editarCategoriaPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  editarCategoriaPut$Json(
    params?: {
      id?: number;
      nombre?: string;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.editarCategoriaPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `eliminarCategoriaDelete()` */
  static readonly EliminarCategoriaDeletePath = '/EliminarCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarCategoriaDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaDelete$Plain$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EliminarCategoriaDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarCategoriaDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaDelete$Plain(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.eliminarCategoriaDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eliminarCategoriaDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaDelete$Json$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, CategoriasService.EliminarCategoriaDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `eliminarCategoriaDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eliminarCategoriaDelete$Json(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.eliminarCategoriaDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
