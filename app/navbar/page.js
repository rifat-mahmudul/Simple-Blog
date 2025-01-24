import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Navbar() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="bg-gray-700 w-full text-white shadow-md pt-2 pb-2">
      <div className="p-2  md:container mx-auto flex justify-between items-center  ">
        <div className="text-2xl font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <LogoutLink>
                <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">
                  Logout
                </button>
              </LogoutLink>
            </div>
          ) : (
            <LoginLink>
              <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-700">
                Login
              </button>
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
}
