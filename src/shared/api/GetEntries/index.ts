import { IGetEntries } from '@shared/model';
import axios from 'axios';

const getEntries = async (sort: string | null, ingore: string[]) => {
  let categories = sort ? `?category=${sort}` : '';
  try {
    const response = await axios.get(`https://api.publicapis.org/entries${categories}`);
    const data: IGetEntries = response.data;

    data.entries = data.entries.filter((item) => !ingore.includes(item.Link));
    return data;
  } catch (error) {
    console.error('Ошибка при запросе категорий:', error);
    return null;
  }
};

export default getEntries;
