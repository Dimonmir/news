import { IEntries, IGetEntries } from '@shared/model';
import axios from 'axios';

const getEntries = async (sort: string | null, ingore: string[]) => {
  let categories = sort ? `?category=${sort}` : '';
  try {
    const response = await axios.get(`https://api.publicapis.org/entries${categories}`);
    const data: IGetEntries = response.data;

    data.entries = data.entries.filter((item) => !ingore.includes(item.Link));
    const res:IEntries[] = data.entries.map((item)=>{
      const backgoundRand = '/background' + Math.floor(Math.random() * 7 + 1) + '.jpg';

      return {
        API: item.API,
        Auth: item.Auth,
        Category: item.Category,
        Cors: item.Cors,
        Description: item.Description,
        HTTPS: item.HTTPS,
        Img: backgoundRand,
        Link: item.Link,
      }
    })
    return res;
  } catch (error) {
    console.error('Ошибка при запросе категорий:', error);
    return null;
  }
};

export default getEntries;
