export const SORTOPTIONS = [
    {
        id:0,
        name: "brak",
        field: "id",
        order: "asc",
        type: "number",
    },
    {
        id:1,
        name: "Nazwa ciasta",
        field: "name",
        order: "asc",
        type: "string",
    },
    {
        id:2,
        name: "cena rosnąco",
        field: "price",
        order: "asc",
        type: "number",
    },
    {
        id:3,
        name: "cena malejąco",
        field: "price",
        order: "desc",
        type: "number",
    },
];

export const YESNOSELECT = [
    {
        id:1,
        name: "Tak",
        value: true,
    },
    {
        id:2,
        name: "Nie",
        value: false,
    },
];

export const GENDERSELECT = [
    {
        id:0,
        name: "kobieta",
        value: "female",
    },
    {
        id:1,
        name: "mężczyzna",
        value: "male",
    },
    {
        id:2,
        name: "nie podaję",
        value: "other",
    },

]

export const USERTYPE =[
    {
        id:0,
        name: "użytkownik",
        value: "user", 
    },
    {
        id: 1,
        name: "cukiernik",
        value: "cook",
    }
]