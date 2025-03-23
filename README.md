# DataFetcher R05

## Опис
Цей проєкт представляє собою React-компонент `DataFetcher`, який завантажує дані з сервера з використанням бібліотеки `axios`. Як приклад використовується API `https://jsonplaceholder.typicode.com/posts`, яке повертає список постів.

## Функціонал
- Виконує GET-запит до сервера під час першого рендеру.
- Відображає три стани:
    - **Завантаження**: показує повідомлення "Завантаження даних...".
    - **Успіх**: відображає отримані дані у вигляді списку.
    - **Помилка**: показує повідомлення про помилку, якщо запит не вдався.

## Технології
- React
- TypeScript
- Axios

## Встановлення та запуск
1. Клонуйте репозиторій:
   ```sh
   git clone https://github.com/nuhzdenegnetu/r05
   ```
2. Встановіть залежності:
   ```sh
   npm install
   ```
3. Запустіть проєкт:
   ```sh
   npm start
   ```

## Використання
Імпортуйте компонент `DataFetcher` і використовуйте його у вашому додатку:
