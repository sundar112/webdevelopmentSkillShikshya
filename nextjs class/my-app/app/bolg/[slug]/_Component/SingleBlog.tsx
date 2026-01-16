"use client"
import { fetchAlbums } from "@/services/instance";
import { useEffect, useState } from "react";

export default function SingleBlog({ slug }: { slug: string | number }) {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect
        (() => {
            fetchAlbums(`blog/${slug}`).then(data => {
                console.log("this is single", data);
                setBlogs(data || []);
                setLoading(false);
            });
        }, [slug]);
    console.log("this is single blog data", blogs)
    return (
        <>
            <h1>Single Blog</h1>
        </>
    )
}