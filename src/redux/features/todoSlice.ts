import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  priority: string
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const updatedTodos = state.todos.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });

      // Separate completed and incomplete tasks
      const completedTasks = updatedTodos.filter((task) => task.isCompleted);
      const incompleteTasks = updatedTodos.filter((task) => !task.isCompleted);

      // Combine incomplete tasks followed by completed tasks
      const reorderedTodos = [...incompleteTasks, ...completedTasks];

      // Update the state with the reordered tasks
      state.todos = reorderedTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSLice.actions;

export default todoSLice.reducer;
