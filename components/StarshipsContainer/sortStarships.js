import {
  DEFAULT,
  NAME_DESC,
  NAME_ASC,
  CARGO_DESC,
  CARGO_ASC,
} from 'constants/vehicleSortOptions';
import { sortObjects } from 'utils/sort';

export const sortStarships = (starships, sortValue) => {
  if (sortValue === DEFAULT) return starships;
  if (sortValue === NAME_DESC) return sortObjects(starships, 'name', 'desc');
  if (sortValue === NAME_ASC) return sortObjects(starships, 'name', 'asc');
  if (sortValue === CARGO_DESC)
    return sortObjects(starships, 'cargo_capacity', 'desc');
  if (sortValue === CARGO_ASC)
    return sortObjects(starships, 'cargo_capacity', 'asc');
};
