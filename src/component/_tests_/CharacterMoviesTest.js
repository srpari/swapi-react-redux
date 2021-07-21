
import React from 'react';
import renderer from 'react-test-renderer';
import { CharacterMovies } from '../CharacterMovies';

const defaultProps = {
    selectedMovies:[
    "A New Hope",
    "Attack of the Clones",
    "The Phantom Menace",
    "Revenge of the Sith"],    
};

test('Renders Correctly', () => {
  const tree = renderer.create(<CharacterMovies {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
