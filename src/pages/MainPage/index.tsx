import { Category, Entries } from '@entities';
import { SMainPage } from './mainPage.styles';
import { FC, useEffect, useState } from 'react';
import { getCategories, getEntries } from '@shared/api';
import { useStockStore } from '@app/store/store';
import { observer } from 'mobx-react-lite';
import { IEntries } from '@shared/model';
import { Box, CircularProgress } from '@mui/material';

const MainPage: FC = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [entries, setEntries] = useState<IEntries[] | null>(null);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data?.categories!);
      })
      .catch((error) => {
        console.log(error);
      });

    getEntries(sort.join(','), ignore)
      .then((data) => {
        setEntries(data?.entries!);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const { setSort, removeSort, sort } = useStockStore();
  const { setIgnore, ignore } = useStockStore();

  const handleDeleteClick = (str: string) => {
    setIgnore(str);
  };

  const handleAciveClick = (str: string) => {
    setLoader(true);
    setSort(str);
    getEntries(sort.join(','), ignore)
      .then((data) => {
        setEntries(data?.entries!);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleInaciveClick = (str: string) => {
    setLoader(true);
    removeSort(str);
    const newSort = sort.filter((item) => item !== str);
    getEntries(newSort.join(','), ignore)
      .then((data) => {
        setEntries(data?.entries!);
        console.log(sort);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <SMainPage>
      <div className="ContainerCategories">
        {categories &&
          categories.map((item, index) => (
            <Category
              label={item}
              onActive={handleAciveClick}
              onInactive={handleInaciveClick}
              key={index}
              active={sort && sort.includes(item) ? 'primary' : 'default'}
            />
          ))}
      </div>
      {loader ? (
        <Box className="containerLoader">
          <CircularProgress />
        </Box>
      ) : (
        <div className="ContainerEntries">
          {entries ? (
            entries.map((item, index) => (
              <Entries
                API={item.API}
                Category={item.Category}
                Description={item.Description}
                Auth={item.Auth}
                Cors={item.Cors}
                HTTPS={item.HTTPS}
                Link={item.Link}
                onDelete={handleDeleteClick}
                key={index}
              />
            ))
          ) : (
            <Box className="containerLoader">
              <p>Ничего не найдено. Попробуйте настроить другие фильтры</p>
            </Box>
          )}
        </div>
      )}
    </SMainPage>
  );
};

export default observer(MainPage);
