import tuple, { Tuple2 } from '../src';

describe('Tuple', () => {
  it('works', () => {
    const testTuple: Tuple2<string, number> = tuple<string, number>('foo', 1);
    expect(testTuple._1).toBe('foo');
    expect(testTuple._2).toBe(1);
  });
});
