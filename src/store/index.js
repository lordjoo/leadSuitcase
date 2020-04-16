import Vue from 'vue'
import Vuex from 'vuex'
import {firestoreAction, vuexfireMutations} from 'vuexfire'
import { db } from '../firebase-setup'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:[],
    posts:[],
    announcements:[],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindEvents: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("events",db.collection('events').orderBy('date','desc'));
    }),
    bindPosts: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("posts",db.collection('posts').where("isAnnouncement",'==',true).orderBy('date','desc'));
    }),
    bindAnnouncements: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("announcements",db.collection('posts').where("isAnnouncement",'==',false).orderBy('date','desc'));
    }),

  },
  modules: {
  }
})
