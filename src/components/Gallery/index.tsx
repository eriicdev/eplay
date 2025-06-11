import { useState } from "react";

import Section from "../Section";
import { GalleryItem } from "../../pages/Home";

import { Iten, ItensList, Action, Modal, ModalContent } from "./styles";

import spiderman from "../../assets/images/banner-homem-aranha.png";
import hogwarts from "../../assets/images/fundo-hogwarts.png";

import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import fechar from "../../assets/images/fechar.png";

const mock: GalleryItem[] = [
  {
    type: "image",
    url: spiderman,
  },
  {
    type: "image",
    url: hogwarts,
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/uHGShqcAHlQ?si=Bkkl1B7xmpJEYN4q",
  },
];

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
        <ItensList>
          {items.map((media, index) => (
            <Iten
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
              <Action>
                <img
                  src={getMediaItem(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Iten>
          ))}
        </ItensList>
      </Section>
      <Modal className={modal.isVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal();
              }}
            />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal();
          }}
        ></div>
      </Modal>
    </>
  );
};

export default Gallery;
