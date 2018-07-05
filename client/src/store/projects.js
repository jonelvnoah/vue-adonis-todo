import Vue from 'vue';
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
    getProjects({ commit }) {
      return HTTP().get('/projects').then(({ data }) => {
        commit('setProjects', data);
      });
    },
    saveProject({ commit }, project) {
      return HTTP().patch(`/projects/${project.id}`, project)
        .then(() => {
          commit('unsetEditMode', project);
        });
    },
    deleteProject({ commit }, project) {
      return HTTP().delete(`/projects/${project.id}`, project)
        .then(() => {
          commit('removeProject', project);
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
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProjectTitle(state, { project, title }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unsetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
    removeProject(state, project) {
      state.projects.splice(state.projects.indexOf(project), 1);
    },
  },
};
