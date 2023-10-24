import Home from './page'
import {render, screen} from '@testing-library/react'

test('should render the main page', () => {
    render(<Home></Home>);

    expect(screen.getByText('Hello ISU!')).toBeVisible();
});

test('should render a button that says "press me"', () => {
    render(<Home></Home>);

    expect(screen.getByRole('button', {name: 'Press Me'})).toBeVisible();
});