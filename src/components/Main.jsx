import * as React from "react";
import { Route, Routes } from "react-router";
import GamesList from "./GamesList";
import Home from "./Home";
import LetterGame from "./LettersGame/LetterGame";
import MemotestEmojis from "./MemotestGame/MemotestEmojis";
import MemotestMcQueen from "./MemotestGame/MemotestMcQueen";
import MemotestPocoyo from "./MemotestGame/MemotestPocoyo";
import NotFound from "./NotFound";
import NumbersGame from "./NumbersGame/NumbersGame";
import NumbersListGame from "./NumbersGame/NumbersListGame";

export default () => (
  <div className="container">
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route exact={true} path="/games" element={<GamesList />} />
      <Route exact={true} path="/games/1" element={<NumbersGame />} />
      <Route exact={true} path="/games/2" element={<NumbersListGame />} />
      <Route exact={true} path="/games/3" element={<LetterGame />} />
      <Route exact={true} path="/games/4" element={<MemotestMcQueen />} />
      <Route exact={true} path="/games/5" element={<MemotestPocoyo />} />
      <Route exact={true} path="/games/6" element={<MemotestEmojis />} />
      <Route element={NotFound} />
    </Routes>
  </div>
);
