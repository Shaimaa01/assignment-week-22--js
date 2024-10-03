// assignmnet 1

const getData = function () {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("drink tea ☕"));
      }
    };

    myRequest.open("GET", "data.json");
    myRequest.send();
  });
};

getData()
  .then((result) => {
    result.slice(0, 5);
    return result;
  })
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      let article = document.createElement("div");
      document.body.appendChild(article);

      let title = document.createElement("h3");
      title.textContent = result[i].title;
      article.appendChild(title);

      let description = document.createElement("p");
      description.textContent = result[i].description;
      article.appendChild(description);
    }
  });

fetch("data.json")
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => {
    for (i = 0; i < result.length; i++) {
      let article = document.createElement("div");
      document.body.appendChild(article);

      let title = document.createElement("h3");
      title.textContent = result[i].title;
      article.appendChild(title);

      let description = document.createElement("p");
      description.textContent = result[i].description;
      article.appendChild(description);
    }
  });
