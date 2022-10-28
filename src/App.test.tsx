import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer();

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render correctly', async () => {
    server.use(
      rest.get(
        'http://localhost:3001/persons',
        (request, response, context) => {
          return response(
            context.status(200),
            context.json([
              {
                id: 33,
                firstName: 'Heloise',
                lastName: 'Vandervort',
                birthdate: '1942-05-12T05:49:02.557Z',
                street: '268 Rosie Port Suite 454',
                city: 'Waterbury',
                zipCode: '49858-5684',
              },
            ])
          );
        }
      )
    );
    render(<App />);

    await screen.findAllByTestId('firstName');
    expect(screen.getByTestId('firstName')).toHaveTextContent('Heloise');

    // @todo fixme
  });
});
