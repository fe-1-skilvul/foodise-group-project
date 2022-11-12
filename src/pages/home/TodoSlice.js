import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];
export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    postTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content) {
        return {
          payload: {
            id: nanoid(),
            content,
            status: 'active',
          },
        };
      },
    },
    removeTodo(state, action) {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
    completeTodo(state, action) {
      const { id } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);

      existingTodo.status = 'completed';
    },
    editTodo(state, action) {
      const { id, content } = action.payload;

      const existingTodo = state.find((todo) => todo.id === id);
      existingTodo.content = content;
    },
  },
});
export const { postTodo, removeTodo, completeTodo, editTodo } =
  TodoSlice.actions;
export default TodoSlice.reducer;
