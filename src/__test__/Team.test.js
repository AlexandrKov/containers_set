import Character from "../js/Character";
import Team from "../js/Team";

test("new team", () => {
    const team = new Team();
    const result = { members: new Set() }
    expect(team).toEqual(result)
})

test("added pers", () => {
    const pers = new Character("Alex", "Zombie");
    const team = new Team();
    team.add(pers)
    const result = {
        members: new Set([{
          name: 'Alex',
          type: "Zombie"
        }]),
      };
    expect(team).toEqual(result)
})

test("", () => {
    const pers = new Character("Alex", "Zombie");
    const team = new Team();
    team.add(pers)

    expect(() => team.add(pers)).toThrow("Не повторяйтесь")
})

test("addAll", () => {
    const team = new Team();
    const pers1 = new Character("Alex", "Zombie");
    const pers2 = new Character("Ivan", "Zombie");
    const pers3 = new Character("Oleg", "Zombie");
    expect(() => team.addAll(pers1, pers2, pers3)).not.toThrow()
})

test("toArray", () => {
    const team = new Team();
    const pers1 = new Character("Nik", "Zombie");
    const pers2 = new Character("Ivan", "Zombie");
    const pers3 = new Character("Oleg", "Zombie");
    team.add(pers1)
    team.add(pers2)
    team.add(pers3)
    expect(team.toArray()).toEqual([pers1, pers2, pers3])
})