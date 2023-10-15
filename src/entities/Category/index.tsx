import Chip from '@mui/material/Chip';
import { FC, useState } from 'react';

interface ICategory {
  label: string;
  active: 'default' | 'primary';
  onActive: (label: string) => void;
  onInactive: (label: string) => void;
}

const Category: FC<ICategory> = ({ label, active, onActive, onInactive }) => {
  const [type, setType] = useState<'default' | 'primary'>(active);

  const handleClick = (label: string) => {
    if (type === 'default') {
      onActive(label);
      setType('primary');
    } else {
      onInactive(label);
      setType('default');
    }
  };

  return <Chip label={label} color={type} onClick={() => handleClick(label)} />;
};

export default Category;
