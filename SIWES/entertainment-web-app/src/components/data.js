const data = [
    // {
    //     id:1,
    //     categoryicon: '../assets/Movie-cards/Inline-movie-icon',
    //     category: "Movie",
    //     year: 2019,
    //     MPAA: "PG",
    //     name: "Beyond Earth", 
    //     Image: '../assets/Movie-cards/Beyond-Earth.svg'
    // },
    // {
    //     id:2,
    //     categoryicon: '../assets/Movie-cards/Inline-movie-icon',
    //     category: "Movie",
    //     year: 2021,
    //     MPAA: "PG", 
    //     name: "Bottom Gear", 
    //     Image: '../assets/Movie-cards/Bottom Gear.svg'
    // },
    // {
    //     id:3,
    //     categoryicon: '../assets/Movie-cards/Inline-TV-icon',
    //     category: "TV Series",
    //     year: 2019,
    //     MPAA: "PG",
    //     name: "Unresolved Cases", 
    //     Image: '../assets/Movie-cards/Unresolved Cases.svg'
    // },
    // {
    //     id:4,
    //     categoryicon: '../assets/Movie-cards/Inline-movie-icon',
    //     category: "Movie",
    //     year: 2021,
    //     MPAA: "18+",
    //     name: 1998, 
    //     Image: '../assets/Movie-cards/1998.svg'
    // },
    // {
    //     id:5,
    //     categoryicon: '../assets/Movie-cards/Inline-movie-icon',
    //     category: "Movie",
    //     year: 2018,
    //     MPAA: "18+",
    //     name: "Dark Side of the Moon",
    //     Image: '../assets/Dark Side of the Moon.svg'
    // },
    {
        id:6,
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2019, 
        MPAA: "E", 
        name: "The Great Lands", 
        Image: '../assets/Movie-cards/The Great Lands.svg'
    },
    {
        id:7, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series", 
        year: 2019, 
        MPAA: "PG", 
        name: "The Diary", 
        Image: '../assets/Movie-cards/The Diary.svg'
    },
    {
        id:8, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "18+", 
        name: "Earth's Untouched", 
        Image: '../assets/Movie-cards/Earths Untouched.svg'
    },
    {
        id:9, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2019, 
        MPAA: "E", 
        name: "No Land Beyond", 
        Image: '../assets/Movie-cards/No Land Beyond.svg'
    },
    {
        id:10, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2016, 
        MPAA: "PG", 
        name: "During The Hunt", 
        Image: '../assets/Movie-cards/During the Hunt.svg'
    },
    {
        id:11, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2016, 
        MPAA: "18+", 
        name: "Autosport the Series", 
        Image: '../assets/Movie-cards/Autosport the Series.svg'
    },
    {
        id:12, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "E", 
        name: "Same Answer II", 
        Image: '../assets/Movie-cards/Same Answer II.svg'
    },
    {
        id:13, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2016, 
        MPAA: "PG", 
        name: "Below Echo", 
        Image: '../assets/Movie-cards/Below Echo.svg'
    },
    {
        id:14, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2015, 
        MPAA: "E", 
        name: "The Rockies", 
        Image: '../assets/Movie-cards/The Rockies.svg'
    },
    {
        id:15, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "PG", 
        name: "Relentless", 
        Image: '../assets/Movie-cards/Relentless.svg'
    },
    {
        id:16, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2018, 
        MPAA: "18+", 
        name: "Community of Ours", 
        Image: '../assets/Movie-cards/Community of Ours.svg'
    },
    {
        id:17, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "PG", 
        name: "Van Life", 
        Image: '../assets/Movie-cards/Van Life.svg'
    },
    {
        id:18, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2021, 
        MPAA: "PG", 
        name: "The Heiress", 
        Image: '../assets/Movie-cards/The Heiress.svg'
    },
    {
        id:19, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "18+", 
        name: "Off the Track", 
        Image: '../assets/Movie-cards/Off the Track.svg'
    },
    {
        id:20, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "E", 
        name: "Whispering Hill", 
        Image: '../assets/Movie-cards/Whispering Hill.svg'
    },
    {
        id:21, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "TV Series",
        year: 2013, 
        MPAA: "PG", 
        name: "112", 
        Image: '../assets/Movie-cards/112.svg'
    },
    {
        id:22, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "E", 
        name: "Lone Heart", 
        Image: '../assets/Movie-cards/Lone Heart.svg'
    },
    {
        id:23, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2018, 
        MPAA: "PG", 
        name: "Production Line", 
        Image: '../assets/Movie-cards/Production Line.svg'
    },
    {
        id:24, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2016, 
        MPAA: "PG", 
        name: "Dogs", 
        Image: '../assets/Movie-cards/Dogs.svg'
    },
    {
        id:25, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2020, 
        MPAA: "PG", 
        name: "Asia in 24 Days", 
        Image: '../assets/Movie-cards/Asia in 24 Days.svg'
    },
    {
        id:26, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2016, 
        MPAA: "PG", 
        name: "The Tasty Tour", 
        Image: '../assets/Movie-cards/The Tasty Tour.svg'
    },
    {
        id:27, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "18+", 
        name: "Darker", 
        Image: '../assets/Movie-cards/Darker.svg'
    },
    {
        id:28, 
        categoryicon: '../assets/Movie-cards/Inline-TV-icon',
        category: "TV Series",
        year: 2018, 
        MPAA: "18+", 
        name: "Unresolved Cases", 
        Image: '../assets/Movie-cards/Unresolved Cases.svg'
    },
    {
        id:29, 
        categoryicon: '../assets/Movie-cards/Inline-movie-icon',
        category: "Movie",
        year: 2017, 
        MPAA: "PG", 
        name: "Mission: Saturn", 
        Image: '../assets/Movie-cards/Mission; Saturn.svg'
    }

]

export default data;
   