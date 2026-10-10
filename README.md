# GeoSim GitHub Pages

Готовый статический сайт для `geosim.online`.

## Файлы

- `index.html`
- `styles.css`
- `script.js`
- `CNAME`

## Как запустить на GitHub Pages

1. Создай репозиторий, например `geosim-site`.
2. Загрузи все файлы из архива в корень репозитория.
3. Открой `Settings -> Pages`.
4. Выбери `Deploy from a branch`.
5. Branch: `main`.
6. Folder: `/ (root)`.

Файл `CNAME` уже содержит:

`geosim.online`

## Важно

Не меняй DNS-записи:

- `vpn.geosim.online`
- `sub.geosim.online`

Они используются WolfVPN.

Для GitHub Pages нужно будет настроить только основной домен `geosim.online` и, если захочешь, `www.geosim.online`.

## IP Minecraft-сервера

Сейчас на сайте стоит:

```js
const SERVER_ADDRESS = "geosim.online";
```

Если IP/домен Minecraft другой — поменяй эту строку в `script.js`.
