# Brief Review of Client-Rendered vs Server-Rendered

## Server

- Show server rendering diagram
- In what we learned with Server Rendering through Tiny app, the server does the heavy lifting in terms of rendering dynamic content
- Benefits: Client doesn't require high specs, servers tend to be powerful devices, you have better control over the rendering
- Cons: Server power needed, slower time of arrival of first byte, entire pages re-rendered even on little changes

## Client

- Show client rendering diagram
- Client-side web development puts the client at the centre of the heavy lifting, and server takes on a more simple role of just providing raw files and data
- Benefits: Servers can be smaller, saves money, More dynamic interface for users (no page refreshes required), quicker time to first byte
- Cons: Client devices can give dramatically different experience, spinner hell

## What is AJAX?

- **A**synchronous **J**avaScript **A**nd **X**ML
- Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh
- Not a technology but a principle in programming

## Brief History of AJAX

- Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
- The widespread use of AJAX was one of the factors that led to Web 2.0
- Early sites to use it were Gmail and Google Maps
- Originally retrieved data sent using `XML`, but modern applications use `JSON` instead

## Demo - Mars Time

- www.marsti.me
- We're going to fetch a list of spacecraft and then allow the user to click them in order to show the current time on Mars for it

- Show marstime site
- Show API in browser
- Show HTML of product so far
- Show basic HTML and CSS and JS layout to familiarize the project
- Show backend setup

### XML HTTP Request

- Add Click listener

```js
const getSpacecraft = () => {
  console.log("getSpacecraft was clicked");
};
const $loadButton = $(".spacecraft-list").find(".button");
$loadButton.click(() => {
  getSpacecraft();
});
```

- Build the XMLHTTPRequest way

```js
// XMLHttpRequest

const req = new XMLHttpRequest();
req.addEventListener("load", function () {
  console.log(this.responseText);
});
req.open("GET", "https://www.marsti.me/api/spacecraft/ins");
req.send();
```

- Use the data

```js
const createListItem = (spacecraft) => {
  return $(`
    <article>
      <span>${spacecraft.name}</span>
      <button class="button">Load</button>
    </article>
    `);
};

req.addEventListener("load", function () {
  $spacecraftList.empty();
  for (const robot of JSON.parse(this.responseText))
    $spacecraftList.append(createListItem(robot));
});
```

- Refactor callback out of the fetcher

- Refactor to Fetch

```js
fetch("https://www.marsti.me/api/spacecraft")
  .then((res) => res.json())
  .then((json) => populateList(json));
```

- API is simpler
- Uses promise pattern that we're used to
- very commonly used

# Browser History

- Notice how browser history remains unchanged
- This isn't a new page, it's the same page with some changes made dynamically
- Pros - don't clutter up history with minor changes to DOM
- Cons - history isn't there! You can get carried away with client side and never render any history, which hurts users wanting to go "back" in your app.

- Refactor to have application load on render

- Talk about time to load, spinner states, how this is perceived by the user.
- Relate this to server side rendered

-Refactor to jQuery

```js
$.ajax({
  method: "GET",
  url: "https://www.marsti.me/api/spacecraft",
}).then((res) => populateList(res));
```

```js
$.get("https://www.marsti.me/api/spacecraft").then((res) => populateList(res));
```

- talk about three different ways to make AJAX request
- which one should you use?

# Add individual spacecraft fetcher

```js
function populateList(res) {
  $spacecraftList.empty();
  for (const robot of res) {
    const $listItem = createListItem(robot);
    $listItem.find("button").click(() => {
      getUniqueSpacecraft(robot.id);
    });
    $spacecraftList.append($listItem);
  }
}

getUniqueSpacecraft = (id) => {
  $.get(`https://www.marsti.me/api/spacecraft/${id}`).then((robot) => {
    console.log(robot);
  });
};
```

- spend some time looking at the data

- Add element generator

```js
const $display = createMainDisplay(robot);
$(".main-display").empty().append($display);

const createMainDisplay = (spacecraft) => {
  return $(`
      <img width="400px" src=${spacecraft.bannerUrl} alt="${spacecraft.spacecraft.name} on Mars!" />
      <div class="inner-content">
        <h3>${spacecraft.spacecraft.name}</h3>
        <p>Current time is: ${spacecraft.currentTime} LMST</p>
        <p>Current Sol is: ${spacecraft.currentSol}</p>
      </div>
    `);
};
```

# Form Submission

- Talk about submit event
- Talk about prevent default
- talk about $(this)
- talk about serialize, and val

```js
$(".fetcher form").submit((event) => {
  event.preventDefault();
});

const code = $(this).find("input").val();
getUniqueSpacecraft(code);
```
