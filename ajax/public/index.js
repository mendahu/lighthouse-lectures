$(document).ready(() => {
  const createListItem = (robot) => {
    return $(`
    <article>
      <span>${robot.name}</span>
      <button class="button">Load</button>
    </article>`);
  };

  const createMainDisplay = (robot) => {
    return $(`
      <img
        width="400px"
        src=${robot.bannerUrl}
        alt=${robot.spacecraft.name}
      />
      <div class="inner-content">
        <h3>${robot.spacecraft.name}</h3>
        <p>Current time is: ${robot.currentTime} LMST</p>
        <p>Current Sol is: ${robot.currentSol}</p>
      </div>
    `);
  };

  const generateApiErrorCard = () => {
    return $(`
      <div class="inner-content">
        <h3>API Error</h3>
        <p>You put in a bad code</p>
        <p>Try again please</p>
      </div>
    `);
  };

  const fetchSpacecraft = (code) => {
    $.get(`https://www.marsti.me/api/spacecraft/${code}`)
      .then((robot) => {
        const $display = createMainDisplay(robot);
        $(".main-display").empty().append($display);
      })
      .catch((err) => {
        const $display = generateApiErrorCard();
        $(".main-display").empty().append($display);
      });
  };

  const populateList = (spacecraft) => {
    $(".spacecraft-list").empty();
    for (const robot of spacecraft) {
      const $listItem = createListItem(robot);

      $listItem.find("button").click(() => {
        fetchSpacecraft(robot.id);
      });

      $(".spacecraft-list").append($listItem);
    }
  };

  const getSpacecraft = () => {
    // XMLHttpRequest

    // const req = new XMLHttpRequest();
    // req.addEventListener("load", function () {
    // $(".spacecraft-list").empty();
    // for (const robot of JSON.parse(this.responseText)) {
    //   $(".spacecraft-list").append(createListItem(robot));
    // }
    // });
    // req.open("GET", "https://www.marsti.me/api/spacecraft");
    // req.send();

    // Fetch API

    // fetch("https://www.marsti.me/api/spacecraft")
    //   .then((res) => res.json())
    //   .then((spacecraft) => populateList(spacecraft)) // could just pass reference in
    //  .catch((err) => console.error(err));
    // jQuery

    // $.ajax({
    //   method: "GET",
    //   url: "https://www.marsti.me/api/spacecraft",
    // })
    //   .then((spacecraft) => populateList(spacecraft))
    //   .catch((err) => console.error(err));

    $.get("https://www.marsti.me/api/spacecraft")
      .then((spacecraft) => populateList(spacecraft))
      .catch((err) => console.error(err));
  };

  $(".fetcher form").submit(function (event) {
    event.preventDefault();
    const code = $(this).find("input").val();
    fetchSpacecraft(code);
  });

  getSpacecraft();
});
