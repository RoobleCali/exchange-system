import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "./Layout/";
import { wrapper } from "../redux/store";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
function MyApp({ Component, pageProps }) {
  NProgress.configure({
    showSpinner: false,
    trickleRate: 2,
    trickleSpeed: 60,
  });
  // check on route change if user is logged in or not and redirect to login page if not logged in and not on login page

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <RouteGuard> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </RouteGuard> */}
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
