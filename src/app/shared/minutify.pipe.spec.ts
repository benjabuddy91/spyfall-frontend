import { MinutifyPipe } from './minutify.pipe';

describe('MinutifyPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutifyPipe();
    expect(pipe).toBeTruthy();
  });
});
