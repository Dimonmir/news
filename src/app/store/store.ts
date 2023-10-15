import { createContext, useContext } from 'react';
import { createModelSchema, list, primitive } from 'serializr';
import { makeAutoObservable } from 'mobx';
import { create } from 'mobx-persist';

class StockStore {
  sort: string[] = [];
  ignore: string[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSort(str: string) {
    this.sort.push(str);
  }

  removeSort(str: string) {
    this.sort = this.sort.filter((item) => item !== str);
  }

  setIgnore(str: string) {
    this.ignore.push(str);
  }
}

createModelSchema(StockStore, {
  sort: list(primitive()),
  ignore: list(primitive()),
});

const stockStore = new StockStore();
const stockStoreContext = createContext(stockStore);

const hydrate = create({ storage: localStorage });

// Подключение MobX-хранилища к `mobx-persist`
hydrate('stockStore', stockStore);

export const useStockStore = () => useContext(stockStoreContext);
