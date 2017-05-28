class Iteration {
  constructor(ui, weeks) {
    this._validateInput(ui, weeks);
    this._ui = ui;
    this._weeks = weeks;
    this._weeksPassed = 0;
  }

  _validateInput(ui, weeks) {
    if (ui == null) {
      throw new Error('Iteration missing UI');
    }
    this._validateWeeks(weeks);
  }

  _validateWeeks(weeks) {
    if (weeks == null) {
      throw new Error('Iteration missing weeks parameter');
    } else if (weeks === 0) {
      throw new Error('Iteration must have weeks larger than 0');
    }
  }

  weekPasses() {
    this._weeksPassed++;
    if (this._weeksPassed === this._weeks) {
      this._ui.iterationEnded();
      this._weeksPassed = 0;
    }
  }
}

module.exports = Iteration;
