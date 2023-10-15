import DeleteIcon from '@mui/icons-material/Delete';
import { IEntries } from '@shared/model';
import { FC, useState } from 'react';
import { SCard } from './entries.styled';
import { IconButton } from '@mui/material';

interface IEntriesProps extends IEntries {
  onDelete: (label: string) => void;
}

const Entries: FC<IEntriesProps> = ({ API, Link, Category, Description, onDelete }) => {
  const [show, setShow] = useState<boolean>(true);
  const [type, setType] = useState<'default' | 'primary'>('default');

  console.log(show);

  const backgoundRand = '/background' + Math.floor(Math.random() * 7 + 1) + '.jpg';

  const handleClick = (label: string) => {
    setShow(false);
    setType(type === 'default' ? 'primary' : 'default');
    onDelete(label);
  };

  return (
    <SCard show={show}>
      <div className="card__header">
        <div className="card__flexBox">
          <span className="card__title">API:</span> <div>{API}</div>
        </div>
        <IconButton size="small" aria-label="delete" onClick={() => handleClick(Link)}>
          <DeleteIcon />
        </IconButton>
      </div>
      <img src={backgoundRand} alt="photo" />
      <div className="card__desc">{Description}</div>

      <div className="card__flexBox">
        <span className="card__title">Categories:</span> <div>{Category}</div>
      </div>

      <div className="card__flexBox">
        <span className="card__title">Link:</span> <a href={Link}>{Link}</a>
      </div>
    </SCard>
  );
};

export default Entries;
