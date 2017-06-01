const Iteration = require('./src/domain/iteration');

GDT.on(GDT.eventKeys.saves.saving, (e) => {
  console.log('saving', e);
});

GDT.on(GDT.eventKeys.saves.loading, (e) => {
  console.log('loading', e);
});

class AgileGameDev {
  start() {
    this.showDevTools()
    this._iteration = new Iteration(this, 2)

    GDT.on(GDT.eventKeys.gameplay.weekProceeded, () => this._iteration.weekPasses());
  }

  iterationEnded() {
    console.log('called back');
    alert("iteration done");
  }

  showDevTools() {
    eval("require('nw.gui').Window.get().showDevTools();");
  }
}


new AgileGameDev().start();
