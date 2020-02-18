const request = require('request-promise');
const cheerio = require('cheerio');

main = async () => {
  const result = await request.get("https://www.codingwithstefan.com/table-example");
  const $ = cheerio.load(result);
  const scrappedRows = [];
  $("body > table > tbody > tr").each((index, element) => {
    if (index === 0) return true;
    const tds = $(element).find("td");
    const company = $(tds[0]).text();
    const contact = $(tds[1]).text();
    const country = $(tds[2]).text();
    const scrappedRow = { company, contact, country };
    scrappedRows.push(scrappedRow);
    console.table(scrappedRows);
  });
}

main();
