import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from 'styled-components';
const YoutubeDiv = styled.div`
display:flex;
position:fixed;
bottom:0;
right:30px;
min-height:200px;
min-width:200px;
background:pink;
`;

const Portal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    createPortal(children, el)
    return () => mount.removeChild(el);
  }, [el, mount]);

  return (<YoutubeDiv>
    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video'
    />
  </YoutubeDiv>

  )
};
export default Portal;
