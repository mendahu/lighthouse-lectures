$(document).ready(() => {
  const createMainDisplay = (spacecraft) => {
    return $(`
      <img width="400px" src="${spacecraft.bannerUrl}"
       alt="${spacecraft.spacecraft.name} on Mars!" />
       <div class="inner-content">
        <h3>${spacecraft.spacecraft.name}</h3>
        <p>Current time is: ${spacecraft.currentTime} LMST</p>
        <p>Current sol is: ${spacecraft.currentSol}</p>
       </div>
    `);
  };

  const renderMainDisplay = (spacecraft) => {
    const $display = createMainDisplay(spacecraft);
    $(".main-display").empty().append($display);
  };

  const getIndividualSpacecraft = (id) => {
    $.get(`https://www.marsti.me/api/spacecraft/${id}`).then((spacecraft) =>
      renderMainDisplay(spacecraft)
    );
  };

  const createListItem = (spacecraft) => {
    return $(`
        <article>
          <span>${spacecraft.name}</span>
          <button class="button">Load</button>
        </article>
      `);
  };

  const renderList = (data) => {
    const $spacecraftList = $(".spacecraft-list");
    $spacecraftList.empty();

    for (const spacecraft of data) {
      const $spacecraft = createListItem(spacecraft);

      $spacecraft.find("button").click(() => {
        getIndividualSpacecraft(spacecraft.id);
      });

      $spacecraftList.append($spacecraft);
    }
  };

  const getSpacecraft = () => {
    console.log("getSpacecraft called");

    // XHR Way to do it

    // const xhr = new XMLHttpRequest();
    // xhr.addEventListener("load", function () {
    //   renderList(JSON.parse(this.responseText));
    // });
    // xhr.open("GET", "https://www.marsti.me/api/spacecraft");
    // xhr.send();

    // Fetch API

    // fetch("https://www.marsti.me/api/spacecraft")
    //   .then((response) => response.json())
    //   .then((data) => renderList(data));

    // jQuery Way to do it

    // $.ajax({
    //   method: "GET",
    //   url: "https://www.marsti.me/api/spacecraft",
    // }).then((res) => renderList(res));

    // jQuery convenience method function

    $.get("https://www.marsti.me/api/spacecraft").then((res) =>
      renderList(res)
    );
  };

  // Load the list on click

  // const $loadButton = $(".spacecraft-list").find("button");
  // $loadButton.click(() => {
  // });

  // target the form
  $(".fetcher form").on("submit", function (event) {
    // use function declartion for jQuery event handlers!!!

    // override the submit event
    event.preventDefault();

    // serialize the data for manual transmission
    console.log($(this).serializeArray());

    // write our own logic
    const $input = $(".fetcher form input");
    const id = $input.val();

    getIndividualSpacecraft(id);
  });

  getSpacecraft();
  // XHR
});
