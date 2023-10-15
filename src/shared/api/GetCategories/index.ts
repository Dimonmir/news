import { IGetCategories } from '@shared/model';
import axios from 'axios';

const getCategories = async () => {
  try {
    const response = await axios.get(`https://api.publicapis.org/categories`);
    const data: IGetCategories = response.data;
    return data;
  } catch (error) {
    console.error('Ошибка при запросе категорий:', error);
    return null;
  }
};

export default getCategories;
