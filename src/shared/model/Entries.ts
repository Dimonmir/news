interface IGetEntries {
  count: number;
  entries: IEntries[];
}

interface IEntries {
  API: string;
  Auth: string;
  Category: string;
  Cors: string;
  Description: string;
  HTTPS: boolean;
  Link: string;
}

export { type IGetEntries, type IEntries };
