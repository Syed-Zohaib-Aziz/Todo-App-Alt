import alt from '../Alt';
import todoAction from '../actions/todoActions';

class todoStore {
  constructor() {
    this.error = null;
    this.data = [];
    this.bindActions(todoAction);
  }
  onTodoAddAction(data) {
    this.data = [
      ...this.data,
      {
        text: data,
        isCompleted: false,
      }
    ];
  }
  onTodoRemoveAction(data) {
    const filteredList = this.data.filter((value) => value.text !== data)
    this.data = filteredList;
  }
  onTodoMarkAsCompletedAction(data) {
    let filteredList = this.data.filter((value) => value.text !== data)
    const markAsCompletedData = {
      text: data,
      isCompleted: true,
    }
    filteredList.push(markAsCompletedData);
    this.data = filteredList;
  }

}
export default alt.createStore(todoStore);
