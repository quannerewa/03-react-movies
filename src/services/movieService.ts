import axios from "axios";
import type { Movie } from "../types/movie";


interface MoviesHttpResponse {
    results: Movie[];
    page: number;
    total_pages: number;
}




export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const myKey = import.meta.env.VITE_TMDB_TOKEN;

    const response = await axios.get<MoviesHttpResponse>(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
        params: {},
        headers: { Authorization: `Bearer ${myKey}`, }
    });

    return response.data.results;
}
