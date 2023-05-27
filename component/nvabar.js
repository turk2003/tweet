import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const hello = () => {
    // alert("hello");
    const action = confirm("เอาป่าว");
    if (action) {
      router.push("/login");
    } else {
      router.push("/");
    }
  };
  return (
    <nav className="  bg-blue-300 flex flex-row  justify-center  gap-5    p-4 fixed left-0 right-0">
      <div className="p-4">
        <Link href="/">Home</Link>
      </div>
      <div className="p-4">
        <Link href="/login">Login</Link>
      </div>
      <div>
        <button className="bg-black p-4" onClick={() => hello()}>
          what
        </button>
      </div>
    </nav>
  );
}
