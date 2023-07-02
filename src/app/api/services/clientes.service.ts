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
export class ClientesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `clientesListarClientesGet()` */
  static readonly ClientesListarClientesGetPath = '/Clientes/ListarClientes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesListarClientesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesListarClientesGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesListarClientesGetPath, 'get');
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
   * To access the full response (for headers, for example), `clientesListarClientesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesListarClientesGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.clientesListarClientesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `clientesRegistrarClientePost()` */
  static readonly ClientesRegistrarClientePostPath = '/Clientes/RegistrarCliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesRegistrarClientePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Plain$Response(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesRegistrarClientePostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
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
   * To access the full response (for headers, for example), `clientesRegistrarClientePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Plain(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.clientesRegistrarClientePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesRegistrarClientePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Json$Response(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesRegistrarClientePostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
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
   * To access the full response (for headers, for example), `clientesRegistrarClientePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesRegistrarClientePost$Json(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.clientesRegistrarClientePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `clientesEditarClientePut()` */
  static readonly ClientesEditarClientePutPath = '/Clientes/EditarCliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesEditarClientePut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePut$Plain$Response(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesEditarClientePutPath, 'put');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
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
   * To access the full response (for headers, for example), `clientesEditarClientePut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePut$Plain(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.clientesEditarClientePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `clientesEditarClientePut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePut$Json$Response(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ClientesService.ClientesEditarClientePutPath, 'put');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('apellido', params.apellido, {});
      rb.query('email', params.email, {});
      rb.query('telefono', params.telefono, {});
      rb.query('direccion', params.direccion, {});
      rb.query('contraseña', params['contraseña'], {});
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
   * To access the full response (for headers, for example), `clientesEditarClientePut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  clientesEditarClientePut$Json(
    params?: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      direccion?: string;
      'contraseña'?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.clientesEditarClientePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
