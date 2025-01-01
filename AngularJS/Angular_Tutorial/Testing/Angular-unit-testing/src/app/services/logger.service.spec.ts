import { LoggerService } from './logger.service';

// creating the test cases using the describe method
describe('LoggerService', () => {
  // write the test cases using it method
  it('Should Log the message', () => {
    // keeping the spy to check if the console method is called or not.
    spyOn(console, 'log');

    const message = 'angular unit Testing';

    // creating the instance of the Logger Service
    const logger = new LoggerService();
    logger.log(message);

    // assertion => specifying what should be done after calling these method

    // specifiying it should be called 1 time only
    // using with context passing the message if the test case is failed
    expect(console.log)
      .withContext('Should have been called only once')
      .toHaveBeenCalledTimes(1);

    // specifying what should be printed

    // specifying that the console.log has been called or not because we don't want to show the implementation or make the heavy call.
    expect(console.log).toHaveBeenCalledWith(`LOGGER LOG:${message}`);
  });

  // you can write multiple test cases using it method.
});
