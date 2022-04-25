1. Вставка данных о книгах в коллекцию books

db.books.insertOne(
    {
        title: "Мартин Иден",
        description: "Какое-то описание",
        authors: "Джек Лондон"
    }
)

 db.books.insertMany(
    [
      { title: "Мартин Иден", description: "Какое-то описание", authors: "Джек Лондон" },
      { title: "Сердца трех", description: "Какое-то описание", authors: "Джек Лондон" },
      { title: "Любовь к жизни", description: "Какое-то описание", authors: "Джек Лондон" },
    ] 
);


2. Поиск полей документов по полю title

db.books.find(
    { title: "Мартин Иден" }
)


3. Редактирование полей: description и authors по _id записи

db.books.updateOne(
    { _id : id },
    { $set: { description: description, authors: authors } }
)