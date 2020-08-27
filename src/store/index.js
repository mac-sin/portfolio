import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const API_URL = 'https://api.vovdojo.com/v1/contract'

export const store = new Vuex.Store({
    strict: true,

    state: {
        client: {
            name: null,
            email: null,
            message: null,
        },
        status: {
            errorMessage: null,
            successMessage: null,
        }
    },
    
    getters: {
        getClient: (state) => state.client,
        getStatus: (state) => state.status,
    },

    mutations: {
        Set_Client: (state, payload) => (state.client = payload),
        Set_ErrorMessage: (state, payload) => (state.status.errorMessage = payload),
        Set_SuccessMessage: (state, payload) => (state.status.successMessage = payload),
    },
    

    actions: {
        asyncFetchContract({ commit }, payload ) {
            commit('Set_Client', payload);
            return axios.post(API_URL, payload)
                    .then(function (response) {
                        if (response.data.status.code===200) {
                            commit('Set_Client', null);
                            commit('Set_ErrorMessage', null);
                            commit('Set_SuccessMessage', 'Thanks for contract us.');
                            setTimeout(() => {
                                commit('Set_SuccessMessage', null);
                            }, 5000);
                            return true
                        } else {
                            commit('Set_ErrorMessage', response.data.status.message);
                            commit('Set_SuccessMessage', null);
                            return false
                        }
                    })
                    .catch(function (error) {
                        // eslint-disable-next-line no-console
                        console.log(error);
                        commit('Set_ErrorMessage', error.message.toStrng());
                        commit('Set_SuccessMessage', null);
                        return false
                    });
        },

    },
})
