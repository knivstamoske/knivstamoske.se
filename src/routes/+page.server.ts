import { getPrayerTimes } from '@thani-sh/prayer-time-se';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const times = await getPrayerTimes(new Date(), 'islamiskaforbundet', 'uppsala');

		return {
			prayerTimes: times
		};
	} catch (error) {
		console.error('Failed to load prayer times:', error);
		// Return null so the component can handle the error state
		return {
			prayerTimes: null
		};
	}
};
