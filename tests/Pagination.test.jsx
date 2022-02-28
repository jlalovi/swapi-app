import { fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';
import { render } from './test-utils';

const mockSetPage = jest.fn();

describe('Pagination component', () => {
  test('with no buttons', async () => {
    const { getByText, queryByRole } = render(
      <Pagination
        page={1}
        setPage={mockSetPage}
        totalItems={100}
        itemsInPage={10}
        itemsName="testItems"
        next={false}
        previous={false}
      />
    );
    const legend = getByText(/1 to 10 of 100 testItems/i);
    const nextButton = queryByRole('next-page-button');
    const previousButton = queryByRole('previous-page-button');
    expect(legend).toBeInTheDocument();
    expect(nextButton).toBeNull();
    expect(previousButton).toBeNull();
  });
  test('with both buttons', async () => {
    const { getByText, queryByRole } = render(
      <Pagination
        page={4}
        setPage={mockSetPage}
        totalItems={50}
        itemsInPage={10}
        itemsName="testItems"
        next
        previous
      />
    );
    const legend = getByText(/4 to 5 of 50 testItems/i);
    const nextButton = queryByRole('next-page-button');
    const previousButton = queryByRole('previous-page-button');
    expect(legend).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
  });
  test('trigger next', async () => {
    const page = 4;
    const { getByRole } = render(
      <Pagination
        page={page}
        setPage={mockSetPage}
        totalItems={50}
        itemsInPage={10}
        itemsName="testItems"
        next
        previous
      />
    );
    const nextButton = getByRole('next-page-button');
    fireEvent.click(nextButton);
    expect(mockSetPage).toHaveBeenCalledWith(page + 1);
  });
  test('trigger previous', async () => {
    const page = 4;
    const { getByRole } = render(
      <Pagination
        page={page}
        setPage={mockSetPage}
        totalItems={50}
        itemsInPage={10}
        itemsName="testItems"
        next
        previous
      />
    );
    const previousButton = getByRole('previous-page-button');
    fireEvent.click(previousButton);
    expect(mockSetPage).toHaveBeenCalledWith(page - 1);
  });
});
