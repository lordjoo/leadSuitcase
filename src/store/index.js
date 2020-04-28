import Vue from 'vue'
import Vuex from 'vuex'
import {firestoreAction, vuexfireMutations} from 'vuexfire'
import firebase from "firebase/app";
import 'firebase/firestore'
const db = firebase.firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events:[],
    posts:[],
    upcoming:[],
    announcements:[],
  },
  mutations: {
    ...vuexfireMutations,
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
