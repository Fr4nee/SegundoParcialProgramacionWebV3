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
export class ProductosService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productosListarProductosGet()` */
  static readonly ProductosListarProductosGetPath = '/Productos/ListarProductos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosListarProductosGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosListarProductosGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosListarProductosGetPath, 'get');
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
   * To access the full response (for headers, for example), `productosListarProductosGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosListarProductosGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.productosListarProductosGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `productosCargarProductoPost()` */
  static readonly ProductosCargarProductoPostPath = '/Productos/CargarProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosCargarProductoPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Plain$Response(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosCargarProductoPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
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
   * To access the full response (for headers, for example), `productosCargarProductoPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Plain(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.productosCargarProductoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosCargarProductoPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Json$Response(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosCargarProductoPostPath, 'post');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
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
   * To access the full response (for headers, for example), `productosCargarProductoPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosCargarProductoPost$Json(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.productosCargarProductoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `productosEditarProductoPut()` */
  static readonly ProductosEditarProductoPutPath = '/Productos/EditarProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosEditarProductoPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPut$Plain$Response(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosEditarProductoPutPath, 'put');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `productosEditarProductoPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPut$Plain(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.productosEditarProductoPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosEditarProductoPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPut$Json$Response(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosEditarProductoPutPath, 'put');
    if (params) {
      rb.query('nombre', params.nombre, {});
      rb.query('precio', params.precio, {});
      rb.query('imagen', params.imagen, {});
      rb.query('categoria', params.categoria, {});
      rb.query('stock', params.stock, {});
      rb.query('descripcion', params.descripcion, {});
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
   * To access the full response (for headers, for example), `productosEditarProductoPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosEditarProductoPut$Json(
    params?: {
      nombre?: string;
      precio?: number;
      imagen?: string;
      categoria?: string;
      stock?: number;
      descripcion?: string;
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.productosEditarProductoPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `productosDeleteProductoDelete()` */
  static readonly ProductosDeleteProductoDeletePath = '/Productos/DeleteProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDeleteProductoDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoDelete$Plain$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDeleteProductoDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `productosDeleteProductoDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoDelete$Plain(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.productosDeleteProductoDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDeleteProductoDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoDelete$Json$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDeleteProductoDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `productosDeleteProductoDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoDelete$Json(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<string> {
    return this.productosDeleteProductoDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `productosDevolverProductoGet()` */
  static readonly ProductosDevolverProductoGetPath = '/Productos/DevolverProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDevolverProductoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDevolverProductoGet$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDevolverProductoGetPath, 'get');
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
   * To access the full response (for headers, for example), `productosDevolverProductoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDevolverProductoGet(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.productosDevolverProductoGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
