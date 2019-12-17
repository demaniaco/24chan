import React from "react";
import Boards from "../components/boards/boards";
import TopImagen from '../components/TopImagen/TopImagen';
import Noticas from '../components/noticia/noticia';
import Info from '../components/info/info';
import Anuncio from '../components/anuncio/anuncio';
export const HomePage = () => {
  return (
    <div>
      <TopImagen></TopImagen>
      <Anuncio></Anuncio>
      <Boards></Boards>
      <Noticas></Noticas>
      <Info></Info>
    </div>
  );
};
