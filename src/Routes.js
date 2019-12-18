import React from "react";
import { HomePage } from "./page/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TablonPage } from "./page/tablon";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/Anime" component={TablonPage} />
      <Route path="/otakuculture" component={TablonPage} />
      <Route path="/AnimationandComics" component={TablonPage} />
      <Route path="/DrawingandArt" component={TablonPage} />
      <Route path="/Comicsanddrawings" component={TablonPage} />
      <Route path="/Music" component={TablonPage} />
      <Route path="/GamesandRolePlaying" component={TablonPage} />
      <Route path="/CinemaandSeries" component={TablonPage} />
      <Route path="/Sports" component={TablonPage} />
      <Route path="/Alternativesports" component={TablonPage} />
      <Route path="/youcutyourselfwithapieceofpaper" component={TablonPage} />
      <Route path="/Photography" component={TablonPage} />
      <Route path="/Foodandcooking" component={TablonPage} />
      <Route path="/Wallpapers" component={TablonPage} />
      <Route path="/Literature" component={TablonPage} />
      <Route path="/GraphicDesign" component={TablonPage} />
      <Route path="/SexyGirls" component={TablonPage} />
      <Route path="/hentai" component={TablonPage} />
      <Route path="/ecchi" component={TablonPage} />
      <Route path="/AdultGIF" component={TablonPage} />
      <Route path="/yuri" component={TablonPage} />
      <Route path="/AdultGIF" component={TablonPage} />
      {/* <Route path="/board" component={Boards} /> */}
    </Router>
  );
};

export default Routes;
