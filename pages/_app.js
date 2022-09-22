import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "./Layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";
import { store } from "../redux/Store2";

function MyApp({ Component, pageProps }) {
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
