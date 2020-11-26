function getArticleElements() {
    var articles = document.getElementsByTagName("article");
    console.log(articles);
    console.log(typeof articles);
    console.log('articles.length is ' + articles.length);

    /*
    * Exercise:
    * Print in the console, only the 'h2' of all the articles of the HTML document.
    */

    // THIS IS THE DUMB WAY
    console.log(articles[0].getElementsByTagName('h2')[0].innerHTML);
    console.log(articles[1].getElementsByTagName('h2')[0].innerHTML);
    console.log(articles[2].getElementsByTagName('h2')[0].innerHTML);
    console.log(articles[3].getElementsByTagName('h2')[0].innerHTML);
    // BLABLABLA, UNTIL THE ELEMENT NUMBER 28

    // THIS IS THE SMART WAY
    for (var i = 0; i < articles.length; i++) {
      console.log(articles[i].getElementsByTagName('h2')[0].innerHTML);
    };

};
