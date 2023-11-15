import React from "react";
import NewsProps from "./interfaces/InterfaceNews";
import { CurrentDateChild } from "./CurrentDateChild";

/**
 * Render a news item
 * @param {NewsProps} props - The props object.
 * @param {string[]} props.activeTabsNews - The array of active tab names.
 * @param {Object[]} props.newsNames - The array of news items.
 * @param {string} props.newsNames.link - The link to the news item.
 * @param {string} props.newsNames.icon - The icon for the news item.
 * @param {string} props.newsNames.name - The name of the news item.
 * @returns {JSX.Element} A NewsChild component
 */
export const NewsChild: React.FC<NewsProps> = ({ activeTabsNews, newsNames }: NewsProps): JSX.Element => {
  const currentDate = new Date("2021-07-31T02:32:00");
  return (
    <>
      <div className="yandex__top-nav">
        <ul className="yandex__activenews-list">
          {activeTabsNews.map((tab, index) => (
            <li className={`yandex__activenews-item ${index === 0 ? "active" : ""}`} key={index}>
              <a className="yandex__activenews-link" href="/">
                {tab}
              </a>
            </li>
          ))}
        </ul>
        <CurrentDateChild date={currentDate}></CurrentDateChild>
      </div>
      <ul className="yandex__news-list">
        {newsNames.map((name, index) => (
          <li className="yandex__news-item" key={index}>
            <a className="yandex__news-link" href={name.link}>
              <span className="yandex__news-icon" style={{ backgroundImage: `url(${name.icon})` }}></span>
              {name.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
