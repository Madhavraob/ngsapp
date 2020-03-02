
export default class ToDoState {
  ToDos: any;
  ToDoError: Error;
}

export const initializeState = (): ToDoState => {
  return { ToDos: {}, ToDoError: null };
};
