const data = [
    // {
    //     id:1,
    //     categoryicon: '../Movie-cards/Inline-movie-icon.svg',
    //     category: "Movie",
    //     year: 2019,
    //     MPAA: "PG",
    //     name: "Beyond Earth", 
    //     Image: '/Movie-cards/BeyondEarth.svg'
    // },
    // {
    //     id:2,
    //     categoryicon: '../Movie-cards/Inline-movie-icon.svg',
    //     category: "Movie",
    //     year: 2021,
    //     MPAA: "PG", 
    //     name: "Bottom Gear", 
    //     Image: '/Movie-cards/BottomGear.svg'
    // },
    // {
    //     id:3,
    //     categoryicon: '../Movie-cards/Inline-TV-icon.svg',
    //     category: "TV Series",
    //     year: 2019,
    //     MPAA: "PG",
    //     name: "Unresolved Cases", 
    //     Image: '/Movie-cards/UnresolvedCases.svg'
    // },
    // {
    //     id:4,
    //     categoryicon: '../Movie-cards/Inline-movie-icon.svg',
    //     category: "Movie",
    //     year: 2021,
    //     MPAA: "18+",
    //     name: 1998, 
    //     Image: '/Movie-cards/1998.svg'
    // },
    // {
    //     id:5,
    //     categoryicon: '../Movie-cards/Inline-movie-icon.svg',
    //     category: "Movie",
    //     year: 2018,
    //     MPAA: "18+",
    //     name: "Dark Side of the Moon",
    //     Image: '/DarkSideoftheMoon.svg'
    // },
    {
        id:6,
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2019, 
        MPAA: "E", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "The Great Lands", 
        Image: '/Movie-cards/TheGreatLands.svg'
    },
    {
        id:7, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series", 
        year: 2019, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "The Diary", 
        Image: '/Movie-cards/TheDiary.svg'
    },
    {
        id:8, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "18+", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Earth's Untouched", 
        Image: '/Movie-cards/EarthsUntouched.svg'
    },
    {
        id:9, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2019, 
        MPAA: "E", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "No Land Beyond", 
        Image: '/Movie-cards/NoLandBeyond.svg'
    },
    {
        id:10, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2016, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "During The Hunt", 
        Image: '/Movie-cards/DuringtheHunt.svg'
    },
    {
        id:11, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2016, 
        MPAA: "18+", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Autosport the Series", 
        Image: '/Movie-cards/AutosporttheSeries.svg'
    },
    {
        id:12, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "E", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Same Answer II", 
        Image: '/Movie-cards/SameAnswerII.svg'
    },
    {
        id:13, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2016, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Below Echo", 
        Image: '/Movie-cards/BelowEcho.svg'
    },
    {
        id:14, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2015, 
        MPAA: "E", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "The Rockies", 
        Image: '/Movie-cards/TheRockies.svg'
    },
    {
        id:15, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Relentless", 
        Image: '/Movie-cards/Relentless.svg'
    },
    {
        id:16, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2018, 
        MPAA: "18+", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Community of Ours", 
        Image: '/Movie-cards/CommunityofOurs.svg'
    },
    {
        id:17, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Van Life", 
        Image: '/Movie-cards/VanLife.svg'
    },
    {
        id:18, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2021, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "The Heiress", 
        Image: '/Movie-cards/TheHeiress.svg'
    },
    {
        id:19, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "18+", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Off the Track", 
        Image: '/Movie-cards/OfftheTrack.svg'
    },
    {
        id:20, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "E", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Whispering Hill", 
        Image: '/Movie-cards/WhisperingHill.svg'
    },
    {
        id:21, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "TV Series",
        year: 2013, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "112", 
        Image: '/Movie-cards/112.svg'
    },
    {
        id:22, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "E", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Lone Heart", 
        Image: '/Movie-cards/LoneHeart.svg'
    },
    {
        id:23, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2018, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Production Line", 
        Image: '/Movie-cards/ProductionLine.svg'
    },
    {
        id:24, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2016, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Dogs", 
        Image: '/Movie-cards/Dogs.svg'
    },
    {
        id:25, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2020, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Asia in 24 Days", 
        Image: '/Movie-cards/Asiain24Days.svg'
    },
    {
        id:26, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2016, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "The Tasty Tour", 
        Image: '/Movie-cards/TheTastyTour.svg'
    },
    {
        id:27, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "18+", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Darker", 
        Image: '/Movie-cards/Darker.svg'
    },
    {
        id:28, 
        categoryicon: '../Movie-cards/Inline-TV-icon.svg',
        category: "TV Series",
        year: 2018, 
        MPAA: "18+", 
        bookmark: '../Movie-cards/Inline-bookmark-icon.svg',
        name: "Unresolved Cases", 
        Image: '/Movie-cards/UnresolvedCases.svg'
    },
    {
        id:29, 
        categoryicon: '../Movie-cards/Inline-movie-icon.svg',
        category: "Movie",
        year: 2017, 
        MPAA: "PG", 
        bookmark: '../Movie-cards/Inline-bookmark-checked-icon.svg',
        name: "Mission: Saturn", 
        Image: '/Movie-cards/MissionSaturn.svg'
    }

]

export default data;
   