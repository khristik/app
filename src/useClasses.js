import { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { css } from '@emotion/css';

const useClasses = (stylesElement) => {
  const theme = useTheme();
  return useMemo(() => {
    const rawClasses = typeof stylesElement === 'function' ? stylesElement(theme) : stylesElement;
    const prepared = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value);
    });

    return prepared;
  }, [stylesElement, theme]);
};

export default useClasses;
