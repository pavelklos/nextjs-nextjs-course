import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <hr />
      <ul>
        <li>
          <Link href='/clients/max'>Maximilian</Link>
        </li>
        <li>
          <Link href='/clients/manu'>Manuel</Link>
        </li>
        <li>
          <Link href={{ pathname: "/clients/[id]", query: { id: "bob" } }}>
            Bob
          </Link>
        </li>
      </ul>
      <hr />
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;

// <Link href={`/clients/${client.id}`}>{client.name}</Link>;
