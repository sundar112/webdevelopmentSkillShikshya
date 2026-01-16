'use client';

import { useState, useEffect } from 'react';
import { fetchAlbums } from '@/services/instance'; // Adjust path based on your structure
import Link from 'next/link';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlbums('blog').then(data => {
            setBlogs(data.results || []);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-xl text-gray-600">Loading blogs...</div>
            </div>
        );
    }

    console.log(blogs);


    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Blog Posts
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog: any) => (
                        <Link href={"bolg/" + blog.slug}>
                            <div
                                key={blog.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {blog.image && (
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}

                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                                        {blog.title}
                                    </h2>

                                    {blog.description && (
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {blog.description}
                                        </p>
                                    )}

                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        {blog.author && (
                                            <span className="font-medium">By {blog.author}</span>
                                        )}
                                        {blog.date && (
                                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                                        )}
                                    </div>

                                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {blogs.length === 0 && (
                    <div className="text-center text-gray-600 mt-12">
                        No blog posts found.
                    </div>
                )}
            </div>
        </div>
    );
}