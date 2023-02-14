const createRow = (id, name, agency, destination) => {
  const $row = $(`
    <tr>
      <td>${name}</td>
      <td>${agency}</td>
      <td>${destination}</td>
      <td>
        <form action="/astronauts/${id}" method="POST">
          <button type="submit">Send to:</button>
          <input name="destination" />
        </form>
    </td>
    </tr>
  `);

  return $row;
};

$(document).ready(() => {
  $("body > form").submit(function (e) {
    e.preventDefault();
    const data = $(this).serialize();

    $.post("/api/astronauts/new", data)
      .then((res) => {
        $("tbody").append(
          createRow(res.id, res.name, res.agency, res.destination)
        );
      })
      .catch((err) => console.error(err));
  });
});
