import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';
// import UserAccount from './UserAccount';

// it('renders without crashing', () => {
//   shallow(<App />);
// });

// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h1>Welcome to Cash Bank</h1>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

// it("don't render User Account Page as first", () => {
// 	const wrapper = shallow(<App />);
// 	const user_account = <UserAccount />;
// 	expect(wrapper.contains(user_account)).toBe(false);
// });