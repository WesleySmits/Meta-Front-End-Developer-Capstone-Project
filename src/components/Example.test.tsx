import { render, screen } from '@testing-library/react';

function Example() {
    return <div>Hello, Jest!</div>;
}

test('renders the component', () => {
    render(<Example />);
    expect(screen.getByText('Hello, Jest!')).toBeInTheDocument();
});
