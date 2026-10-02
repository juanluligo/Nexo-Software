import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import type { SiteContent } from './types/content';

const content: SiteContent = { projects: [], services: [], process: [] };

describe('App', () => {
  it('shows an error state when the content request fails', async () => {
    render(<App loadContent={vi.fn().mockRejectedValue(new Error('offline'))} />);

    expect(await screen.findByText(/no pudimos cargar/i)).toBeVisible();
  });

  it('renders the main page after content loads', async () => {
    render(<App loadContent={vi.fn().mockResolvedValue(content)} />);

    expect(await screen.findByRole('main')).toBeVisible();
  });
});
