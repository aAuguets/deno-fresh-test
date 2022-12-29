export interface HeaderPostType {
  title: string;
  date: Date;
}

export interface ContentPostType {
  body: string;
}

export interface Post extends HeaderPostType, ContentPostType {
  id: string;
  excerpt: string;
}
export interface PostCardType extends HeaderPostType {
  id: string;
}
