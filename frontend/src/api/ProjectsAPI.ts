import { Entertainer } from '../types/Entertainer';

const API_URL = 'http://localhost:5012/api/entertainers';

export async function fetchEntertainers(): Promise<Entertainer[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch entertainers');
  return res.json();
}
