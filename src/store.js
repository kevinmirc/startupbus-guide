import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false,
    buses: [],
    // [busAcronym: stirng]: (Sponsor | Personnel | ...)[];
    sponsors: {},
    personnel: {},
    locations: {},
    schedule: {},
    info: {},
    payments: {},
  },
  getters: {
    buses(state) {
      return state.buses;
    },
    busResource(state) {
      return (resource, busAcronym) => {
        return state[resource][busAcronym] || [];
      };
    },
    sponsors(state) {
      return (busAcronym) => state.sponsors[busAcronym];
    },
  },
  mutations: {
    setResource(state, { resource, data }) {
      state[resource] = data;
    },
    setResourceForBus(state, { resource, data }) {
      const resourceMappedByBus = {};
      const resourceList = data;

      const addResourceToMapping = (busAcronym, resourceInstance) => {
        if (!resourceMappedByBus[busAcronym]) {
          resourceMappedByBus[busAcronym] = [];
        }

        resourceMappedByBus[busAcronym].push(resourceInstance);
      };

      resourceList.forEach((resourceInstance) => {
        if (resourceInstance.fields.Bus && resourceInstance.fields.Bus.length) {
          resourceInstance.fields.Bus.forEach((busId) => {
            const bus = state.buses.find(b => b.id === busId);
            if (!bus) { return; }

            const busAcronym = bus.fields.Acronym;
            if (!busAcronym) { return; }

            addResourceToMapping(busAcronym, resourceInstance);
          });
        }
      });

      state[resource] = resourceMappedByBus;
    },
  },
});

export default store;
