import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages_docente/dashboard',
    key: 'dashboard',
  },
  {
    title: 'Docente',
    icon: 'nb-compose',
    link: '/pages_docente/docente',
    key: 'docente',
    children: [
      {
        title: 'Lista Docente Asignatura',
        link: '/pages_docente/docente/list-docente-asignatura',
        key: 'docente-asignatura',
      },
    ],
  },
]
