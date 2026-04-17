export interface Post {
  _id: string;
  title?: string;
  content: string;
  images?: { url: string }[];
  _createdAt: string;
  likes?: number;
  comments?: number;
}