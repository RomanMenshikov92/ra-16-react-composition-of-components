import React from "react";
import LogoProps from "./interfaces/InterfaceLogo";

/**
 * Component for displaying the logo.
 * @param {LogoProps} props - The props object.
 * @param {string} props.src - The URL of the image.
 * @param {string} props.alt - The alternate text for the image.
 * @returns {JSX.Element} A LogoProps component.
 */
export const LogoChild: React.FC<LogoProps> = ({ src, alt }: LogoProps): JSX.Element => {
  return (
    <div className="yandex__logo-container">
      <img className="yandex__logo-img" src={src} alt={alt} />
    </div>
  );
};
