import Vue from 'vue';
import Router from 'vue-router';
import Buses from '../components/Buses';
import BusPage from '../components/BusPage';
import BusResourcePage from '../components/BusResourcePage';
import BusPaymentsPage from '../components/BusPaymentsPage';

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
          component: BusResourcePage,
          props: (route) => ({
            id: route.params.id,
            resource: 'schedule',
          }),
        },
        {
          name: 'Bus Personnel',
          path: '/buses/:id/personnel',
          component: BusResourcePage,
          props: (route) => ({
            id: route.params.id,
            resource: 'personnel',
          }),
        },
        {
          name: 'Bus Locations',
          path: '/buses/:id/locations',
          component: BusResourcePage,
          props: (route) => ({
            id: route.params.id,
            resource: 'locations',
          }),
        },
        {
          name: 'Bus Sponsors',
          path: '/buses/:id/sponsors',
          component: BusResourcePage,
          props: (route) => ({
            id: route.params.id,
            resource: 'sponsors',
          }),
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
          component: BusResourcePage,
          props: (route) => ({
            id: route.params.id,
            resource: 'info',
          }),
        },
      ],
    },
  ],
});

export default router;
