import { fetchAlbums } from "./instance";

export function  getAllBlogs(){
    return fetchAlbums('blog').then(data => {
                return data
            });
}

export function  getBlogById({id}: {id:number | string}){
    return fetchAlbums(`blog/${id}`).then(data => {
                return data
            });
}