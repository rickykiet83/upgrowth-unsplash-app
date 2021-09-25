export interface APIResponse<T> {
  results: T[];
  total: number,
  total_pages: number,
}