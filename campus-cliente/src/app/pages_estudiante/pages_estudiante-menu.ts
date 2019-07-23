import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages_estudiante/dashboard',
    key: 'dashboard',
  },
  {
    title: 'Estudiante',
    icon: 'nb-compose',
    link: '/pages_estudiante/estudiante',
    key: 'estudiante',
    children: [
      {
        title: 'Lista Nota Materias Estudiante',
        link: '/pages_estudiante/estudiante/list-estudiante',
        key: 'lista_estudiante',
      },
    ],
  },
]
