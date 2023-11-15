import React from "react";
import CurrencyRatesProps from "./interfaces/InterfaceExchangeRates";

/**
 * Render a currency-rates item
 * @param {CurrencyRatesProps} props - The props object.
 * @param {Object[]} props.currencyRates - The array of currency-rates items.
 * @param {string} props.currencyRates.currency - The currency to the currency-rates item.
 * @param {string} props.currencyRates.dynamics - The dynamics for the currency-rates item.
 * @param {string} props.currencyRates.rate - The rate of the currency-rates item.
 * @returns {JSX.Element} A currencyRatesChild component
 */
export const ExchangeRatesChild: React.FC<CurrencyRatesProps> = ({ currencyRates }: CurrencyRatesProps): JSX.Element => {
  return (
    <>
      <div className="yandex__exchangerates-wrapper">
        <ul className="yandex__exchangerates-list">
          {currencyRates.map((rate, index) => (
            <li className="yandex__exchangerates-item" key={index}>
              <strong className="yandex__exchangerates-currency">{rate.currency}</strong>
              <span className="yandex__exchangerates-rate">{rate.rate}</span>
              <span className="yandex__exchangerates-dynamics">{rate.dynamics}</span>
            </li>
          ))}
        </ul>
        <div className="yandex__exchangerates-ellipsis">
          <a className="yandex__exchangerates-ellipsis-link" href="/">
            ...
          </a>
        </div>
      </div>
    </>
  );
};
