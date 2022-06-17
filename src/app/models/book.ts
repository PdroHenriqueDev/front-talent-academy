export interface Book{
  id: number;
  user_id: number;
  title: string;
  description: string;
  release_date: Date | string | number;
}
