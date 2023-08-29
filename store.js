import { reactive } from "vue";

export const store = reactive({
    movieList: [],
    tvList: [],
    moviesAPI: 'https://api.themoviedb.org/3/movie/popular?api_key=674396989b918314be769a74712b3d31&page=1',
    tvAPI: 'https://api.themoviedb.org/3/tv/popular?api_key=674396989b918314be769a74712b3d31&page=1',
    searchText:"",
})