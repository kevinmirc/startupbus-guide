import axios from 'axios';

const client = axios.create({
  baseURL: 'https://3a7gh9p22h.execute-api.us-east-1.amazonaws.com/prod',
  timeout: 1000,
});

class Airtable {
  getReource(resourceName, filter) {
    let query = 'view=Grid view';

    if (filter) {
      query += `&filterByFormula=${filter}`
    }

    return client.get(`/${resourceName}?${query}`)
      .then((res) => {
        return res.data.records;
      });
  }
}

const airtable = new Airtable();

export default airtable;
