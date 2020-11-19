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
        prize: "R$ 1.000,00",
      },
      {
        name: "Segundo Lugar",
        prize: "R$ 1.000,00",
      },
      {
        name: "Terceiro Lugar",
        prize: "R$ 1.000,00",
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
