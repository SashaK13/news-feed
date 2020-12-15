window.onload = preparePage;

function preparePage() {
    document.getElementById('backButton').addEventListener('click', goBackToArticleList);
    catchUrlAndFilterParameters();
};

function goBackToArticleList() {
    window.location.href="../ex6-pagination-bootstrap/newsFeedPagination.html";
};

function catchUrlAndFilterParameters() {
    var currentUrl = window.location.href;
    console.log(currentUrl);
    var index = currentUrl.indexOf('?article=');
    console.log(index);
    var articleId = currentUrl.substring(index+9, currentUrl.length);
    console.log("articleId: " + articleId);
};
