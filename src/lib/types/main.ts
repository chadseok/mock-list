export type PostData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CommentData = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type PersonalData = {
  id: number;
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: { bs: string; catchPhrase: string; name: string };
};

export type AlbumData = {
  userId: number;
  id: number;
  title: string;
};

export type PhotoData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
