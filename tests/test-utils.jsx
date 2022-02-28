import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';

const Wrapper = ({ children }) => (
  <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
