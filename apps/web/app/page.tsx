
import {client} from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      name1 :{user?.username},
      password :{user?.password}
    </div>
  );
}
