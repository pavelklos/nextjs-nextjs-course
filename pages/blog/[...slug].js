import { useRouter, withRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  const { query, pathname } = router;
  const { slug } = query;
  // console.log("router", router);
  // console.log("query", query);

  return (
    <div>
      <h1>The Blog Posts Page</h1>
      <h3>
        pathname: <span className='router'>{pathname}</span>
      </h3>
      {query?.slug?.map((item, index) => {
        return (
          <h3 key={index}>
            query.slug[{index}]: <span className='router'>{item}</span>
          </h3>
        );
      })}
      <hr />
    </div>
  );
}

export default BlogPostsPage;
