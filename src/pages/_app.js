import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "./layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";
import { store } from "../store";
// import "flowbite";

function MyApp({ Component, pageProps }) {
  export const config = {
    unstable_runtimeJS: false,
  };
  // Loading
  NProgress.configure({
    showSpinner: false,
    trickleRate: 2,
    trickleSpeed: 60,
  });
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
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
