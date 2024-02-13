$(document).ready(() => {
  const createRow = (id, name, agency, destination) => {
    const $row = `
    <td>${name}</td>
    <td>${agency}</td>
    <td>${destination}</td>
    <td>
      <form action="/astronauts/${id}" method="POST">
        <button>Send to:</button>
        <input name="destination" />
      </form>
    </td>

    `;

    return $row;
  };

  $("body > form").submit(function (e) {
    e.preventDefault();
    const data = $(this).serialize();

    $.post(`/astronauts/`, data).then((astronaut) => {
      const $row = createRow(
        astronaut.id,
        astronaut.name,
        astronaut.agency_id,
        astronaut.destination
      );

      $("tbody").append($row);
    });
  });
});
