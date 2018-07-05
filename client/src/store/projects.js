import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
    createProject({ commit, state }) {
      return HTTP().post('/projects', {
        title: state.newProjectName,
      }).then(({ data }) => {
        commit('appendProject', data);
        commit('setProjectName', null);
      });
    },
  },
  getters: {
  },
  mutations: {
    setProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
  },
};
