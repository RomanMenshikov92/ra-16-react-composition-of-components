import React from "react";
import { MapProps } from "../interfaces/InterfaceWidgets";

/**
 * MapChild component.
 * @param {MapProps} props - The props object.
 * @param {string} props.title - The title of the Map widget.
 * @param {Array} props.items - The array of Map items.
 * @param {string} props.items[].content - The content of the Map item.
 * @returns {JSX.Element} The TVProgramChild component.
 */
export const MapChild: React.FC<MapProps> = ({ title, items }: MapProps): JSX.Element => {
  return (
    <div className="yandex__widget-map">
      <h2 className="yandex__widget-map-title">
        <a className="yandex__widget-map-title-link" href="/">
          {title}
        </a>
      </h2>
      <ul className="yandex__widget-map-list">
        {items.map(({ content }, index) => {
          return (
            <li className="yandex__widget-map-item" key={index}>
              <a href="/" className="yandex__widget-map-link">
                {content}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MapChild;
