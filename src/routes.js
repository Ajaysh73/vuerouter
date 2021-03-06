/* eslint-disable prettier/prettier */
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
export const routes = [
  { path: '', component: Home, name: 'home' },
  {
    path: '/user',
    component: User,
    name: 'user',
    children: [
      { path: '', component: UserStart },
      { path: ':id', component: UserDetail },
      { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]
  },
  { path: '/redirect-me', redirect: {name: 'home'} },
  { path: '*', redirect: {name: 'user' } }
];
