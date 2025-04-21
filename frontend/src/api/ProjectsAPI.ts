import { EntertainerSummary } from '../types/EntertainerSummary';

export async function fetchEntertainers(): Promise<EntertainerSummary[]> {
  const res = await fetch('http://localhost:5012/api/entertainers');
  if (!res.ok) throw new Error('Failed to fetch entertainers');
  return res.json();
}
