# StartupBus Guide

## What Is This?
This is a mobile web application used for StartupBus participants to have quickly and easily access to their itenerary and other relevant information durring their trip. StatupBus participants can go to [kevinmirc.github.io/startupbus-guide/#/buses](https://kevinmirc.github.io/startupbus-guide/#/buses) and slect their bus for a full itinerary of their trip.

## For Conductors

### How it Works

- Bus conductors update the airtable with their bus's Sponsors, Personnel, Locations, Schedule, and more on the [Airtable](). Changes are automatically reflected on the application, there is not publication process.

- Have your riders save the website to the homescreen of their phone.

- Use the link as a reference for your schedule, to get addresses of locations, and links to sponsors websites and social media handles (to show them love).

### Icons

You'll see that some fields on the Airtable have the option to add an icon. You can see a list of icons [here](https://materializecss.com/icons.html). Just place the `id` of the icon in the field in Airtable.

## For Developers

### Infrastructure

This uses [Airtable](https://airtable.com/) as the database. Airtable offers an REST API to access the data in the tables. Because Airtable requires a user permissioned Bearer token consume the API, I've set up a proxy server on an AWS API Gateway that will set the Authorization header on requrest. The proxy server only accepts GET, and OPTIONS requests and will pass the path and query params directly to Airtable's api endpoint.

- Proxy Server Endpoint: [https://3a7gh9p22h.execute-api.us-east-1.amazonaws.com/prod](https://3a7gh9p22h.execute-api.us-east-1.amazonaws.com/prod)

- Proxy Destination: https://api.airtable.com/v0/appGnLYiWlUtxCQG2/{proxy}

### Architecture

- Vue.js, Vue Router, Vuex.
- Using [Materialize](https://materializecss.com/) CSS for styling (imported via CDN in `index.html`)

### Deployments

- Build via `npm run build`
- Commit and push to master on GitHub.
- Hosted on github pages.

### Updating for Next Year

- Duplicate the Airtable instance.
- Create a new AWS API Gateway with the same configuration.
- Insert the new Airtable Proxy Destination `api.airtable.com/v0/{table_id}/{proxy}`
- Add your Airtable Bearer token to the enviornment.
