export interface AppLink {
  link: string;
  name: string;
}

export const appLinks: { [key: string]: AppLink } = {
  explorer: {
    link: 'explorer',
    name: 'Обзор',
  },
  movies: {
    link: 'movies',
    name: 'Фильмы',
  },
  characters: {
    link: 'characters',
    name: 'Персонажи',
  },
  ships: {
    link: 'ships',
    name: 'Звездные корабли',
  },
  planets: {
    link: 'planets',
    name: 'Планеты',
  },
  race: {
    link: 'race',
    name: 'Расы',
  },
};
