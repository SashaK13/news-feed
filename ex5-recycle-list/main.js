/*
* First add event listener for page load which will call a function to populate the HTML
* with article html containers.
* Secound will add event listeners for user scroll down event which will call a function to recycle the HTML containers,
* updating them with new articles content, one at the time.
*/

/*
* Global variables are initialazed.
*/
var start = 0;
var end = 8;
var maxArticlesCount = 100;

/*
* Those two lines of code are two event listeners onload and onscroll added to the window,
* calling the functions on every load of the page and every scroll on the page.
*/
window.addEventListener('load', createHtmlArticleContainers);
window.addEventListener("scroll", appendArticles, false);

/*
* This function is triggered when the user scrolls down and is creating the new articles on the page,
* geting the articles content from MOCKUP database and appending them to created articles.
* The articles are append 8 at the time when the user reaches the bottom of the page.
*/
function createHtmlArticleContainers() {
  if (end < maxArticlesCount) {
    var newArticles = getArticlesFromServerDatabaseMOCKUP(start, end);
    // console.log('newArticles.length: ' + newArticles.length + ', start ' + start + ', end ' + end);
    for (var i = 0; i < 8; i++) {
      var article = document.createElement('article');
      document.body.appendChild(article);

      var h2 = document.createElement('h2');
      h2.innerText = newArticles[i].title;
      article.appendChild(h2);

      var p = document.createElement('p');
      p.innerText = newArticles[i].description;
      article.appendChild(p);

      start++;
      end++;
    }
  }
};

/*
* This function detects if the user reached bottom of the page
* and in such case calls the functions that appends 8 new articles.
*/
function appendArticles() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    createHtmlArticleContainers();
  }
};

/*
* This MOCKUP function returns a list of articles,
* as if they were coming from a remote database in the server.
*/
function getArticlesFromServerDatabaseMOCKUP(start, end) {
  var articles = [
    {
      "id": 0,
      "title":  "This is the title 0",
      "description": "This is the paragraph 0"
    },
    {
      "id": 1,
      "title":  "This is the title 1",
      "description": "This is the paragraph 1"
    },
    {
      "id": 2,
      "title":  "This is the title 2",
      "description": "This is the paragraph 2"
    },
    {
      "id": 3,
      "title":  "This is the title 3",
      "description": "This is the paragraph 3"
    },
    {
      "id": 4,
      "title":  "This is the title 4",
      "description": "This is the paragraph 4"
    },
    {
      "id": 5,
      "title":  "This is the title 5",
      "description": "This is the paragraph 5"
    },
    {
      "id": 6,
      "title":  "This is the title 6",
      "description": "This is the paragraph 6"
    },
    {
      "id": 7,
      "title":  "This is the title 7",
      "description": "This is the paragraph 7"
    },
    {
      "id": 8,
      "title":  "This is the title 8",
      "description": "This is the paragraph 8"
    },
    {
      "id": 9,
      "title":  "This is the title 9",
      "description": "This is the paragraph 9"
    },
    {
      "id": 10,
      "title":  "This is the title 10",
      "description": "This is the paragraph 10"
    },
    {
      "id": 11,
      "title":  "This is the title 11",
      "description": "This is the paragraph 11"
    },
    {
      "id": 12,
      "title":  "This is the title 12",
      "description": "This is the paragraph 12"
    },
    {
      "id": 13,
      "title":  "This is the title 13",
      "description": "This is the paragraph 13"
    },
    {
      "id": 14,
      "title":  "This is the title 14",
      "description": "This is the paragraph 14"
    },
    {
      "id": 15,
      "title":  "This is the title 15",
      "description": "This is the paragraph 15"
    },
    {
      "id": 16,
      "title":  "This is the title 16",
      "description": "This is the paragraph 16"
    },
    {
      "id": 17,
      "title":  "This is the title 17",
      "description": "This is the paragraph 17"
    },
    {
      "id": 18,
      "title":  "This is the title 18",
      "description": "This is the paragraph 18"
    },
    {
      "id": 19,
      "title":  "This is the title 19",
      "description": "This is the paragraph 19"
    },
    {
      "id": 20,
      "title":  "This is the title 20",
      "description": "This is the paragraph 20"
    },
    {
      "id": 21,
      "title":  "This is the title 21",
      "description": "This is the paragraph 21"
    },
    {
      "id": 22,
      "title":  "This is the title 22",
      "description": "This is the paragraph 22"
    },
    {
      "id": 23,
      "title":  "This is the title 23",
      "description": "This is the paragraph 23"
    },
    {
      "id": 24,
      "title":  "This is the title 24",
      "description": "This is the paragraph 24"
    },
    {
      "id": 25,
      "title":  "This is the title 25",
      "description": "This is the paragraph 25"
    },
    {
      "id": 26,
      "title":  "This is the title 26",
      "description": "This is the paragraph 26"
    },
    {
      "id": 27,
      "title":  "This is the title 27",
      "description": "This is the paragraph 27"
    },
    {
      "id": 28,
      "title":  "This is the title 28",
      "description": "This is the paragraph 28"
    },
    {
      "id": 29,
      "title":  "This is the title 29",
      "description": "This is the paragraph 29"
    },
    {
      "id": 30,
      "title":  "This is the title 30",
      "description": "This is the paragraph 30"
    },
    {
      "id": 31,
      "title":  "This is the title 31",
      "description": "This is the paragraph 31"
    },
    {
      "id": 32,
      "title":  "This is the title 32",
      "description": "This is the paragraph 32"
    },
    {
      "id": 33,
      "title":  "This is the title 33",
      "description": "This is the paragraph 33"
    },
    {
      "id": 34,
      "title":  "This is the title 34",
      "description": "This is the paragraph 34"
    },
    {
      "id": 35,
      "title":  "This is the title 35",
      "description": "This is the paragraph 35"
    },
    {
      "id": 36,
      "title":  "This is the title 36",
      "description": "This is the paragraph 36"
    },
    {
      "id": 37,
      "title":  "This is the title 37",
      "description": "This is the paragraph 37"
    },
    {
      "id": 38,
      "title":  "This is the title 38",
      "description": "This is the paragraph 38"
    },
    {
      "id": 39,
      "title":  "This is the title 39",
      "description": "This is the paragraph 39"
    },
    {
      "id": 40,
      "title":  "This is the title 40",
      "description": "This is the paragraph 40"
    },
    {
      "id": 41,
      "title":  "This is the title 41",
      "description": "This is the paragraph 41"
    },
    {
      "id": 42,
      "title":  "This is the title 42",
      "description": "This is the paragraph 42"
    },
    {
      "id": 43,
      "title":  "This is the title 43",
      "description": "This is the paragraph 43"
    },
    {
      "id": 44,
      "title":  "This is the title 44",
      "description": "This is the paragraph 44"
    },
    {
      "id": 45,
      "title":  "This is the title 45",
      "description": "This is the paragraph 45"
    },
    {
      "id": 46,
      "title":  "This is the title 46",
      "description": "This is the paragraph 46"
    },
    {
      "id": 47,
      "title":  "This is the title 47",
      "description": "This is the paragraph 47"
    },
    {
      "id": 48,
      "title":  "This is the title 48",
      "description": "This is the paragraph 48"
    },
    {
      "id": 49,
      "title":  "This is the title 49",
      "description": "This is the paragraph 49"
    },
    {
      "id": 50,
      "title":  "This is the title 50",
      "description": "This is the paragraph 50"
    },
    {
      "id": 51,
      "title":  "This is the title 51",
      "description": "This is the paragraph 51"
    },
    {
      "id": 52,
      "title":  "This is the title 52",
      "description": "This is the paragraph 52"
    },
    {
      "id": 53,
      "title":  "This is the title 53",
      "description": "This is the paragraph 53"
    },
    {
      "id": 54,
      "title":  "This is the title 54",
      "description": "This is the paragraph 54"
    },
    {
      "id": 55,
      "title":  "This is the title 55",
      "description": "This is the paragraph 55"
    },
    {
      "id": 56,
      "title":  "This is the title 56",
      "description": "This is the paragraph 56"
    },
    {
      "id": 57,
      "title":  "This is the title 57",
      "description": "This is the paragraph 57"
    },
    {
      "id": 58,
      "title":  "This is the title 58",
      "description": "This is the paragraph 58"
    },
    {
      "id": 59,
      "title":  "This is the title 59",
      "description": "This is the paragraph 59"
    },
    {
      "id": 60,
      "title":  "This is the title 60",
      "description": "This is the paragraph 60"
    },
    {
      "id": 61,
      "title":  "This is the title 61",
      "description": "This is the paragraph 61"
    },
    {
      "id": 62,
      "title":  "This is the title 62",
      "description": "This is the paragraph 62"
    },
    {
      "id": 63,
      "title":  "This is the title 63",
      "description": "This is the paragraph 63"
    },
    {
      "id": 64,
      "title":  "This is the title 64",
      "description": "This is the paragraph 64"
    },
    {
      "id": 65,
      "title":  "This is the title 65",
      "description": "This is the paragraph 65"
    },
    {
      "id": 66,
      "title":  "This is the title 66",
      "description": "This is the paragraph 66"
    },
    {
      "id": 67,
      "title":  "This is the title 67",
      "description": "This is the paragraph 67"
    },
    {
      "id": 68,
      "title":  "This is the title 68",
      "description": "This is the paragraph 68"
    },
    {
      "id": 69,
      "title":  "This is the title 69",
      "description": "This is the paragraph 69"
    },
    {
      "id": 70,
      "title":  "This is the title 70",
      "description": "This is the paragraph 70"
    },
    {
      "id": 71,
      "title":  "This is the title 71",
      "description": "This is the paragraph 71"
    },
    {
      "id": 72,
      "title":  "This is the title 72",
      "description": "This is the paragraph 72"
    },
    {
      "id": 73,
      "title":  "This is the title 73",
      "description": "This is the paragraph 73"
    },
    {
      "id": 74,
      "title":  "This is the title 74",
      "description": "This is the paragraph 74"
    },
    {
      "id": 75,
      "title":  "This is the title 75",
      "description": "This is the paragraph 75"
    },
    {
      "id": 76,
      "title":  "This is the title 76",
      "description": "This is the paragraph 76"
    },
    {
      "id": 77,
      "title":  "This is the title 77",
      "description": "This is the paragraph 77"
    },
    {
      "id": 78,
      "title":  "This is the title 78",
      "description": "This is the paragraph 78"
    },
    {
      "id": 79,
      "title":  "This is the title 79",
      "description": "This is the paragraph 79"
    },
    {
      "id": 80,
      "title":  "This is the title 80",
      "description": "This is the paragraph 80"
    },
    {
      "id": 81,
      "title":  "This is the title 81",
      "description": "This is the paragraph 81"
    },
    {
      "id": 82,
      "title":  "This is the title 82",
      "description": "This is the paragraph 82"
    },
    {
      "id": 83,
      "title":  "This is the title 83",
      "description": "This is the paragraph 83"
    },
    {
      "id": 84,
      "title":  "This is the title 84",
      "description": "This is the paragraph 84"
    },
    {
      "id": 85,
      "title":  "This is the title 85",
      "description": "This is the paragraph 85"
    },
    {
      "id": 86,
      "title":  "This is the title 86",
      "description": "This is the paragraph 86"
    },
    {
      "id": 87,
      "title":  "This is the title 87",
      "description": "This is the paragraph 87"
    },
    {
      "id": 88,
      "title":  "This is the title 88",
      "description": "This is the paragraph 88"
    },
    {
      "id": 89,
      "title":  "This is the title 89",
      "description": "This is the paragraph 89"
    },
    {
      "id": 90,
      "title":  "This is the title 90",
      "description": "This is the paragraph 90"
    },
    {
      "id": 91,
      "title":  "This is the title 91",
      "description": "This is the paragraph 91"
    },
    {
      "id": 92,
      "title":  "This is the title 92",
      "description": "This is the paragraph 92"
    },
    {
      "id": 93,
      "title":  "This is the title 93",
      "description": "This is the paragraph 93"
    },
    {
      "id": 94,
      "title":  "This is the title 94",
      "description": "This is the paragraph 94"
    },
    {
      "id": 95,
      "title":  "This is the title 95",
      "description": "This is the paragraph 95"
    },
    {
      "id": 96,
      "title":  "This is the title 96",
      "description": "This is the paragraph 96"
    },
    {
      "id": 97,
      "title":  "This is the title 97",
      "description": "This is the paragraph 97"
    },
    {
      "id": 98,
      "title":  "This is the title 98",
      "description": "This is the paragraph 98"
    },
    {
      "id": 99,
      "title":  "This is the title 99",
      "description": "This is the paragraph 99"
    }
  ];

  return articles.slice(start, end);
};
