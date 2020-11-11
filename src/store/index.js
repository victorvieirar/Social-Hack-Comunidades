import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    schedule: [
      {
        day: "3",
        month: "nov",
        name: "Abertura das Inscrições Online",
      },
      {
        day: "15",
        month: "nov",
        name: "Warm Up do Social Hack",
      },
      {
        day: "23",
        month: "nov",
        name: "Encerramento das Inscrições Online",
      },
      {
        day: "24 e 25",
        month: "nov",
        name: "Formação Virtual de Times",
      },
      {
        day: "27 a 29",
        month: "nov",
        name: "Social Hack",
      },
      {
        day: "30 a 1",
        month: "nov | dez",
        name: "Avaliação de Projetos",
      },
      {
        day: "2",
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
