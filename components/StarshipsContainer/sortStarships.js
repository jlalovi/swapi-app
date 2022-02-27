import {
  DEFAULT,
  CREW_DESC,
  CREW_ASC,
  CARGO_DESC,
  CARGO_ASC,
} from 'constants/vehicleSortOptions';
import { sortObjects } from 'utils/sort';

export const sortStarships = (starships, sortValue) => {
  if (sortValue === DEFAULT) return starships;
  if (sortValue === CREW_DESC) return sortObjects(starships, 'crew', 'desc');
  if (sortValue === CREW_ASC) return sortObjects(starships, 'crew', 'asc');
  if (sortValue === CARGO_DESC)
    return sortObjects(starships, 'cargo_capacity', 'desc');
  if (sortValue === CARGO_ASC)
    return sortObjects(starships, 'cargo_capacity', 'asc');
};
