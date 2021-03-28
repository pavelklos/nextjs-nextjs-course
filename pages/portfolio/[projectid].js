import { useRouter, withRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  const { query, pathname } = router;
  const { projectid } = query;
  // console.log("router", router);
  // console.log("query", query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <h3>
        pathname: <span className='router'>{pathname}</span>
      </h3>
      <h3>
        projectid: <span className='router'>{projectid}</span>
      </h3>
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum
        repellendus facere illum! Nulla blanditiis accusamus quas fuga iure
        harum autem et voluptatem, pariatur, dicta atque, debitis ipsum placeat
        totam facere. Quae culpa modi reprehenderit, perferendis consectetur
        cupiditate praesentium ipsum assumenda? Ab corrupti dolores iure. Veniam
        dicta, facere in laboriosam possimus cumque molestiae qui explicabo aut
        ut repellat, ullam repudiandae quis vel fugiat tempore eum hic rerum
        veritatis architecto, quos nesciunt suscipit sint? Eos, ea. Suscipit
        cupiditate pariatur ducimus accusantium vero magni quidem laboriosam
        nulla officiis sapiente eum, nemo sit assumenda magnam, neque accusamus
        iusto doloribus recusandae. Sint, ipsa. Expedita.
      </p>
    </div>
  );
}

export default PortfolioProjectPage;
