export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'DOMAIN', type: 'label' },

  {
    name: 'Economy',
    icon: 'attach_money',
    badge: { color: 'secondary' },
    children: [{ name: 'Data Pekerjaan', path: '/dashboard/pekerjaanTable', iconText: 'A' }],
  },
  {
    name: 'Education',
    icon: 'school',
    badge: { color: 'secondary' },
    children: [{ name: 'Pantau Kurs', path: '/material/autocomplete', iconText: 'A' }],
  },
  {
    name: 'Energy',
    icon: 'bolt',
    badge: { color: 'secondary' },
    children: [{ name: 'Pantau Kurs', path: '/material/autocomplete', iconText: 'A' }],
  },
  {
    name: 'Environment',
    icon: 'grass',
    badge: { color: 'secondary' },
    children: [{ name: 'Air Quality', path: '/material/autocomplete', iconText: 'A' }],
  },
  {
    name: 'Finance',
    icon: 'payments',
    badge: { color: 'secondary' },
    children: [{ name: 'Pantau Kurs', path: '/material/autocomplete', iconText: 'A' }],
  },
  {
    name: 'Governance',
    icon: 'account_balance',
    badge: { color: 'secondary' },
    children: [{ name: 'Pantau Kurs', path: '/material/autocomplete', iconText: 'A' }],
  },
  {
    name: 'Health',
    icon: 'healing',
    badge: { color: 'secondary' },
    children: [{ name: 'Ketersediaan Rumah Sakit', path: '/material/autocomplete', iconText: 'A' }],
  },
  {
    name: 'Tourism',
    icon: 'luggage',
    children: [{ name: 'Monumen di Jakarta', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Safety',
    icon: 'security',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Shelter',
    icon: 'house',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Telecommunication',
    icon: 'phone',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Transportation',
    icon: 'directions_car',
    children: [{ name: 'Zona Parkir Tersedia', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Urban Planning',
    icon: 'location_city',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Water and Sanitation',
    icon: 'local_drink',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Waste Management',
    icon: 'restore_from_trash',
    children: [{ name: 'Jadwal Pembuangan', path: '/charts/echarts', iconText: 'E' }],
  },
];
