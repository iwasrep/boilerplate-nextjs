import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    render(<Main />)
    /*  expect(screen.getByRole('heading', { name: /Under Construction/i})
    ).toBeInTheDocument() */
    /* expect(container.firstChild).toMatchSnapshot() */
  })
})
