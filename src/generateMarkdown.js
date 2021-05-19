// module.exports = generateMarkdown;

function renderHtmlObj(htmlObj) {
  htmlObj.forEach((card) => {
    let cardRole = card.getRole();
    switch (cardRole) {
      case "Manager":
        console.log("INSIDE MANAGER CASE: -->");
        cardHtml = `<div class="card" style="width: 200px;">
            <div class="card-body">
              <h2 class="card-title">${card.getName()}</h2> 
              <h3 class="card-text">ID: ${card.getID()}</h3> 
              <h3 class="card-text">Email: ${card.getEmail()}</h3> 
              <h3 class="card-text">Role: ${card.getRole()}</h3> 
              <h3 class="card-text">Phone: ${card.getPhone()}</h3>
            </div>
          </div>`;
        console.log("CARDHTML: " + cardHtml);
        dynHtml = dynHtml + cardHtml;
        console.info(`DYNHTML: ${dynHtml}`);
        console.error(`DYNHTML: ${dynHtml}`);
        return dynHtml;
      case "Engineer":
        console.log("INSIDE ENGINEER CASE: -->");
        cardHtml = `<div class="card" style="width: 200px;">
            <div class="card-body">
              <h2 class="card-title">${card.getName()}</h2> 
              <h3 class="card-text">ID: ${card.getID()}</h3> 
              <h3 class="card-text">Email: ${card.getEmail()}</h3> 
              <h3 class="card-text">Role: ${card.getRole()}</h3> 
              <h3 class="card-text">Git Hub: <a href="https://github.com/${card.getGitHubName()}">${card.getGitHubName()}</a></h3>
            </div>
          </div>`;
        console.log("CARDHTML: " + cardHtml);
        dynHtml = dynHtml + cardHtml;
        console.log(`DYNHTML: ${dynHtml}`);
        return dynHtml;
      case "Intern":
        console.log("INSIDE INTERN CASE: -->");
        cardHtml = `<div class="card" style="width: 200px;">
            <div class="card-body">
              <h2 class="card-title">${card.getName()}</h2> 
              <h3 class="card-text">ID: ${card.getID()}</h3> 
              <h3 class="card-text">Email: ${card.getEmail()}</h3> 
              <h3 class="card-text">Role: ${card.getRole()}</h3> 
              <h3 class="card-text">School Name: ${card.getSchoolName()}</h3>
            </div>
          </div>`;
        console.log("CARDHTML: " + cardHtml);
        dynHtml = dynHtml + cardHtml;
        console.log(`DYNHTML: ${dynHtml}`);
        return dynHtml;
    }
    return dynHtml;
  });
  //writeFile
  console.log("STARTING WRITE");
  console.log(dynHtml);
  indexHtml = `${startHtmlString} ${dynHtml} ${endHtmlString}`;
  const OUTPUT_DIR = path.resolve(__dirname, "../");
  const outputPath = path.join(OUTPUT_DIR, "index.html");
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, indexHtml, "utf-8");
  return indexHtml;
}
