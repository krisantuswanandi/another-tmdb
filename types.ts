type MediaType = "movie" | "tv";

interface Media {
  id: number;
  media_type: MediaType;
  backdrop_path: string;
  poster_path: string;
}

interface Movie extends Media {
  title: string;
  media_type: "movie";
}

interface Tv extends Media {
  name: string;
  media_type: "tv";
}

interface MovieList {
  results: Movie[];
}

interface TvList {
  results: Tv[];
}

type MovieTv = Movie | Tv

interface SearchList {
  results: (MovieTv)[];
}

interface Person {
  id: number;
  name: string;
  profile_path: string | null;
}

interface Credit {
  credits: {
    cast: Person[];
    crew: Person[],
  };
}

interface Socials {
  imdb_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
}

interface ExternalIds {
  external_ids: Socials
}
