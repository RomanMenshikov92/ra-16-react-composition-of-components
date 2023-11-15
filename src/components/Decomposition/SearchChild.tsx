import React from "react";
import SearchProps from "./interfaces/InterfaceSearch";

/**
 * SearchChild component for displaying search functionality with categories, input, and example search.
 * @param {SearchProps} props - The props object.
 * @param {string[]} props.categoriesSearch - Array of search categories.
 * @param {string} props.NameSearch - Name for the search button.
 * @param {string} props.NameExampleSearch - Name for the example search.
 * @param {string} props.ExampleSearch - Example search text.
 * @returns {JSX.Element} A SearchChild component.
 */
export const SearchChild: React.FC<SearchProps> = ({ categoriesSearch, NameSearch, NameExampleSearch, ExampleSearch }: SearchProps): JSX.Element => {
  return (
    <div className="yandex__search">
      <nav className="yandex__search-nav">
        <ul className="yandex__search-list">
          {categoriesSearch.map((category, index) => {
            return (
              <li className="yandex__search-item active" key={index}>
                <a href="/" className="yandex__search-link">
                  {category}
                </a>
              </li>
            );
          })}
          <li className="search-nav-menu__item">
            <a href="/" className="yandex__search-link">
              ещё
            </a>
          </li>
        </ul>
      </nav>
      <form className="yandex__search-bar">
        <label className="yandex__search-label" htmlFor="search-bar-input"></label>
        <input className="yandex__search-input" id="search-bar-input" type="text" name="search-bar-input" placeholder="" required />
        <button className="yandex__search-btn" type="submit">
          {NameSearch}
        </button>
      </form>
      <p className="yandex__search-example">
        {NameExampleSearch}
        <span className="yandex__search-example-text">&nbsp;{ExampleSearch}</span>
      </p>
    </div>
  );
};
