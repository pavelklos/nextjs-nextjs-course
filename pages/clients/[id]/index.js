import { useRouter, withRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  const { query, pathname } = router;
  const { id } = query;
  // console.log("router", router);
  // console.log("query", query);

  function loadProjectHandler() {
    // load data...
    // router.push("/clients");
    // router.push("/clients/max/projecta");
    // router.replace("/clients/max/projecta"); // CAN'T GO BACK
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Client Projects Page</h1>
      <h3>
        pathname: <span className='router'>{pathname}</span>
      </h3>
      <h3>
        id: <span className='router'>{id}</span>
      </h3>
      <hr />
      <button onClick={loadProjectHandler}>Load Project [A]</button>
    </div>
  );
}

export default ClientProjectsPage;
