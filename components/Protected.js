import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import nProgress from "nprogress";

export default function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const token = getCookie("token");
  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      // check the router and show nprogress if route is not protected
      if (router.pathname.replace("/", "") === "login") {
        // check the router and show nprogress if route is not protected
        router.events.off("routeChangeStart", hideContent);
        router.events.off("routeChangeComplete", authCheck);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/login"] || ["/"];
    const path = url.split("?")[0];
    if (!token && !publicPaths.includes(path)) {
      // check the router and show nprogress if route is not protected
      router.push("/login");
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    }
    //  show nprogress if route is not protected
    if (!publicPaths.includes(path)) {
      nProgress.start();
    }
    // hide nprogress if route is protected
    if (publicPaths.includes(path)) {
      nProgress.done();
    }
    // set authorized to true if logged in
  }

  return authorized && children;
}
