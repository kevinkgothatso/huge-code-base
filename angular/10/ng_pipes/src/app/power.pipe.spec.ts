import { powerPipe } from './power.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new powerPipe();
    expect(pipe).toBeTruthy();
  });
});
