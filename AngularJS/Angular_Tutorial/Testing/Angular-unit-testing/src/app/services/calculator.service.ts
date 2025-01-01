import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
   private logger:LoggerService
  ) { }

  add(n1: number, n2:number) {
    this.logger.log(`Adding ${n1} and ${n2}`);
    return n1 + n2;
  }

  multiply(n1: number, n2:number) {
    this.logger.log(`multiplying ${n1} and ${n2}`);
    return n1 * n2;
  }
}
