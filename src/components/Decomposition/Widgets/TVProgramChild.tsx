import React from "react";
import { TVProgramProps } from "../interfaces/InterfaceWidgets";

/**
 * TVProgramChild component.
 * @param {TVProgramProps} props - The props object.
 * @param {string} props.title - The title of the TVChannel widget.
 * @param {Array} props.items - The array of TVChannel items.
 * @param {string} props.items[].time - The time of the TVChannel item.
 * @param {string} props.items[].name - The name of the TVChannel item.
 * @param {string} props.items[].TVСhannel - The TVСhannel of the TVChannel item.
 * @returns {JSX.Element} The TVProgramChild component.
 */
export const TVProgramChild: React.FC<TVProgramProps> = ({ title, items }: TVProgramProps): JSX.Element => {
  return (
    <div className="yandex__widget-tvprograms">
      <h2 className="yandex__widget-tvprograms-title">
        <a className="yandex__widget-tvprograms-title-link" href="/">
          {title}
        </a>

        <a className="yandex__widget-tvprograms-link-ether " href="/">
          <span className="yandex__widget-tvprograms-link-ether-span-right-arrow"></span>
          <span className="yandex__widget-tvprograms-link-ether-span">Эфир</span>
        </a>
      </h2>
      <ul className="yandex__widget-tvprograms-list">
        {items.map(({ time, name, TVСhannel }, index) => {
          return (
            <li className="yandex__widget-tvprograms-item" key={index}>
              <a href="/" className="yandex__widget-tvprograms-link">
                <span className="yandex__widget-tvprograms-link-time">{time}</span>
                <span className="yandex__widget-tvprograms-link-name">{name}</span>
                <span className="yandex__widget-tvprograms-link-tvchannel">{TVСhannel}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TVProgramChild;
