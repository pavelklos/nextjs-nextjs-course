import { useRouter, withRouter } from "next/router";

function ClientOverviewPage() {
  const router = useRouter();
  const { query, pathname } = router;
  const { id } = query;
  // console.log("router", router);
  // console.log("query", query);

  return (
    <div>
      <h1>The Client Overview Page</h1>
      <h3>
        pathname: <span className='router'>{pathname}</span>
      </h3>
      <h3>
        id: <span className='router'>{id}</span>
      </h3>
      <hr />
    </div>
  );
}

export default ClientOverviewPage;
