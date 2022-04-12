import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Render Loading Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
