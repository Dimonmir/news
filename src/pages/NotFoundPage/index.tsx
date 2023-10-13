import { Button, Container } from '@mui/material';
import { SNotFound } from './NotFoundPage.styles';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navige = useNavigate();

  const handleClick = () => {
    navige('/');
  };

  return (
    <SNotFound>
      <h1 className="status">404</h1>
      <img
        className="img"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="not found"
      />
      <div className="contant_box_404">
        <h3 className="h2">Что-то пошла не так</h3>

        <p>Кажется мы что-то напутали! Давай отмотает все обратно.</p>

        <Button variant="contained" onClick={handleClick}>
          Вернутся на главную
        </Button>
      </div>
    </SNotFound>
  );
};

export default NotFoundPage;
