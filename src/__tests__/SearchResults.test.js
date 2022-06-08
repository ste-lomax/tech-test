import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe("Search", () => {
    const { asFragment } = render(<SearchResults/>);
  
    it("renders correctly", () => {
      expect(asFragment()).toMatchSnapshot();
    });
  });