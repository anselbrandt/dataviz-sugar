const d3 = require("d3");
const fs = require("fs");
const util = require("util");

const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

(async () => {
  try {
    const csv = await readfile("./sugar.csv", "utf8");
    const raw = csv
      .replace(
        /free_sugars_intake_of_total_energy_in_all_age_groups_for_all_paired_years_of_the_ndns_rolling_programme/g,
        "group,gender,age"
      )
      .replace(/ years/g, "")
      .replace(/ and over/g, "")
      .replace(/2008_09_2009_10/g, "2008-10")
      .replace(/2010_11_2011_12/g, "2010-12")
      .replace(/2012_13_2013_14/g, "2012-14")
      .replace(/2014_15_2015_16/g, "2014-16")
      .replace(/Children /g, "child,null,")
      .replace(/Men /g, "adult,male,")
      .replace(/Women /g, "adult,female,")
      .replace(/Adults /g, "adult,null,");
    const data = await d3.csvParse(raw);
    const clean = data.map((value, index) => {
      return {
        id: index,
        group: value.group,
        gender: value.gender === "null" ? null : value.gender,
        age: value.age,
        "2008-10": +value["2008-10"],
        "2010-12": +value["2010-12"],
        "2012-14": +value["2012-14"],
        "2014-16": +value["2014-16"]
      };
    });
    await writefile("sugar.json", JSON.stringify(clean));
  } catch (error) {
    console.log(error);
  }
})();
