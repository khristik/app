export const userInfo = [
  { id: 'img', label: '' },
  { id: 'name', label: '' },
  { id: 'position', label: '' },
  { id: 'project', label: 'Project: ' },
  { id: 'email', label: 'Email:' },
  { id: 'city', label: 'Work location:' },
  { id: 'activeSince', label: 'Active since: ' },
];

export const basicUserInfo = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 170,
    handleClick: (value) => {
      console.log(value);
    },
  },
  // {
  //     id: 'lastName',
  //     label: 'LastName',
  //     minWidth: 170,
  //     align: 'left',
  //     format: (value) => value.toLocaleString('en-US'),
  // },
  {
    id: 'country',
    label: 'Country',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];

export const companyInfo = [
  {
    id: 'position',
    label: 'Position',
    minWidth: 170,
    handleClick: (value) => {
      console.log(value);
    },
    title: 'Basic Information',
  },
  // {
  //     id: 'lastName',
  //     label: 'LastName',
  //     minWidth: 170,
  //     align: 'left',
  //     format: (value) => value.toLocaleString('en-US'),
  // },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'left',
    title: 'Company (Personal) Information',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'city',
    label: 'Office',
    minWidth: 170,
    align: 'left',
    title: 'Occupation Information',
    format: (value) => value.toLocaleString('en-US'),
  },
];
