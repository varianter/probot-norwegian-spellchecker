import initSpellchecker from "../src/spellcheck"

test("nb_NO Derp", () => {
    const spellchecker = initSpellchecker("nb_NO", "no", []);

    const misspelled = spellchecker("derp");
    expect(misspelled).toStrictEqual([{ text: "derp", start: 0, end: 4 }]);
})

test("nb_NO æøå", () => {
    const spellchecker = initSpellchecker("nb_NO", "no", []);

    const blueberryjam = spellchecker("blåbærsyltetøy");
    expect(blueberryjam).toStrictEqual([]);

    const bleubarrygem = spellchecker("blaubarstyltetaug")
    expect(bleubarrygem).toStrictEqual([{ text: "blaubarstyltetaug", start: 0, end: 17}])
})

test("en_US Derp", () => {
    const spellchecker = initSpellchecker("en_US", "en", []);

    const misspelled = spellchecker("derp");
    expect(misspelled).toStrictEqual([{ text: "derp", start: 0, end: 4 }]);
})

test("en_US Ignored words", () => {
    const spellchecker = initSpellchecker("en_US", "en", ["probot"]);

    const misspelled = spellchecker("A simple probot which will spellcheck.");
    expect(misspelled).toStrictEqual([]);
})