import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/tool',
  name: 'list',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.list',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    // {
    //   path: 'search-table', // The midline path complies with SEO specifications
    //   name: 'SearchTable',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     locale: 'menu.list.searchTable',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    {
      path: 'backup',
      name: 'Card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: '备份/还原',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
