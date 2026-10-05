const puppeteer = require("puppeteer-core");

const BASE = "http://127.0.0.1:8765";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const results = [];

function ok(name, pass, detail = "") {
  results.push({ name, pass, detail });
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"]
  });
  const page = await browser.newPage();
  page.setDefaultTimeout(10000);

  await page.goto(BASE, { waitUntil: "networkidle0" });

  // Products rendered
  const productCount = await page.$$eval(".product-card", (els) => els.length);
  ok("Products render", productCount >= 9, `count=${productCount}`);

  // Search: muus
  await page.type("#headerSearchInput", "muus");
  await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 1);
  const searchCount = await page.$$eval(".product-card", (els) => els.length);
  const titles = await page.$$eval(".product-title", (els) => els.map((e) => e.textContent));
  ok("Search filters bananas", searchCount >= 1 && titles.some((t) => /muus/i.test(t)), `count=${searchCount}`);

  // Empty search
  await page.evaluate(() => handleSearch(""));
  await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 6);

  // Category filter
  await page.evaluate(() => {
    document.querySelector('.pill[data-category="saliid"]').click();
  });
  await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 1);
  const oilCount = await page.$$eval(".product-card", (els) => els.length);
  ok("Category filter (saliid)", oilCount >= 1 && oilCount < productCount, `count=${oilCount}`);

  await page.evaluate(() => {
    document.querySelector('.pill[data-category="all"]').click();
  });

  // Region filter
  await page.evaluate(() => selectQuickRegion("Afgooye"));
  await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 1);
  const regionCount = await page.$$eval(".product-card", (els) => els.length);
  const regions = await page.$$eval(".badge-region", (els) => els.map((e) => e.textContent));
  ok("Region filter Afgooye", regions.every((r) => /Afgooye/i.test(r)), `count=${regionCount}`);

  await page.evaluate(() => resetFilters());
  await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 9);

  // Add to cart
  await page.evaluate(() => addToCart(101));
  await page.evaluate(() => addToCart(102));
  const cartBadge = await page.$eval("#cartBadge", (el) => el.textContent);
  ok("Add to cart", cartBadge === "2", `badge=${cartBadge}`);

  await page.evaluate(() => openCartDrawer());
  const cartOpen = await page.$eval("#cartDrawer", (el) => el.classList.contains("active"));
  const cartItems = await page.$$eval(".cart-item", (els) => els.length);
  ok("Cart drawer opens", cartOpen && cartItems === 2, `items=${cartItems}`);
  await page.evaluate(() => closeModals());

  // Chat
  await page.evaluate(() => openChatDrawer(101));
  const chatOpen = await page.$eval("#chatDrawer", (el) => el.classList.contains("active"));
  const msgs = await page.$$eval(".msg-bubble", (els) => els.length);
  ok("Chat opens with greeting", chatOpen && msgs >= 1, `msgs=${msgs}`);

  await page.evaluate(() => {
    document.getElementById("chatInput").value = "Qiimaha jumlada waa immisa?";
    sendUserChatMessage();
  });
  await page.waitForFunction(() => document.querySelectorAll(".msg-bubble").length >= 3);
  const afterChat = await page.$$eval(".msg-bubble", (els) => els.length);
  ok("Chat AI reply works", afterChat >= 3, `msgs=${afterChat}`);
  await page.evaluate(() => closeModals());

  // Order + EVC + invoice
  await page.evaluate(() => openOrderModal(101));
  const orderOpen = await page.$eval("#orderModal", (el) => el.classList.contains("active"));
  ok("Order modal opens", orderOpen);

  await page.$eval("#orderAddressInput", (el) => { el.value = "Hodan, Muqdisho"; });
  await page.$eval("#orderPhoneInput", (el) => { el.value = "+252 61 123 4567"; });
  await page.evaluate(() => updateOrderTotal());
  const totalBefore = await page.$eval("#modalTotalPrice", (el) => el.textContent);
  ok("Order total calculates", /\$|SOS/.test(totalBefore), totalBefore);

  await page.evaluate(() => {
    document.querySelector("#orderModal form").requestSubmit();
  });
  await page.waitForSelector("#evcModal.active");
  ok("EVC modal opens", true);

  await page.evaluate(() => {
    document.getElementById("evcPinInput").value = "1234";
    document.querySelector("#evcModal form").requestSubmit();
  });
  await page.waitForSelector("#invoiceModal.active");
  const inv = await page.$eval("#invOrderNum", (el) => el.textContent);
  ok("Invoice shows after EVC", /^#\d+/.test(inv), inv);
  await page.evaluate(() => closeModals());

  // Currency toggle
  await page.evaluate(() => toggleCurrency());
  const priceSos = await page.$eval(".product-price", (el) => el.textContent);
  ok("Currency toggles to SOS", /SOS/.test(priceSos), priceSos);
  await page.evaluate(() => toggleCurrency());

  // Language toggle
  await page.evaluate(() => toggleLanguage());
  const langBtn = await page.$eval("#langToggleBtn", (el) => el.textContent.trim());
  const shopBtn = await page.$eval("[data-i18n='shopNow']", (el) => el.textContent.trim());
  ok("Language toggles to EN", langBtn === "EN" && /Browse|Shop|market/i.test(shopBtn), `${langBtn} / ${shopBtn}`);
  await page.evaluate(() => toggleLanguage());

  // Theme
  await page.evaluate(() => toggleTheme());
  const theme = await page.$eval("body", (el) => el.getAttribute("data-theme"));
  ok("Theme toggles dark", theme === "dark", theme);
  await page.evaluate(() => toggleTheme());

  // Farmer registration then post produce
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle0" });

  await page.evaluate(() => openFarmerRegisterModal());
  const regOpen = await page.$eval("#farmerRegisterModal", (el) => el.classList.contains("active"));
  ok("Register modal opens", regOpen);

  await page.evaluate(() => {
    document.getElementById("regFullName").value = "Test Beeraley Cali";
    document.getElementById("regPhone").value = "+252 61 987 6543";
    document.getElementById("regRegion").value = "Afgooye";
    document.getElementById("regFarmName").value = "Beerta Test Organic";
    document.querySelector("#farmerRegisterForm").requestSubmit();
  });
  await page.waitForSelector("#farmerSuccessModal.active", { timeout: 4000 });
  const accountOk = await page.evaluate(() => {
    const raw = localStorage.getItem("bd_farmers");
    const list = raw ? JSON.parse(raw) : [];
    return list.some((f) => f.name === "Test Beeraley Cali");
  });
  ok("Farmer account saved", accountOk);

  await page.evaluate(() => {
    closeModals();
    openFarmerPostModal();
  });
  await page.waitForSelector("#farmerPostModal.active");
  await page.evaluate(() => {
    document.getElementById("postTitleInput").value = "Basbaas cas test";
    document.getElementById("postPriceInput").value = "1.1";
    document.getElementById("postRegionInput").value = "Afgooye";
    document.querySelector("#farmerPostModal form").requestSubmit();
  });
  await page.waitForFunction(() =>
    [...document.querySelectorAll(".product-title")].some((el) => el.textContent.includes("Basbaas"))
  );
  ok("Farmer can post produce after register", true);

  // Review
  await page.evaluate(() => openReviewModal());
  await page.$eval("#reviewNameInput", (el) => { el.value = "Tester"; });
  await page.$eval("#reviewTextInput", (el) => { el.value = "Alaab aad u fiican."; });
  await page.evaluate(() => {
    document.querySelector("#reviewModal form").requestSubmit();
  });
  await page.waitForFunction(() =>
    [...document.querySelectorAll(".review-card h4")].some((el) => el.textContent.includes("Tester"))
  );
  ok("Review submit works", true);

  // Farmer profile
  await page.evaluate(() => openFarmerProfileModal(101));
  const profileOpen = await page.$eval("#farmerProfileModal", (el) => el.classList.contains("active"));
  const farmerName = await page.$eval("#farmerProfileName", (el) => el.textContent);
  ok("Farmer profile opens", profileOpen && farmerName.length > 3, farmerName);

  await browser.close();

  const failed = results.filter((r) => !r.pass);
  console.log("\n────────────────────────────");
  console.log(`Result: ${results.length - failed.length}/${results.length} passed`);
  if (failed.length) {
    failed.forEach((f) => console.log("  x", f.name, f.detail));
    process.exit(1);
  }
})().catch((err) => {
  console.error("TEST CRASH:", err);
  process.exit(1);
});
