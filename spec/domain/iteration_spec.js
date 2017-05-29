const Iteration = require('../../src/domain/iteration');

describe('iteration', function() {
  it('needs ui parameter', function() {
    expect(() => new Iteration()).toThrowError('Iteration missing UI');
  });

  it('needs weeks parameter', function() {
    ui = {}

    expect(() => new Iteration(ui)).toThrowError('Iteration missing weeks parameter');
  });

  it('needs weeks to be larger than zero', function() {
    ui = {}
    expect(() => new Iteration(ui, 0)).toThrowError('Iteration must have weeks larger than 0');
  });

  it('iteration ends', function() {
    var ui = jasmine.createSpyObj('ui', ['iterationEnded']);

    var iteration = new Iteration(ui, 2);
    iteration.weekPasses();
    expect(ui.iterationEnded).not.toHaveBeenCalled();

    iteration.weekPasses();
    expect(ui.iterationEnded).toHaveBeenCalled();
  });

  it('iteration restarts', function() {
    var ui = jasmine.createSpyObj('ui', ['iterationEnded']);

    var iteration = new Iteration(ui, 2);
    iteration.weekPasses();
    iteration.weekPasses();
    iteration.weekPasses();
    iteration.weekPasses();

    expect(ui.iterationEnded.calls.count()).toEqual(2);
  });
});
