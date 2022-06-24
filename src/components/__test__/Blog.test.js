import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Blog from '../Blog'

const blog = {
  title: 'A new blog post',
  author: 'Some person',
  url: 'https://example.com',
  likes: 5,
  user: {
    name: 'A person',
    username: 'aperson'
  }
}

const user = {
  name: 'A Person',
  username: 'aperson',
  token: 'abc'
}

describe('<Blog />', () => {
  let component

  beforeEach(() => {
    component = render(<Blog blog={blog} user={user} setBlog={() => {}} />)
  })

  test('renders title and author', () => {
    expect(component.container).toHaveTextContent('A new blog post')
    expect(component.container).toHaveTextContent('Some person')
  })

  test('doesnt render likes and url, shows them after button click', () => {
    const viewBtn = component.queryByText('view')
    const likes = component.queryByText('likes 5')
    const url = component.queryByText('https://example.com')
    expect(likes).not.toBeVisible()
    expect(url).not.toBeVisible()
    fireEvent.click(viewBtn)
    expect(likes).toBeVisible()
    expect(url).toBeVisible()
  })
})
