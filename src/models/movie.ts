import { type } from "os";

export default interface Movie {
    id: string,
    title: string,
    poster_path: string
    results: [{
        id: string
    }],
    overview: string
}
