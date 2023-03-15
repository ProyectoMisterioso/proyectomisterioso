import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState(" ");

  const artists = [
    "Pablo Picasso",
    "Frida Kahlo",
    "Diego Velazquez",
    "Salvador Dali",
    "Jean-Michael Basquiat",
    "Diego  Rivera",
    "Francisco Goya",
    "Jose Clemente Orozco",
    "Fernando Botero",
    "Joan Miro",
  ];

  const art = [
    "Abstracto",
    "Impresionismo",
    "Cubismo",
    "Surrealismo",
    "Realismo",
  ];

  const nouns = [
    "Carro",
    "Gato",
    "Pero",
    "Caja",
    "Agua",
    "Bano",
    "Cama",
    "Pan",
  ];

  const adjectives = [
    "Grande",
    "Pequeno",
    "Largo",
    "Corto",
    "Robot",
    "Energia",
    "Inteligente",
    "Fuerte",
  ];

  function MuseoDeCerra() {
    setResponse(artists[Math.floor(Math.random() * artists.length)]);
  }

  function Autorretrato() {
    setResponse(art[Math.floor(Math.random() * art.length)]);
  }

  function TanqueDeTiburones() {
    setResponse(
      nouns[Math.floor(Math.random() * nouns.length)] +
        " " +
        adjectives[Math.floor(Math.random() * adjectives.length)]
    );
  }

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
        <img src="ProyectoMisteriosoBlack.png" />
        <h2>
          Este proyecto puede darle una idea para tu proyecto de la clase de
          espa&ntilde;ol.
        </h2>
        <div className="grid">
          <div>
            <h3>Museo de Cerra</h3>
            <button onClick={MuseoDeCerra} />
            <img src="Picasso.jpg" />
          </div>
          <div>
            <h3>Autorretrato</h3>
            <button onClick={Autorretrato} />
            <img src="Frida.jpg" />
          </div>
          <div>
            <h3>Tanque de Tiburones</h3>
            <button onClick={TanqueDeTiburones} />
            <img src="Sharks.jpg" />
          </div>
        </div>
        <h1>{response}</h1>
      </main>
    </>
  );
}
