import React from "react";
import { PostImgProps } from "./interfaces/InterfacePost";

/**
 * Component for displaying an image within a post.
 * @param {PostImgProps} props - The props object.
 * @param {string} props.src - The URL of the image.
 * @param {string} props.alt - The alternate text for the image.
 * @returns {JSX.Element} A PostImgChild component.
 */
export const PostImgChild: React.FC<PostImgProps> = ({ src, alt }: PostImgProps): JSX.Element => {
  return (
    <div className="yandex__post-img-container">
      <img className="yandex__post-img" src={src} alt={alt} />
    </div>
  );
};
