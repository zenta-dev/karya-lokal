import { prisma } from "database";
enum Role {
  USER,
  ADMIN,
}
export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
