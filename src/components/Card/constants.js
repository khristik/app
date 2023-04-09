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
