import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
export { RouteGuard };
import jwt_decode from "jwt-decode";

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

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
    if (!token) {
      setAuthorized(false);
      router.replace({ pathname: "/login" });
    } else {
      const decoded = jwt_decode(token);
      const Isadmin = decoded.userType === "BranchAdmin";
      const hasAccess = decoded.roles.some((role) => {
        const route = router.pathname.replace("/", "");
        const link = role.path.toLowerCase();
        return link === route;
      });

      if (hasAccess || Isadmin) {
        setAuthorized(true);
      } else {
        return router.replace({ pathname: "/unauthorized" });
      }
    }
  }

  return authorized && children;
}
