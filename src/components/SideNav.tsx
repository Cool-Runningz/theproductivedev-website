import usePathname from "@hooks/usePathname";
import avatar from "@images/avatar.png";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar sticky top-0 h-screen w-16 shrink-0 overflow-y-auto border-r border-slate-200 md:w-24 dark:border-slate-800">
      <div className="flex h-full flex-col justify-between after:mt-auto after:flex-1">
        <div className="flex-1">
          {pathname !== "/" && (
            <div className="my-4 flex justify-center">
              <a href="/">
                <img
                  className="rounded-full"
                  src={avatar.src}
                  width={32}
                  height={32}
                  alt="Avatar"
                  loading="eager"
                />
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-1 grow items-center">
          <nav className="w-full">
            <ul className="space-y-4">
              {/* Home */}
              <li className="py-2">
                <a
                  href="/"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname !== "/about" &&
                    pathname !== "/subscribe" &&
                    pathname !== "/projects" &&
                    pathname !== "/resume"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}>
                  <span className="sr-only">Home</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="19">
                    <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                    <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
                  </svg>
                </a>
              </li>

              {/* About */}
              <li className="py-2">
                <a
                  href="/about"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/about"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}>
                  <span className="sr-only">About</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20">
                    <path
                      fillOpacity=".16"
                      d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                    />
                    <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                  </svg>
                </a>
              </li>

              {/* Projects */}
              <li className="py-2">
                <a
                  href="/projects"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/projects"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}>
                  <span className="sr-only">Projects</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20">
                    <path fillOpacity=".16" d="M1 4h18v10H1z" />
                    <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
                  </svg>
                </a>
              </li>

              {/* Resume */}
              <li className="py-2">
                <a
                  href="/resume"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/resume"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}>
                  <span className="sr-only">Resume</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20">
                    <path
                      fillOpacity=".16"
                      fillRule="nonzero"
                      d="M1 5h16v14H1z"
                    />
                    <path
                      fillRule="nonzero"
                      d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
                    />
                  </svg>
                </a>
              </li>

              {/* Subscribe */}
              <li className="py-2">
                <a
                  href="/subscribe"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/subscribe"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}>
                  <span className="sr-only">Subscribe</span>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21">
                    <path fillOpacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z" />
                    <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
