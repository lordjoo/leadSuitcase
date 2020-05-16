import Vue from 'vue'
import Vuex from 'vuex'
import {firestoreAction, vuexfireMutations} from 'vuexfire'
import firebase from "firebase/app";
import 'firebase/firestore'
import createPersistedState from "vuex-persistedstate";

const db = firebase.firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    events:[],
    posts:[],
    upcoming:[],
    lead:null,
    announcements:[],
  },
  mutations: {
    ...vuexfireMutations,
    login:function (state, login) {
      state.lead = login;
    },
    logout:function (state) {
      state.lead = null
    }
  },
  actions: {
    bindEvents: firestoreAction(context  => {
      return context.bindFirestoreRef("events",db.collection('events'));
    }),
    bindUpcoming: firestoreAction(context  => {
      return context.bindFirestoreRef("upcoming",db.collection('events').where('date','>',new Date()));
    }),
    bindPosts: firestoreAction(context  => {
      return context.bindFirestoreRef("posts",db.collection('posts').where("isAnnouncement",'==',false).orderBy('date','desc'));
    }),
    bindAnnouncements: firestoreAction(context  => {
      return context.bindFirestoreRef("announcements",db.collection('posts').where("isAnnouncement",'==',true));
    }),
  },
  modules: {
  }
})
