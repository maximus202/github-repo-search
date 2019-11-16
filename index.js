$(document).ready(function () {

    function generateSearch(searchValue) {
        console.log(`generateSearch ran with ${searchValue} paramater.`);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.github.com/users/maximus202/repos",
            "method": "GET",
            "headers": {
                "": "",
                "Authorization": "Bearer 27c6d41c63eb2519be709189d2767a8ba7b899b8",
                "cache-control": "no-cache",
                "Postman-Token": "56b48eab-9d20-4b0d-9d16-688083cc276f"
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        fetch(`https://api.github.com/users/:${searchValue}/repos`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(responseJson => displayListOfRepos(responseJson))
            .catch(err => {
                $('#js-error-message').text(`Something went wrong: ${err.message}`);
            });
    };

    function searchForRepos() {
        //User searches for a list of repos using a GitHub handle
        console.log('searchForRepos() ran');
        $('form').on('submit', event => {
            event.preventDefault();
            console.log('submit button heard');
            const searchValue = $('#handle').val();
            console.log(searchValue);
            generateSearch(searchValue);
        });
    };

    function displayListOfRepos() {
        //User is displayed a list of repos by the repo name and a link to the repo URL
        console.log('displayListOfRepos() ran')
    };

    function clearResults() {
        //User submits a new search, old results are cleared out and new search is displayed.
        console.log('clearResults() ran')
    };

    searchForRepos();
    displayListOfRepos();
    clearResults();
});