import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({

  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        title: "Do You Homework",
        color: "red-note",
      },
      {
        id: 2,
        title: "Learn React Redux",
        color: "red-note",
      },
      {
        id: 3,
        title: "Learn React",
        color: "green-note",
      },
      {
        id: 4,
        title: "Listen To Music",
        color: "yellow-note",
      }
    ],
    itemsCopy: []
  },

  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    searchTodo: (state, action) => {
      const searchTitle = action.payload;
     
      if(state.itemsCopy.length === 0){
        for (var i = 0; i < state.items.length; i++) {
          state.itemsCopy[i] = state.items[i];
        }
      }

      if(searchTitle !==''){
        state.items = state.itemsCopy.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()));
      }
      else {

        state.items = [];

        for (var i = 0; i < state.itemsCopy.length; i++) {
          state.items[i] = state.itemsCopy[i];
        }

        state.itemsCopy = [];
      }
    },

    deleteTodo: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    }
  },
})

export const { addTodo, searchTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;