<template>
  <div id="app">
    <Header />
    <TrialPage />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

import '@/assets/styles/all.scss';
import Header from '@/components/Header/Header.vue'
import TrialPage from "@/components/Templates/TrialPage/TrialPage";
import Footer from "@/components/Footer/Footer";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    size: 1
  },
  mutations: {
    SET_SIZE(state, newSize) {
      state.size = newSize;
    }
  }
})

export default {
  name: 'App',
  components: {
    Footer,
    TrialPage,
    Header,
  },
  store
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://db.onlinewebfonts.com/c/59272c06965f3b33f8db3b47796309ca?family=Museo+300');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

</style>
