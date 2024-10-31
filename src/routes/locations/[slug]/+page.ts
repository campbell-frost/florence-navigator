import { error } from '@sveltejs/kit';
import { locations } from '$lib/data/locations';

interface RouteParams {
  slug: string;
}

export const load = ({ params }: { params: RouteParams }) => {
  const location = locations[params.slug];

  if (!location) {
    throw error(404, 'Location not found');
  }

  return {
    location
  };
}
