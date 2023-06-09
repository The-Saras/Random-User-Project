const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())


const Fnames = [
    // Names from India
    'Aarav',
    'Aanya',
    'Arjun',
    'Avnish',
    'Dev',
    'Divya',
    'Ishaan',
    'Kavya',
    'Rohan',
    'Saras',
    'Nayna',
    'Saniya',

    // Names from Russia
    'Dmitri',
    'Anastasia',
    'Ivan',
    'Natalia',
    'Vladimir',
    'Elena',
    'Maxim',
    'Sofia',
    'Nikolai',
    'Maria',

    // Names from Singapore
    'Ethan',
    'Chloe',
    'Kai',
    'Isabella',
    'Ryan',
    'Emily',
    'Zachary',
    'Sophia',
    'Adam',
    'Lily',

    // Names from France
    'Lucas',
    'Emma',
    'Noah',
    'Léa',
    'Gabriel',
    'Manon',
    'Arthur',
    'Camille',
    'Hugo',
    'Juliette',

    // Names from U.S.A
    'Liam',
    'Olivia',
    'Jackson',
    'Ava',
    'Mason',
    'Sophia',
    'Aiden',
    'Isabella',
    'Elijah',
    'Mia'
];


const lastNames = [
    // Last names from India
    'Patel',
    'Sharma',
    'Gupta',
    'Khan',
    'Singh',
    'Mehta',
    'Verma',
    'Joshi',
    'Desai',
    'Soni',

    // Last names from Russia
    'Ivanov',
    'Smirnov',
    'Popov',
    'Kuznetsov',
    'Volkov',
    'Sokolov',
    'Mikhailov',
    'Novikov',
    'Fedorov',
    'Morozov',

    // Last names from Singapore
    'Lee',
    'Tan',
    'Ng',
    'Lim',
    'Wong',
    'Chen',
    'Koh',
    'Chua',
    'Loh',
    'Teo',

    // Last names from France
    'Martin',
    'Bernard',
    'Dubois',
    'Thomas',
    'Robert',
    'Richard',
    'Petit',
    'Durand',
    'Leroy',
    'Moreau',

    // Last names from U.S.A
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Taylor',
    'Anderson'
];


const country = ["India","U.S.A","Sigapore","France","Germany","Russia"]
const cityNames = [
    // Cities from India
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Chennai',
    'Nashik',
    'Pune',

    // Cities from Russia
    'Moscow',
    'Saint Petersburg',
    'Novosibirsk',

    // Cities from Singapore
    'Singapore City',
    'Jurong East',
    'Woodlands',

    // Cities from France
    'Paris',
    'Marseille',
    'Lyon',

    // Cities from U.S.A
    'New York City',
    'Los Angeles',
    'Chicago'
];

const jobTitles = [
    'Software Engineer',
    'Data Analyst',
    'Graphic Designer',
    'Project Manager',
    'Accountant',
    'Sales Representative',
    'Marketing Coordinator',
    'Human Resources Manager',
    'Teacher',
    'Nurse',
    'Chef',
    'Electrician',
    'Plumber',
    'Writer',
    'Photographer'
];


app.get('/randomUser', (req, res) => {
    //getting random name
    const nameIndex = Math.floor(Math.random() * Fnames.length);
    const rndName = Fnames[nameIndex];

    //Getting random lastname
    const LnameIndex = Math.floor(Math.random() * lastNames.length);
    const rndLName = lastNames[LnameIndex];

    //Getting random Country.
    const countryIndex = Math.floor(Math.random() * country.length);
    const rndCnt = country[countryIndex];

    //Getting random City
    const CityIndex = Math.floor(Math.random() * cityNames.length);
    const rndCity = cityNames[CityIndex];

    //Getting random Profeesion
    const jobIndex = Math.floor(Math.random() * jobTitles.length);
    const rndJob = jobTitles[jobIndex];

    //Get age
    const min = 15;
    const max = 85;


    const age = Math.floor(Math.random() * (max - min + 1)) + min;

    const RandomUserProfile = {
        fName:rndName,
        lName:rndLName,
        country:rndCnt,
        city:rndCity,
        job:rndJob,
        age:age
    };
    return res.status(200).json(RandomUserProfile);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
