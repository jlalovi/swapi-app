import { useEffect } from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import usePeople from 'hooks/usePeople';
import Pagination from 'components/Pagination';
import Card from 'components/Card';

export default function PeopleContainer({ search, page, setPage }) {
  const { people, isLoading } = usePeople({ search, page });
  useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);
  return (
    <>
      <ul>
        {people?.results?.map((person, key) => (
          <Card key={key} type="people" data={person} />
        ))}
      </ul>
      {people && (
        <Pagination
          page={page}
          setPage={setPage}
          totalItems={people.count}
          itemsInPage={10}
          itemsName="people"
          next={Boolean(people.next)}
          previous={Boolean(people.previous)}
        />
      )}
    </>
  );
}

PeopleContainer.propTypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
