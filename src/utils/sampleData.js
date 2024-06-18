const sampleData = [
    {
        source: {
            id: "reuters",
            name: "Reuters"
        },
        author: "Reuters",
        title: "Ukraine summit strives for broad consensus to lean on Russia to end war - Reuters",
        description: null,
        url: "https://www.reuters.com/world/europe/ukraine-summit-strives-broad-consensus-lean-russia-end-war-2024-06-16/",
        urlToImage: null,
        publishedAt: "2024-06-16T05:20:58Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "CBS Sports"
        },
        author: "Brian Campbell",
        title: "Gervonta Davis vs. Frank Martin fight results, highlights: 'Tank' lowers the boom for brutal knockout finish - CBS Sports",
        description: "Davis showed a bit of ring rust to start the fight but shook it off when it mattered the most",
        url: "https://www.cbssports.com/boxing/news/gervonta-davis-vs-frank-martin-fight-results-highlights-tank-lowers-the-boom-for-brutal-knockout-finish/live/",
        urlToImage: "https://sportshub.cbsistatic.com/i/r/2024/06/16/29913d70-a05f-45da-b39e-152d03cae6ce/thumbnail/1200x675/2c1976da0d1f45d58ab4b54db74c5083/gervonta-davis-martin-ko.jpg",
        publishedAt: "2024-06-16T04:54:53Z",
        content: "LAS VEGAS -- Despite snapping a career-long layoff of 14 months, lightweight superstar Gervonta \"Tank\" Davis proved on Saturday that he, indeed, ain't afraid of no \"Ghost,\" or any other fighter for t… [+4978 chars]"
    },
    {
        source: {
            id: "fox-news",
            name: "Fox News"
        },
        author: "Ryan Morik",
        title: "Oilers evade Stanley Cup Final sweep in dominant scoring barrage over Panthers - Fox News",
        description: "The Edmonton Oilers are aiming to become the second team in the history of the National Hockey League to win the Stanley Cup after trailing the Final 3-0.",
        url: "https://www.foxnews.com/sports/oilers-evade-stanley-cup-final-sweep-dominant-scoring-barrage-over-panthers",
        urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/oilers-goal.jpg",
        publishedAt: "2024-06-16T04:39:00Z",
        content: "If the Edmonton Oilers have hopes in becoming the second team to win a Stanley Cup Final after trailing the series three games to none, then Saturday's thumping of Florida was a good start. \r\nThe Oil… [+1834 chars]"
    },
    {
        source: {
            id: "associated-press",
            name: "Associated Press"
        },
        author: "JOSEF FEDERMAN, WAFAA SHURAFA, JULIA FRANKEL",
        title: "Israeli military announces 'tactical pause' in attempt to increase flow of aid into hard-hit Gaza - The Associated Press",
        description: "The Israeli military has announced a “tactical pause” in its offensive in the southern Gaza Strip to allow the deliveries of increased quantities of humanitarian aid. The army said Sunday the pause would begin at 0500 GMT and remain in effect until 1600 GMT. …",
        url: "https://apnews.com/article/israel-palestinians-gaza-hamas-war-un-humanitarian-8c111f2dcf783f8671e6dd6f19547b17",
        urlToImage: "https://dims.apnews.com/dims4/default/4f6c467/2147483647/strip/true/crop/4923x2769+0+256/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe8%2Fcb%2F2cfa2704a87a826abf6e02698892%2Fbdbab80a96e641d689b818c0b242583f",
        publishedAt: "2024-06-16T04:18:00Z",
        content: "JERUSALEM (AP) Israels military announced on Sunday that it would pause fighting throughout daytime hours along a route in southern Gaza to free up a backlog of humanitarian aid deliveries destined f… [+4458 chars]"
    },
    {
        source: {
            id: "cnn",
            name: "CNN"
        },
        author: "Ashley R. Williams, Mary Gilbert",
        title: "Extreme heat to scorch central, southern US on Father’s Day - CNN",
        description: "The year’s first significant heat wave is expected to roast a significant portion of the central and southern United States on Father’s Day Sunday with potentially record-breaking high temperatures, four days away from summer’s official start.",
        url: "https://www.cnn.com/2024/06/16/weather/us-fathers-day-heat-wave-climate-sunday/index.html",
        urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2156276430-20240606141604447.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2024-06-16T04:15:00Z",
        content: "The years first significant heat wave is expected to roast a significant portion of the central and southern United States on Fathers Day Sunday with potentially record-breaking high temperatures, fo… [+3847 chars]"
    },
    {
        source: {
            id: null,
            name: "The Detroit News"
        },
        author: "Marnie Muñoz, Chad Livengood",
        title: "Rochester Hills splash pad shooter found dead, Oakland Co. sheriff says - Detroit News",
        description: "The shooting occurred Saturday around 5 p.m. at the Brooklands Plaza Splash Pad in Rochester Hills, according to the Rochester Police Department.",
        url: "https://www.detroitnews.com/story/news/local/oakland-county/2024/06/15/rochester-hills-brooklands-splash-pad-active-shooter-multiple-people-injured-oakland-county-michigan/74112936007/",
        urlToImage: "https://www.detroitnews.com/gcdn/authoring/authoring-images/2024/06/16/PDTN/74115558007-0615-kk-me-rochester-hills-shooting-presser-01.jpg?crop=5848,3291,x0,y300&width=3200&height=1801&format=pjpg&auto=webp",
        publishedAt: "2024-06-16T03:05:25Z",
        content: "Rochester Hills Nine people were shot at a splash pad in Rochester Hills around 5:11 p.m. Saturday after a \"random\" gunman got out of a vehicle and unloaded 28 gunshots from a handgun at the streetsi… [+9636 chars]"
    },
    {
        source: {
            id: null,
            name: "[Removed]"
        },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]"
    },
    {
        source: {
            id: "the-washington-post",
            name: "The Washington Post"
        },
        author: "Ben Brasch",
        title: "Oaks Park AtmosFEAR ride in Oregon left people stuck 50 feet in the air - The Washington Post",
        description: "An Oregon amusement park ride malfunctioned Friday, leaving more than two dozen people hanging upside down, 50 feet in the air.",
        url: "https://www.washingtonpost.com/nation/2024/06/15/oaks-park-atmosfear-ride-stuck/",
        urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DG3PRIJYWFLNRZ3ROOYCX46VVU.jpg&w=1440",
        publishedAt: "2024-06-16T02:29:46Z",
        content: "Happy screams turned to terrified screams within minutes of an Oregon amusement park ride malfunctioning Friday, leaving more than two dozen people hanging upside down 50 feet in the air for almost 3… [+2129 chars]"
    },
    {
        source: {
            id: null,
            name: "Heat.com"
        },
        author: "John Schuhmann",
        title: "NBA Finals Film Study: Mavericks stand up defensively in Game 4 - NBA.com",
        description: "With their season on the line, the Dallas Mavericks finally play championship-level defense in Game 4 of the NBA Finals.",
        url: "https://www.nba.com/news/2024-nba-finals-film-study-game-4",
        urlToImage: null,
        publishedAt: "2024-06-16T01:40:22Z",
        content: "In Game 4, Jayson Tatum and the Celtics shot 13-for-33 (39.3%) in the paint, easily their worst mark of the season.\r\n Download the NBA App\r\nThe Dallas Mavericks might have the most talented offensive… [+7651 chars]"
    },
    {
        source: {
            id: "associated-press",
            name: "Associated Press"
        },
        author: "DARLENE SUPERVILLE, WILL WEISSERT",
        title: "Biden looks to Hollywood for a fundraising jolt - The Associated Press",
        description: "Some of Hollywood’s brightest stars have headlined a glitzy fundraiser for President Joe Biden, helping raise what his reelection campaign said was $28 million and hoping to energize would-be supporters ahead of a November election that they argued was among …",
        url: "https://apnews.com/article/biden-hollywood-fundraiser-clooney-roberts-ukraine-summit-40081471c93faa68de5c4aa30455303b",
        urlToImage: "https://dims.apnews.com/dims4/default/bb32b85/2147483647/strip/true/crop/5378x3025+0+280/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1d%2F62%2F61ae40d26e8f94df0ccc0e64a99f%2Fe51436efa08245069b387cd501383ffa",
        publishedAt: "2024-06-16T00:49:00Z",
        content: "LOS ANGELES (AP) Some of Hollywoods brightest stars headlined a glitzy fundraiser for President Joe Biden on Saturday night, helping raise what his reelection campaign said was $28 million and hoping… [+5586 chars]"
    }
]
export default sampleData;