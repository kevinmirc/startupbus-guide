import Vue from 'vue';
import Router from 'vue-router';
import Buses from '../components/Buses';
import BusPage from '../components/BusPage';
import BusSchedule from '../components/BusSchedule';
import BusPersonnelPage from '../components/BusPersonnelPage';
import BusSponsorsPage from '../components/BusSponsorsPage';
import BusPaymentsPage from '../components/BusPaymentsPage';
import BusInfoPage from '../components/BusInfoPage';
import BusLocationsPage from '../components/BusLocationsPage';

Vue.use(Router);

const router = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '',
      redirect: { name: 'Buses' },
    },
    {
      path: '/',
      redirect: { name: 'Buses' },
    },
    {
      name: 'Buses',
      path: '/buses',
      component: Buses,
    },
    {
      name: 'Bus Page',
      path: '/buses/:id',
      component: BusPage,
      props: true,
      redirect: { name: 'Bus Schedule' },
      children: [
        {
          name: 'Bus Schedule',
          path: '/buses/:id/schedule',
          component: BusSchedule,
          props: true,
        },
        {
          name: 'Bus Personnel',
          path: '/buses/:id/personnel',
          component: BusPersonnelPage,
          props: true,
        },
        {
          name: 'Bus Locations',
          path: '/buses/:id/locations',
          component: BusLocationsPage,
          props: true,
        },
        {
          name: 'Bus Sponsors',
          path: '/buses/:id/sponsors',
          component: BusSponsorsPage,
          props: true,
        },
        {
          name: 'Bus Payments',
          path: '/buses/:id/payments',
          component: BusPaymentsPage,
          props: true,
        },
        {
          name: 'Bus Info',
          path: '/buses/:id/info',
          component: BusInfoPage,
          props: true,
        },
      ],
    },
  ],
});

export default router;
