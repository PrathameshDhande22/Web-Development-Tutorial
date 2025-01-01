import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
// importing the testbed from the angular
import { TestBed } from '@angular/core/testing';

// without using dependency injection
/* describe('CalculatorService', () => {
  // creating the first test case
  it('Should Add Two Number', () => {
    // creating the instance of the calculator service
    const calservice = new CalculatorService();

    // calling the method of the service
    const result = calservice.add(1, 2);
    // Assertion
    // What do we expect from these service
    expect(result).toEqual(3);
  });

  // creating the second test case
  it('Should Multiply two number', () => {
    const calservice = new CalculatorService();
    const result = calservice.multiply(2, 2);
    expect(result).toBe(4);
  });
}); */

// using dependency injection in test cases.
describe('CalculatorService', () => {
  let logger: jasmine.SpyObj<LoggerService>;
  let calservice: CalculatorService;

  // used to share the code between each test cases.
  beforeEach(() => {
    // fake implementation of the dependency injection
    const loggerspy = jasmine.createSpyObj<LoggerService>('LoggerService', ['log']);

    // Configuring the Testbed
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerspy }, // injecting the dependency injection in the service used.
      ],
    });

    calservice = TestBed.inject(CalculatorService);
    // you can also use these to get the intellisense help
    logger = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;

    // simple way to create.
    // calservice = new CalculatorService(logger);
  });

  // another way to share the code between each test cases

  it('Should Add Two Number', () => {
    const result = calservice.add(1, 2);

    // assertion
    expect(result).toEqual(3);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('Should Multiply two number', () => {
    const result = calservice.multiply(2, 2);
    expect(result).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
