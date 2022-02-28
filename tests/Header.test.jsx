import Header from '../components/Header';
import { render } from './test-utils';

describe('Header component', () => {
  test('Header renders with props', async () => {
    const titleTest = 'title test';
    const childrenTest = 'children test';
    const { getByText } = render(
      <Header title={titleTest}>
        <p>{childrenTest}</p>
      </Header>
    );
    const ImperialHeader = getByText(/Imperial destroyers center/i);
    const title = getByText(titleTest);
    const childrenContent = getByText(childrenTest);
    expect(ImperialHeader).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(childrenContent).toBeInTheDocument();
  });
});
