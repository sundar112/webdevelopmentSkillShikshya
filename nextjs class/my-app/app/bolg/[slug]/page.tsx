import SingleBlog from "./_Component/SingleBlog";

async function Page({ params, }: {
    params: Promise<{ slug: string }>

}) {

    const { slug } = await params

    return (
        <div>
            <SingleBlog slug={slug} />
            <h1>hello my name is sundar and this page is from app/blog/slug/page</h1>
            <h2>this is slug: {slug}</h2>
        </div>
    );
}

export default Page;