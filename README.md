# TypeScript and Webpack

Создаем файл package.json

```
npm init --yes
```

Установим глобально webpack и webpack-cli

```
sudo npm install -g webpack
sudo npm install -g webpack-cli
```

Установим вспомогательные зависимости

```
npm install ts-loader --save
npm install path --save
npm install typescript --save
npm install webpack-cli --save
```

Установим фреймворк Express

```
npm install express --save
```

Установка

```
npm install
```

Запуск 

```
npm start
```

## Тестирование API

GET запрос на получение суммы чисел

```
curl 'http://localhost:5000/api/sum?a=12&b=7'
```

GET запрос на добавление элемента в массив

```
curl 'http://localhost:5000/api/push?a=15'
curl 'http://localhost:5000/api/push?a=1234'
curl 'http://localhost:5000/api/push?a=300'
```

GET запрос на получение всех элементов массива

```
curl 'http://localhost:5000/api/all'
```

POST запрос на получение суммы двух чисел

```
curl -d '{"a": 100, "b": -33}' 'http://localhost:5000/api/post/sum'
```

Попытка отправить некорректный POST запрос

```
curl -d 'bla bla bla' 'http://localhost:5000/api/post/sum'
```

