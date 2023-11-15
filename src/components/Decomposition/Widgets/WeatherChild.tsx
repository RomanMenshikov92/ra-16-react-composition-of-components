import React from "react";
import { WeatherProps } from "../interfaces/InterfaceWidgets";

/**
 * WeatherChild component.
 * @param {WeatherProps} props - The component props.
 * @param {string} props.title - The title of the weather widget.
 * @param {Array} props.items - The list of weather items to be displayed.
 * @param {string} props.items.isPrecipitationSrc - The source of the precipitation image.
 * @param {string} props.items.isPrecipitationAlt - The alternative text for the precipitation image.
 * @param {string} props.items.temperatureCurrent - The current temperature.
 * @param {string} props.items.temperatureMorning - The temperature in the morning.
 * @param {string} props.items.temperatureAfternoon - The temperature in the afternoon.
 * @returns {JSX.Element} - The rendered WeatherChild component.
 */
export const WeatherChild: React.FC<WeatherProps> = ({ title, items }: WeatherProps): JSX.Element => {
  return (
    <div className="yandex__widget-weather">
      <h2 className="yandex__widget-weather-title">
        <a className="yandex__widget-weather-title-link" href="/">
          {title}
        </a>
      </h2>
      <div className="yandex__widget-weather-map">
        {items.map((item) => {
          return (
            <div className="yandex__widget-weather-current">
              <div>
                <img className="yandex__widget-weather-current-img" src={item.isPrecipitationSrc} alt={item.isPrecipitationAlt} />
                <span className="yandex__widget-weather-current-temperature">{item.temperatureCurrent}</span>
              </div>
              <div className="yandex__widget-weather-current-temperature-wrapper">
                <span className="yandex__widget-weather-morning">Утром{item.temperatureMorning},</span>
                <span className="yandex__widget-weather-afternoon">Днём{item.temperatureAfternoon}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherChild;
