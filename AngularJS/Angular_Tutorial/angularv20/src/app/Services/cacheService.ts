import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, HttpResponse<unknown>>();

  get(url: string): HttpResponse<unknown> | undefined {
    return this.cache.get(url);
  }

  set(url: string, response: HttpResponse<unknown>): void {
    this.cache.set(url, response);
  }

  clear(): void {
    this.cache.clear();
  }

  delete(url: string): void {
    this.cache.delete(url);
  }
}
