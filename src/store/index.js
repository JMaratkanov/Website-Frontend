import { createStore } from "vuex";
export default createStore({
  state: {
    currentPage: 1,
    loginStatus: 0,
   

    warenkorb: [],

    adressen: [],
    anrede: "",
    auftraege: [],
    bankverbindungen:  [],
    email: "",
    geburtstag: "",
    nachname: "",
    passwort: "",
    rolle: "",
    rufnummer: "",
    vorname: "",
    vorwahl: "",

  },
  mutations: {
    setCurrentPage: (state, params) => (state.currentPage = params),
    setLoginStatus: (state, params) => (state.loginStatus = params),

    setWarenkorb: (state, params) => (state.warenkorb = params),

    setAdressen: (state, params) => (state.adressen = params),
    setAnrede: (state, params) => (state.anrede = params),
    setAuftraege: (state, params) => (state.auftraege = params),
    setBankverbindungen: (state, params) => (state.bankverbindungen = params),
    setEmail: (state, params) => (state.email = params),
    setGeburtstag: (state, params) => (state.geburtstag = params),
    setNachname: (state, params) => (state.nachname = params),
    setPasswort: (state, params) => (state.passwort = params),
    setRolle: (state, params) => (state.rolle = params),
    setRufnummer: (state, params) => (state.rufnummer = params),
    setVorname: (state, params) => (state.vorname = params),
    setVorwahl: (state, params) => (state.vorwahl = params),

  },
  actions: {
    setCurrentPage({ commit }, currentPage) {
      commit("setCurrentPage", currentPage);
    },
    setLoginStatus({ commit }, loginStatus) {
      commit("setLoginStatus", loginStatus);
    },

    setWarenkorb({ commit }, warenkorb) {
      commit("setWarenkorb", warenkorb);
    },

    setAdressen({ commit }, adressen) {
      commit("setAdressen", adressen);
    },
    setAnrede({ commit }, anrede) {
      commit("setAnrede", anrede);
    },
    setAuftraege({ commit }, auftraege) {
      commit("setAuftraege", auftraege);
    },
    setBankverbindungen({ commit }, bankverbindungen) {
      commit("setBankverbindungen", bankverbindungen);
    },
    setEmail({ commit }, email) {
      commit("setEmail", email);
    },
    setGeburtstag({ commit }, geburtstag) {
      commit("setGeburtstag", geburtstag);
    },
    setNachname({ commit }, nachname) {
      commit("setNachname", nachname);
    },
    setPasswort({ commit }, passwort) {
      commit("setPasswort", passwort);
    },
    setRolle({ commit }, rolle) {
      commit("setRolle", rolle);
    },
    setRufnummer({ commit }, rufnummer) {
      commit("setRufnummer", rufnummer);
    },
    setVorname({ commit }, vorname) {
      commit("setVorname", vorname);
    },
    setVorwahl({ commit }, vorwahl) {
      commit("setVorwahl", vorwahl);
    },
  },
  getters: {
    currentPage: (state) => state.currentPage,
    loginStatus: (state) => state.loginStatus,
    warenkorb: (state) => state.warenkorb,


    adressen: (state) => state.adressen,
    anrede: (state) => state.anrede,
    auftraege: (state) => state.auftraege,
    bankverbindungen:  (state) => state.bankverbindungen,
    email: (state) => state.email,
    geburtstag: (state) => state.geburtstag,
    nachname: (state) => state.nachname,
    passwort: (state) => state.passwort,
    rolle: (state) => state.rolle,
    rufnummer: (state) => state.rufnummer,
    vorname: (state) => state.vorname,
    vorwahl: (state) => state.vorwahl,
  },
});
