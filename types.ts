type MediaType = "movie" | "tv";

interface Media {
  id: number;
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

interface MovieResponse {
  results: Movie[];
}

interface TvResponse {
  results: Tv[];
}

type MovieTv = Movie | Tv

interface SearchResponse {
  results: (MovieTv)[];
}