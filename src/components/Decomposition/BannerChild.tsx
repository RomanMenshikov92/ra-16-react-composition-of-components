import React from "react";
import BannerProps from "./interfaces/InterfaceBanner";

/**
 * Component for displaying the banner.
 * @param {BannerProps} props - The props object.
 * @param {string} props.src - The URL of the image.
 * @param {string} props.alt - The alternate text for the image.
 * @returns {JSX.Element} A BannerProps component.
 */
export const BannerChild: React.FC<BannerProps> = ({ src, alt }: BannerProps): JSX.Element => {
  return (
    <div className="yandex__banner-container">
      <img className="yandex__banner-img" src={src} alt={alt} />
    </div>
  );
};
