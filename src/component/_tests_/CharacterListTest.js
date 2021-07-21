
import React from 'react';
import renderer from 'react-test-renderer';
import { CharacterList } from '../CharacterList';

const defaultProps = {
    selectedCharacters:[
    "Luke Skywalker",
    "C-3PO",
    "R2-D2",
    "Darth Vader"]
};

test('Renders Correctly', () => {
  const tree = renderer.create(<CharacterList {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
