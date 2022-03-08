import { render } from '@testing-library/react'

import Manutention from '.'

describe('<Manutention />', () => {
  it('Should render the heading', () => {
    render(<Manutention />)
    /*  expect(screen.getByRole('heading', { name: /Under Construction/i})
    ).toBeInTheDocument() */
    /* expect(container.firstChild).toMatchSnapshot() */
  })
})
