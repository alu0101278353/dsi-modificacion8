import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../src/FilterList';

describe('probando clase filterListt', () => {
  const list: number[] = [4, 6, 7];
  const n = new FilterMapAddReduce(list);
  it('filter', () => {
    expect(n.run()).to.be.eql([6, 7]);
  });
});