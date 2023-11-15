import React from "react";
import "./css/yandexpage.css";
import "./css/reset.css";
import DataYandexJson from "./Data/DataYandexPage.json";
import { NewsChild } from "./NewsChild";
import { ExchangeRatesChild } from "./ExchangeRatesChild";
import { PostChild } from "./PostChild";
import { PostImgChild } from "./PostImgChild";
import { SearchChild } from "./SearchChild";
import { BannerChild } from "./BannerChild";
import { LogoChild } from "./LogoChild";
import { WidgetsChild } from "./Widgets/WidgetsChild";
import { WeatherChild } from "./Widgets/WeatherChild";
import { MapChild } from "./Widgets/MapChild";
import { EtherChild } from "./Widgets/EtherChild";
import { VisitedChild } from "./Widgets/VisitedChild";
import { TVProgramChild } from "./Widgets/TVProgramChild";

/**
 * YandexPage component.
 * Renders the Yandex page with news and exchange rates.
 *
 * @returns {JSX.Element} The rendered YandexPage component.
 */
export const YandexPage = (): JSX.Element => {
  const { activeTabsNews, newsNames, currencyRates, categoriesSearch, visited, mapItems, ether, TVProgram, weather } = DataYandexJson;
  return (
    <div className="yandex__wrapper">
      <header className="yandex__header">
        <div className="yandex__header-left">
          <NewsChild activeTabsNews={activeTabsNews} newsNames={newsNames}></NewsChild>
          <ExchangeRatesChild currencyRates={currencyRates}></ExchangeRatesChild>
        </div>
        <div className="yandex__header-right">
          <PostChild title="Работа над ошибками" description="Смотрите на Яндексе и запоминайте">
            <PostImgChild src="https://a.d-cd.net/0uz2sWXnSqYrpJ9zwekk63sT51o-1920.jpg" alt="Работа над ошибками"></PostImgChild>
          </PostChild>
        </div>
      </header>
      <main className="yandex__main">
        <div className="yandex__main-top">
          <LogoChild src="https://spb.hse.ru/pubs/share/direct/291053564.jpg" alt="Логотип Яндекс"></LogoChild>
          <SearchChild
            categoriesSearch={categoriesSearch}
            NameSearch="Найти"
            NameExampleSearch="Найдётся всё. Например,"
            ExampleSearch="фаза луны сегодня"
          ></SearchChild>
        </div>
        <div className="yandex__main-bottom">
          <BannerChild src="https://i.ytimg.com/vi/jfvmQCCXkrA/maxresdefault.jpg" alt="Баннер - Форсаж: Хобс и Шоу"></BannerChild>
        </div>
      </main>
      <footer className="yandex__footer">
        <WidgetsChild>
          <WeatherChild title="Погода" items={weather}></WeatherChild>
          <MapChild title="Карта Германии" items={mapItems}></MapChild>
          <EtherChild title="Эфир" items={ether}></EtherChild>
          <VisitedChild title="Посещаемое" items={visited}></VisitedChild>
          <TVProgramChild title="Телепрограмма" items={TVProgram}></TVProgramChild>
        </WidgetsChild>
      </footer>
    </div>
  );
};
