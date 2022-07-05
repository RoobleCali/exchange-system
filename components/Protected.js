import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
export { RouteGuard };

function RouteGuard({ children, link, path }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setloading] = useState(false);

  const token = getCookie("token");
  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.off("routeChangeStart", hideContent);
    router.events.off("routeChangeComplete", authCheck);
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);
  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/login"] || ["/"];
    const path = url.split("?")[0];
    if (!token && !publicPaths.includes(path) && path !== link) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}
