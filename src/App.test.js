import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  window.location.hash = '';
});

test.each(['', '#/story'])('renders the wedding page at %s', (hash) => {
  window.location.hash = hash;
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Sakonwan & Nattaphong' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Open Maps' })).toHaveAttribute(
    'href',
    'https://maps.app.goo.gl/F9x4tKpACCn6ms9i9'
  );
  expect(screen.getByAltText('Sakonwan and Nattaphong')).toHaveAttribute(
    'src',
    `${process.env.PUBLIC_URL}/img/unda-80.jpg`
  );
});

test('renders and flips the invitation at the card route', () => {
  window.location.hash = '#/card';
  render(<App />);

  const card = screen.getByRole('button', { name: 'Flip wedding invitation card' });
  expect(card).not.toHaveClass('flipped');
  fireEvent.click(card);
  expect(card).toHaveClass('flipped');
  fireEvent.click(card);
  expect(card).not.toHaveClass('flipped');
});

test('renders social embeds at the hashtag route', () => {
  window.location.hash = '#/hashtag';
  const { container } = render(<App />);

  expect(container.querySelectorAll('.instagram-media')).toHaveLength(3);
  expect(screen.getByTitle('ma1')).toHaveAttribute(
    'src',
    expect.stringContaining('https://www.facebook.com/plugins/video.php')
  );
  expect(document.querySelector('script[src="//www.instagram.com/embed.js"]')).toBeInTheDocument();
});
