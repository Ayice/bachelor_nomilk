import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { getWebsites, postNewWebsite, deleteWebsite, putWebsite } from './utils/api';

const store = new Vuex.Store({
  state: {
    websites: [],
    focusedWebsite: {},
    createNewSiteFormShow: false
  },
  mutations: {
    SET_UPDATED_POST(state, data) {
      console.log('mutations', data);

      const index = state.websites.findIndex(website => website.id === data.id);

      console.log(index);

      Object.assign(state.websites[index], data);
    },
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
    setFocusedWebsite({ commit, dispatch }, data) {
      commit('SET_FOCUSED_WEBSITE', data);

      if (data.id) {
        dispatch('showCreateWebsiteForm', true);
      }
    },
    updateWebsite({ commit }, data) {
      putWebsite(data)
        .then(res => {
          commit('SET_UPDATED_POST', res);
        });
    }
  },
  getters: {
    websites: state => state.websites,
    focusedWebsite: state => state.focusedWebsite,
    createNewSiteFormShow: state => state.createNewSiteFormShow
  }
});

export default store;
