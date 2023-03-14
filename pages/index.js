import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Proyecto Misterioso</title>
        <meta
          name="description"
          content="Este proyecto puede darle una idea para tu proyecto de la clase de espa&ntilde;ol."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Proyecto Misterioso</h1>
        <h2>
          Este proyecto puede darle una idea para tu proyecto de la clase de
          espa&ntilde;ol.
        </h2>
        <div className="grid-container">
          <div className="grid-item">Museo de Cerra</div>
          <div className="grid-item">Autorretratos</div>
          <div className="grid-item">Tanque de Tiburones</div>
        </div>
      </main>
    </>
  );
}
