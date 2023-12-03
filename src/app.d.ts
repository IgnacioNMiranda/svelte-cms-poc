// See https://kit.svelte.dev/docs/types#app

import type { PgPageProps } from './lib/components/page.types';

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			code: number;
			page: PgPageProps | null;
		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
