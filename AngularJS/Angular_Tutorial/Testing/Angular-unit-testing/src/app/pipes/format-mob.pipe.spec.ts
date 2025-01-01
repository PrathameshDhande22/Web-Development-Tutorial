// Creating and Writing the Test cases for the Pipes

import { FormatMobPipe } from './format-mob.pipe';

describe('format-mob Pipe', () => {
  it('should format no to india By default', () => {
    // creating the instance of the Pipe
    const pipe = new FormatMobPipe();

    const res = pipe.transform(123434543);

    expect(res).toEqual("+91-123434543")
  });


  it('should format no to USA', () => {
    // creating the instance of the Pipe
    const pipe = new FormatMobPipe();

    const res = pipe.transform(123434543,"USA");

    expect(res).toEqual("+1-123434543")
  });

});
