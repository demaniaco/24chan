import React from "react";
import TopImagen from "../components/TopImagen/TopImagen";
import Anuncio from "../components/anuncio/anuncio";
import Prueba from "../components/prueba/prueba";
export const TablonPage = ({ imagen }) => {
  return (
    <div>
      <TopImagen></TopImagen>
      <Anuncio></Anuncio>
      <Prueba></Prueba>
    </div>
  );
};
