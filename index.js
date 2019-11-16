$(document).ready(function () {

    const token = "06f0cc705677529f5725bbaf2c95405c1cfc5627";

    function getRepos(searchValue) {
        const url = `https://api.github.com/users/${searchValue}/repos`;
        const options = {
            headers: new Headers({
                "Authorization": `Bearer ${token}`
            })
        };
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(responseJson => displayListOfRepos(responseJson))
            .catch(err => {
                $('#js-error-message').text(`Something went wrong: ${err.message}`);
            })
    };

    function searchForRepos() {
        //User searches for a list of repos using a GitHub handle
        console.log('searchForRepos() ran');
        $('form').on('submit', event => {
            event.preventDefault();
            console.log('submit button heard');
            const searchValue = $('#handle').val();
            console.log(searchValue);
            getRepos(searchValue);
        });
    };

    function displayListOfRepos(responseJson) {
        //User is displayed a list of repos by the repo name and a link to the repo URL
        console.log(`displayListOfRepos() with ${responseJson} ran`);
        $('.js-results').empty();
        for (let i = 0; i < responseJson.length; i++) {
            $('.js-results').append(`<li>Repo name: <a href="${responseJson[i].html_url}">${responseJson[i].name}</a></li>`);
        }
    };

    function clearResults() {
        //User submits a new search, old results are cleared out and new search is displayed.
        console.log('clearResults() ran')
    };

    searchForRepos();
    clearResults();
});