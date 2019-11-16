$(document).ready(function () {

    const token = "";

    function getRepos(searchValue) {
        const url = `https://api.github.com/users/:${searchValue}/repos`;
        const options = {
            headers: new Headers({
                "Authorization": `Bearer ${token}`
            })
        };
        fetch(url, options)
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
    };

    /*function generateSearch(searchValue) {
        console.log(`generateSearch ran with ${searchValue} paramater.`);
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
    };*/

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