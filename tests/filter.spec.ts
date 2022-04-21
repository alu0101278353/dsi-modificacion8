import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../src/FilterList';

describe('probando clase filterListt', () => {
  const n = new FilterMapAddReduce([4, 6, 7]);
  it('filter', () => {
    expect(n.run()).to.be.eql(undefined);
  });
});