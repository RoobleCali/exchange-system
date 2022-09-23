import { removeCookies } from "cookies-next";
import { useRouter } from "next/router";

const Logout = () => {
  const Router = useRouter();
  // write head login and remove  cookie
  Router.replace("/login");
  new Promise((resolve) => {
    removeCookies("token");
  }).then(() => {
    removeCookies();
  });
};

export default Logout;
