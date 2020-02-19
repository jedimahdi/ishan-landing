import React from 'react';
import {render} from '@testing-library/react'

test('works', () => {
  const {container} = render(<div>hi</div>)
  expect(container.firstChild).toHaveTextContent('hi')
})

