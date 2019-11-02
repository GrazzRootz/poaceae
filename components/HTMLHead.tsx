import Head from "next/head";

export const HTMLHead = () => (
    <>
  <Head>
    <title>GrazzRootz | Gardens in your Community</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Head>
      <style global>{`
              body {
                  margin: 0;
                  font-family: helvetica, arial;
                  background-color: #EEEEEE;
              }
              .main {
                  height: 100vh;
              }
      `}</style>
  </>
);
