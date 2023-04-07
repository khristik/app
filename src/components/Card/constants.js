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
