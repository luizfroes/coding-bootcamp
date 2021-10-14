const mainContainer = $("#main");

const renderCards = function (repos) {
  const constructAndAppendToMain = function (repo) {
    //get repo name
    const repoName = repo.name;
    const repoUrl = repo.html_url;
    const fullNameRepo = repo.full_name;

    //create card
    const repoCard = `<div class="card m-1" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${repoName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${fullNameRepo}</h6>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="${repoUrl}" class="card-link">Repo link</a>
    </div>
  </div>`;

    //append to main

    $(repoCard).appendTo(mainContainer);
  };

  //iterate over repos
  repos.forEach(constructAndAppendToMain);
};

const onLoad = function () {
  const handleResponse = function (response) {
    if (response.status !== 200) {
      throw new Error("something went wrong");
    }
    return response.json();
  };
  //Get data from API
  fetch("https://api.github.com/users/luizfroes/repos")
    .then(handleResponse)
    .then(renderCards);
};

window.addEventListener("load", onLoad);
