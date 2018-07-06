import Vue from 'vue';
import HTTP from '../http';
// import router from '../router';

export default {
  namespaced: true,
  state: {
    tasks: [],
    newTaskName: null,
  },
  actions: {
    createTask({ commit, state, rootState }) {
      return HTTP().post(`/projects/${rootState.projects.currentProject.id}/tasks`, {
        description: state.newTaskName,
      }).then(({ data }) => {
        commit('appendTask', data);
        commit('setTaskName', null);
      });
    },
    fetchTasksForProject({ commit }, project) {
      return HTTP().get(`/projects/${project.id}/tasks`)
        .then(({ data }) => {
          commit('setTasks', data);
        });
    },
    saveTask({ commit }, task) {
      return HTTP().patch(`/tasks/${task.id}`, task)
        .then(() => {
          commit('unsetEditMode', task);
        });
    },
    deleteTask({ commit }, task) {
      return HTTP().delete(`/tasks/${task.id}`, task)
        .then(() => {
          commit('removeTask', task);
        });
    },
  },
  getters: {
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTaskName(state, name) {
      state.newTaskName = name;
    },
    appendTask(state, task) {
      state.tasks.push(task);
    },
    setEditMode(state, task) {
      Vue.set(task, 'isEditMode', true);
    },
    unsetEditMode(state, task) {
      Vue.set(task, 'isEditMode', false);
    },
    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
  },
};
