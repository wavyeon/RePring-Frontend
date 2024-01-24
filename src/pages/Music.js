import { useLocation } from "react-router-dom";
import { MusicDetail } from "../components/MusicDetail";

export function MusicPage() {
  const location = useLocation();
  const music = location.state.music;
  return (
    <>
      <MusicDetail music={music}/>
    </>
  );
}
