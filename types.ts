type MediaType = "movie" | "tv";

interface Media {
  id: number;
  external_ids: {
    imdb_id: string;
  };
  media_type: MediaType;
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