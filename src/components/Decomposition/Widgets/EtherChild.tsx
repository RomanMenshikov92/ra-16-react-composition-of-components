import React from "react";
import { EtherProps } from "../interfaces/InterfaceWidgets";

/**
 * EtherChild component.
 * @param {EtherProps} props - The props object.
 * @param {string} props.title - The title of the Ether widget.
 * @param {Array} props.items - The array of Ether items.
 * @param {string} props.items[].name - The name of the Ether item.
 * @param {string} props.items[].TVСhannel - The TVСhannel of the Ether item.
 * @returns {JSX.Element} The EtherChild component.
 */
export const EtherChild: React.FC<EtherProps> = ({ title, items }: EtherProps): JSX.Element => {
  return (
    <div className="yandex__widget-ether">
      <h2 className="yandex__widget-ether-title">
        <a className="yandex__widget-ether-title-link" href="/">
          {title}
        </a>
      </h2>
      <ul className="yandex__widget-ether-list">
        {items.map(({ name, TVСhannel }, index) => {
          return (
            <li className="yandex__widget-ether-item" key={index}>
              <a href="/" className="yandex__widget-ether-link">
                <span className="yandex__widget-ether-link-right-arrow"></span>
                <span className="yandex__widget-ether-link-name">{name}</span>
                <span className="yandex__widget-ether-link-tvchannel"> {TVСhannel}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EtherChild;
