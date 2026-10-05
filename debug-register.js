const puppeteer = require("puppeteer-core");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  page.setViewport({ width: 390, height: 844 }); // mobile
  page.on("pageerror", (e) => console.log("ERR", e.message));

  await page.goto("http://127.0.0.1:8765/", { waitUntil: "networkidle0" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle0" });

  // Header register button on mobile
  const headerVisible = await page.$eval("#headerRegisterBtn", (el) => {
    const s = getComputedStyle(el);
    return s.display !== "none" && s.visibility !== "hidden";
  });
  console.log("header register visible:", headerVisible);

  await page.click("#headerRegisterBtn");
  await page.waitForSelector("#farmerRegisterModal.active");

  await page.type("#regFullName", "Xasan Beeraley");
  await page.type("#regPhone", "0615551212");
  await page.select("#regRegion", "Afgooye");
  await page.type("#regFarmName", "Beerta Xasan");
  await page.click("#btnRegSubmit");

  await page.waitForSelector("#farmerSuccessModal.active", { timeout: 4000 });
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("bd_farmers") || "[]"));
  console.log("success modal + farmers:", saved.length, saved[0]?.name);

  await page.click("#successPostBtn");
  await page.waitForSelector("#farmerPostModal.active");
  console.log("post modal after success: ok");

  // Desktop header
  await page.setViewport({ width: 1280, height: 800 });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle0" });
  await page.click(".hero-buttons [data-i18n='joinAsFarmer']");
  await page.waitForSelector("#farmerRegisterModal.active");
  console.log("hero register works");

  await browser.close();
  console.log("ALL REGISTER CHECKS PASSED");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
