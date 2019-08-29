import { combineReducers } from "redux";

const songsList = () => {
  return [
    { title: "If to say na just me", duration: "4:05" },
    { title: "Gbamu Gbamu", duration: "3:05" },
    { title: "Covenant keeping God", duration: "11:10" },
    { title: "Smile", duration: "5:00" }
  ];
};

const selectedSong = (song = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return song;
};

export default combineReducers({
  songsList,
  selectedSong,
});
