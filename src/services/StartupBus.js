import store from '../store';
import airtable from './airtable';

class StartupBus {
  getBuses() {
    const resource = 'buses';
    const cache = store.getters[resource];

    if (cache && cache.length) {
      return Promise.resolve(cache);
    }

    return airtable.getReource(resource)
      .then((data) => {
        store.commit('setResource', { resource, data });
        return data;
      });
  }

  getResourceListForBus(resource, busAcronym) {
    if (!resource || !busAcronym) {
      throw Error('"resource" and "busAcronym" are both required arguments');
    }

    const cache = store.getters.busResource(resource, busAcronym);

    if (cache && cache.length) {
      return Promise.resolve(cache);
    }

    return this.getBuses()
      .then((buses) => {
        const targetBus = buses.find(b => b.fields.Acronym === busAcronym);

        if (!targetBus) {
          throw Error('Could not find bus with provided ID');
        }

        return airtable.getReource(resource)
          .then((resourceList) => {
            store.commit('setResourceForBus', { resource, data: resourceList });
            return store.getters.busResource(resource, busAcronym);
          })
      });
  }
}

const startupBus = new StartupBus();

export default startupBus;
