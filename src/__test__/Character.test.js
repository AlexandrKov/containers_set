import Character from "../js/Character";

test("Имя(строка) персоанажа", () => {
    expect(() => new Character(7, "Bowman")).toThrow()
})

test("Проверка на кол-во символов(2)", () => {
    expect(() => new Character("c", "Bowman")).toThrow()
})

test("Проверка на тип", () => {
    expect(() => new Character("Oleg", "BoBo")).toThrow()
})

test("Проверка на кол-во символов(10)", () => {
    expect(() => new Character("abcdifjklmnop", "Bowman")).toThrow()
})