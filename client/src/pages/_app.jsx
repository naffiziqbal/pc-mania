import "@/styles/globals.css";

import Layout from "./layout";
import { Provider, } from "react-redux";
import store from "@/redux/store";
import Head from "next/head";
import { Toaster } from "@/components/ui/sonner"

function App({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Pc Mania || A Shop Where You can Buy Your Dream Build</title>
        <meta charset="UTF-8" />
        <meta name="title" content=" PC Mania" />
        <meta name="keywords" content="laptop, desktop, mouse, keyboard" />
        <meta name="author" content="Nafiz Iqbal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Toaster />
        </Layout>
      </Provider>
    </div>
  );
}



export default App
