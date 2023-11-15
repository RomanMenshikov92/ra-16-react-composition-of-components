import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "./components/Cards";
import { YandexPage } from "./components/Decomposition";
import { Collapse } from "./components/Collapse";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Карточки</h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Card title="Card title" image="https://via.placeholder.com/150">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </Card>
          </div>
          <div className="col-md-4">
            <Card title="Special title treatment">
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - Декомпозиция</h2>
        <YandexPage></YandexPage>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Collapse</h2>
        <Collapse>
          <p>Содержимое, которое можно развернуть или свернуть</p>
        </Collapse>
      </div>
    </>
  );
}

export default App;

// 1. App - главный компонент приложения, содержащий все остальные компоненты.
// 2. Header - компонент, отображающий заголовок страницы.
// 3. Navigation - компонент, отображающий навигационное меню.
// 4. Main - компонент, содержащий основное содержимое страницы.
// 5. Sidebar - компонент, отображающий боковую панель.
// 6. NewsList - компонент, отображающий список новостей.
// 7. NewsItem - компонент, отображающий отдельную новость.
// 8. Icon - компонент, отображающий иконку.
// 9. Text - компонент, отображающий текст.
// 10. Link - компонент, отображающий ссылку.
