import alt from '../Alt';

class todoAction {
  constructor() {
    this.generateActions(
      'todoAddAction',
      'todoRemoveAction',
      'todoMarkAsCompletedAction'
    );
  }
}

export default alt.createActions(todoAction);
