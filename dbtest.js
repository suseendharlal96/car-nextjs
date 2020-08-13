const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
//   console.log(2);
    const db = await sqlite.open({
      filename: "cars.sqlite",
      driver: sqlite3.Database,
    });
//   console.log(db);
    if (db) {
      await db.migrate({ force: "last" });
      const faq = await db.all("SELECT * FROM FAQ ORDER BY createdDate DESC");
      const cars = await db.all("SELECT * FROM Car");
      console.log(faq);
    }
}
setup();
