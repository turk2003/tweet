import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>detail{router.query.id}</h1>
    </div>
  );
}
