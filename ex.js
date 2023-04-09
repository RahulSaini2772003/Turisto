const express = require('express');
const app = express();
const ejs = require('ejs');
const puppeteer = require('puppeteer');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('ex.ejs');
});

app.post('/', async (req, res) => {
  const pick = req.body.startLocation;
  const dest = req.body.endLocation;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.uber.com/in/en/price-estimate/");
  await page.type("input[name='pickup']", value1, { delay: 300 });
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    await page.type("input[name='destination']", value2, { delay: 300 });
    delay(100);
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    function delay(time){
              return new Promise(function (resolve) {
                setTimeout(resolve, time);
              });
            }
    await page.waitForSelector(".css-fRgwsT", { visible: true });
    await page.click(".css-fRgwsT");
    console.log("out");
    const paragraphs = await page.evaluate(() => {
        // const elements = document.querySelectorAll(".pe-products-item");
        // return Array.from(elements).map((element) => element.textContent);
    
    let arr = document.querySelectorAll(".pe-products-item");
    let detailsArr = [];
    console.log("out");
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i].innerText.split("\n");
      console.log("1");
     if (item[0] == "Uber Moto") {
      detailsArr.push({
        Type: "Bike",
        Fare: item[1].split("₹")[1].split(",").join(""),
      });
    }
      else if (item[0] == "Uber Go") {
        detailsArr.push({
          Type: "Hatchback",
          Fare: item[1].split("₹")[1].split(",").join(""),
        });
      } else if (item[0] == "UberAuto") {
        detailsArr.push({
          Type: "Auto",
          Fare: item[1].split("₹")[1].split(",").join(""),
        });
      } else if (item[0] == "Uber Premier") {
        detailsArr.push({
          Type: "Sedan",
          Fare: item[1].split("₹")[1].split(",").join(""),
        });
      } else if (item[0] == "Uber XL") {
        detailsArr.push({
          Type: "SUV",
          Fare: item[1].split("₹")[1].split(",").join(""),
        });
      }
}
    return detailsArr;
});
console.log(paragraphs);

  



})();
}
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', handleFormSubmit);
  const data = { paragraphs };
  res.render('index.ejs', { data });
});

app.listen(3000, () => console.log('Server started on port 3000'));
