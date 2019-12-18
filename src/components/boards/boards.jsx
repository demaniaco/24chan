import React from "react";
import "./estilo.css";

function Boards() {
  return (
    <div class="containe">
      <div class="Boards">
        <div class="p1">
          <ul>
            <h3>cultura Asiáticas</h3>
            <li>
              <a href="/Anime">Anime & Manga</a>
            </li>
            <li>
              <a href="/otakuculture">otaku culture</a>
            </li>
            <li>
              <a href="/AnimationandComics">Animation and Comics</a>
            </li>
            <li>
              <a href="/DrawingandArt">Drawing and Art</a>
            </li>
          </ul>
        </div>
        <div class="p2">
          <ul>
            <h3>intereses</h3>
            <li>
              <a href="/Comicsanddrawings">Comics and drawings</a>
            </li>
            <li>
              <a href="/Music">Music</a>
            </li>
            <li>
              <a href="/GamesandRolePlaying">Games and Role Playing</a>
            </li>
            <li>
              <a href="/CinemaandSeries">Cinema and Series</a>
            </li>
            <li>
              <a href="/Sports">Sports</a>
            </li>
            <li>
              <a href="/Alternativesports">Alternative sports</a>
            </li>
            <li>
              <a href="/youcutyourselfwithapieceofpaper">
                {" "}
                you cut yourself with a piece of paper{" "}
              </a>
            </li>
          </ul>
        </div>
        <div class="p3">
          <ul>
            <h3>creatividad</h3>
            <li>
              <a href="/Photography">Photography</a>
            </li>
            <li>
              <a href="/Foodandcooking">Food and cooking</a>
            </li>
            <li>
              <a href="/Wallpapers">Wallpapers</a>
            </li>
            <li>
              <a href="/Literature">Literature</a>
            </li>
            <li>
              <a href="/Moda">Moda</a>
            </li>
            <li>
              <a href="/GraphicDesign">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div class="p4">
          <ul>
            <h3>Sexy</h3>
            <li>
              <a href="/SexyGirls">Sexy Girls</a>
            </li>
            <li>
              <a href="/hentai">Hentai</a>
            </li>
            <li>
              <a href="/ecchi">ecchi</a>
            </li>
            <li>
              <a href="/AdultGIF">GIF para adulto</a>
            </li>
            <li>
              <a href="/yuri">Yuri</a>
            </li>
            <li>
              <a href="/yaoi">Yaoi</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Boards;
