import React from "react";
import { PostProps } from "./interfaces/InterfacePost";

/**
 * Component for displaying a post with title, description, and an associated image.
 * @param {PostProps} props - The props object.
 * @param {string} props.title - The title of the post.
 * @param {string} props.description - The description of the post.
 * @param {React.ReactNode} props.children - The associated image component.
 * @returns {JSX.Element} A PostChild component.
 */
export const PostChild: React.FC<PostProps> = ({ title, description, children }: PostProps): JSX.Element => {
  return (
    <>
      {children}
      <h3 className="yandex__post-title">
        <a href="/" className="yandex__post-link">
          {title}
        </a>
      </h3>
      <p className="yandex__post-description">{description}</p>
    </>
  );
};
