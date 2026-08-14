import { describe, it, expect } from 'vitest';
import { SELF } from 'cloudflare:test';

describe('Kokyu Tech static site worker', () => {
	it('serves the exported site at the root', async () => {
		const response = await SELF.fetch('https://example.com/');
		expect(response.status).toBe(200);
		const html = await response.text();
		expect(html).toContain('Kokyu Tech');
	});
});
