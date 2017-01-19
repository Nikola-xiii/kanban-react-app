import React from 'react';
import assert from 'assert';
import Editable from '../app/components/Editable';

describe('Editable', function () {
  it('renders value', function () {
      const value = 'value';
      const component = new Editable({value});

      assert.equal(component.props.children, value);
    });
});
