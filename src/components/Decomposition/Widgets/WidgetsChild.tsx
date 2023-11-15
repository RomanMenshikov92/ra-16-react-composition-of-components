import React from "react";
import WidgetsProps from "../interfaces/InterfaceWidgets";

/**
 * WidgetsChild component.
 * @component
 * @param {WidgetsProps} props - The component props.
 * @param {React.ReactNode} props.children - The children nodes to be rendered.
 * @returns {JSX.Element} The rendered component.
 */
export const WidgetsChild: React.FC<WidgetsProps> = ({ children }: WidgetsProps): JSX.Element => {
  const columnCount = 3;
  const columns: React.ReactNode[][] = Array.from({ length: columnCount }, () => []);

  React.Children.forEach(children, (widget, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(widget);
  });
  return (
    <>
      {columns.map((column, columnIndex) => (
        <div className="yandex__widget-column" key={columnIndex}>
          {column.map((widget, widgetIndex) => (
            <div className="yandex__widget-container" key={widgetIndex}>
              {widget}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
