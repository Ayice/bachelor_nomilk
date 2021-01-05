import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { getWebsites, postNewWebsite, deleteWebsite } from './utils/api';

const store = new Vuex.Store({
  state: {
    websites: [],
    focusedWebsite: {},
    createNewSiteFormShow: false
  },
  mutations: {
    SET_CREATE_WEBSITE_FORM(state, data) {
      state.createNewSiteFormShow = data;
    },
    SET_WEBSITES(state, data) {
      state.websites = data;
    },
    SET_NEW_WEBSITE(state, data) {
      state.websites.splice(0, 0, data);
    },
    REMOVE_WEBSITE(state, data) {
      const index = state.websites.findIndex(website => website.id === data.id);

      state.websites.splice(index, 1);
    },
    SET_FOCUSED_WEBSITE(state, data) {
      state.focusedWebsite = data;
    }
  },
  actions: {
    showCreateWebsiteForm({ commit }, data) {
      commit('SET_CREATE_WEBSITE_FORM', data);
    },
    setWebsites({ commit }, data) {
      commit('SET_WEBSITES', data);
    },
    insertNewWebsite({ commit }, data) {
      commit('SET_NEW_WEBSITE', data);
    },
    removeDeletedWebsite({ commit }, data) {
      commit('REMOVE_WEBSITE', data);
    },
    fetchWebsites({ dispatch }, url) {
      getWebsites(url)
        .then(res => {
          dispatch('setWebsites', res);
        });
    },
    createNewWebsite({ dispatch }, data) {
      return new Promise((resolve, reject) => {
        postNewWebsite(data)
          .then(res => {
            dispatch('insertNewWebsite', res);

            resolve();
          }).catch(() => {
            console.log('An error occurred trying to create the new website. Try again');

            reject();
          });
      });
    },
    removeWebsite({ dispatch }, data) {
      deleteWebsite(data)
        .then(res => {
          dispatch('removeDeletedWebsite', res);
        }).catch(() => {
          console.log('An error occurred trying to delete the website. Try again');
        });
    },
    setFocusedWebsite({ commit }, data) {
      commit('SET_FOCUSED_WEBSITE', data);
    }
  },
  getters: {
    websites: state => state.websites,
    focusedWebsite: state => state.focusedWebsite,
    createNewSiteFormShow: state => state.createNewSiteFormShow
  }
});

export default store;
