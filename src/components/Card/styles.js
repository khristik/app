export default (theme) => ({
  card: {
    display: 'flex',
    background: 'white',
    boxShadow: '0 3px 10px 0 rgba(0,0,0,.06)',

    'th, td': {
      padding: 0,
    },
    th: {
      paddingBottom: '10px',
    },
  },
  informationBlock: {
    'p:not(:first-child)': {
      marginTop: theme.spacing(5),
    },
  },
  avatarBlock: {
    display: 'flex',
    width: '100px',
    margin: '0 auto 20px auto',
  },
  avatarImage: {
    width: '100%',
  },
  infoBlock: {
    textAlign: 'center',

    'p:nth-child(4)': {
      paddingBottom: theme.spacing(3),
    },

    'p:nth-child(n+5)': {
      textAlign: 'left',
    },
  },
});
