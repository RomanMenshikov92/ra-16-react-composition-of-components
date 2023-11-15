import React from "react";
import { VisitedProps } from "../interfaces/InterfaceWidgets";

/**
 * VisitedChild component.
 * @param {VisitedProps} props - The props object.
 * @param {string} props.title - The title of the visited widget.
 * @param {Array} props.items - The array of visited items.
 * @param {string} props.items[].term - The term of the visited item.
 * @param {string} props.items[].definition - The definition of the visited item.
 * @returns {JSX.Element} The VisitedChild component.
 */
export const VisitedChild: React.FC<VisitedProps> = ({ title, items }: VisitedProps): JSX.Element => {
  return (
    <div className="yandex__widget-visited">
      <h2 className="yandex__widget-visited-title">
        <a className="yandex__widget-visited-title-link" href="/">
          {title}
        </a>
      </h2>
      <ul className="yandex__widget-visited-list">
        {items.map(({ term, definition }, index) => {
          return (
            <li className="yandex__widget-visited-item" key={index}>
              <a href="/" className="yandex__widget-visited-link">
                <strong className="yandex__widget-visited-link-strong">{term}</strong>
                {definition}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VisitedChild;
