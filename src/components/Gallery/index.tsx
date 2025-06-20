import { useState } from "react";

import Section from "../Section";

import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import closeIcon from "../../assets/images/fechar.png";

import * as S from "./styles";

type Props = {
  defaultCover: string;
  name: string;
  items: GalleryItem[];
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url: "",
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };

  const getMediaItem = (item: GalleryItem) => {
    if (item.type === "image") return zoom;
    return play;
  };

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: "image",
      url: "",
    });
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <S.ItensList>
          {items.map((media, index) => (
            <S.Iten
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url,
                });
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaItem(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Iten>
          ))}
        </S.ItensList>
      </Section>
      <S.Modal className={modal.isVisible ? "is-visible" : ""}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal();
          }}
        ></div>
      </S.Modal>
    </>
  );
};

export default Gallery;
