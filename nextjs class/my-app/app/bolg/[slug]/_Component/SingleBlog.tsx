"use client"
import { fetchAlbums } from "@/services/instance";
import { useEffect, useState } from "react";

export default function SingleBlog({ slug }: { slug: string | number }) {
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlbums(`blog/${slug}`).then(data => {
            console.log("this is single", data);
            setBlog(data || null);
            setLoading(false);
        });
    }, [slug]);

    console.log("this is single blog data", blog);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Loading blog...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Blog not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Featured Image */}
                    {blog.featured_image && (
                        <img
                            src={blog.featured_image}
                            alt={blog.title}
                            className="w-full h-96 object-cover"
                        />
                    )}

                    <div className="p-8">
                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {blog.title}
                        </h1>

                        {/* Excerpt */}
                        {blog.excerpt && (
                            <p className="text-xl text-gray-600 mb-6 italic">
                                {blog.excerpt}
                            </p>
                        )}

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b">
                            {blog.author && (
                                <span className="font-medium">By {blog.author}</span>
                            )}
                            {blog.publish_date && (
                                <span>Published: {new Date(blog.publish_date).toLocaleDateString()}</span>
                            )}
                            {blog.read_time && (
                                <span>{blog.read_time} min read</span>
                            )}
                            {blog.category && blog.category.length > 0 && (
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                                    {blog.category[0].name || 'Category'}
                                </span>
                            )}
                        </div>

                        {/* Blog Content - HTML description */}
                        {blog.description && (
                            <div
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: blog.description }}
                            />
                        )}

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-8 pt-6 border-t">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag: any, index: number) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag.name || tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Info */}
                        {blog.team_member && (
                            <div className="mt-8 pt-6 border-t flex items-center gap-4">
                                {blog.team_member.image && (
                                    <img
                                        src={blog.team_member.image}
                                        alt={blog.team_member.full_name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                )}
                                <div>
                                    <p className="font-semibold text-gray-900">
                                        {blog.team_member.full_name}
                                    </p>
                                    {blog.team_member.bio && (
                                        <p className="text-sm text-gray-600">
                                            {blog.team_member.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
}