import { useLocation, Link } from 'react-router-dom';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './styles';
import useClasses from '../../useClasses';

const Breadcrumbs = () => {
  const { breadcrumbs, crumb } = useClasses(styles);
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((item) => item !== '')
    .map((item) => {
      currentLink += `/${item}`;

      return (
        <Link key={item} to={currentLink} className={crumb}>
          {item}
        </Link>
      );
    });

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
      classes={{ root: breadcrumbs }}
    >
      {crumbs}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
