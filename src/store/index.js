import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    schedule: [
      {
        day: "19",
        month: "nov",
        name: "Abertura das Inscrições Online",
      },
      // {
      //   day: "15",
      //   month: "nov",
      //   name: "Warm Up do Social Hack",
      // },
      {
        day: "9",
        month: "dez",
        name: "Encerramento das Inscrições Online",
      },
      {
        day: "9 e 10",
        month: "dez",
        name: "Formação Virtual de Times",
      },
      {
        day: "11 a 13",
        month: "dez",
        name: "Social Hack",
      },
      // {
      //   day: "16",
      //   month: "dez",
      //   name: "Avaliação de Projetos",
      // },
      {
        day: "16",
        month: "dez",
        name: "Live de divulgação dos resultados",
      },
    ],

    prizes: [
      {
        name: "Primeiro Lugar",
        prize: "Um notebook para cada",
      },
      {
        name: "Segundo Lugar",
        prize: "1 smartphone para cada",
      },
      {
        name: "Terceiro Lugar",
        prize: "1 kit³ para cada",
      },
    ],
  },
  getters: {
    schedule: (state) => state.schedule,
    prizes: (state) => state.prizes,
  },
  mutations: {},
});

export default store;
