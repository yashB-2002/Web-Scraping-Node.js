const chalk = require('chalk');
const cheerio = require('cheerio');
const request = require('request');
let url1 = "https://www.worldometers.info/coronavirus";
let url2 = "https://www.espncricinfo.com/series/ipl-2021-1249214/rajasthan-royals-vs-chennai-super-kings-47th-match-1254089/full-scorecard";
request(url2, function (error, respone, html) {
    if (error) {
        console.log(error);
    }
    else {
        handleEvent(html);
    }
});
// for corona cases update  url is url1
console.log("Info About Coronavirus -:");
function handleEvent(html) {
    let selec = cheerio.load(html);
    let arr = selec("#maincounter-wrap span");
    // total cases info
    let tcases = selec(arr[0]).text();
    let deaths = selec(arr[1]).text();
    let recover = selec(arr[2]).text();
    console.log(chalk.blue("Coronavirus Cases: " + tcases));
    console.log(chalk.red("Deaths: " + deaths));
    console.log(chalk.green("Recovered: " + recover));



    // for match info url is url2
    //   player info
    console.log("Match Result Of CSK V/S RR-: ")
    let arr2 = selec(".playerofthematch .playerofthematch-name");
    let pd = selec(arr2).text();
    console.log(chalk.blue("Player Of The Match : " + pd));
}

