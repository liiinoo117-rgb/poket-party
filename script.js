(() => {
  const body = document.body;
  const loadingScreen = document.getElementById("loadingScreen");
  if (!body || !loadingScreen) return;

  const startedAt = performance.now();
  const minDuration = 2600;

  const revealSite = () => {
    const elapsed = performance.now() - startedAt;
    const wait = Math.max(0, minDuration - elapsed);

    window.setTimeout(() => {
      loadingScreen.classList.add("is-fadeout");
      body.classList.remove("is-preloading");
      body.classList.add("is-loaded");

      window.setTimeout(() => {
        if (loadingScreen.parentNode) loadingScreen.parentNode.removeChild(loadingScreen);
      }, 1600);
    }, wait);
  };

  if (document.readyState === "complete") {
    revealSite();
  } else {
    window.addEventListener("load", revealSite, { once: true });
  }
})();


const moodRange = document.getElementById("moodRange");
const moodDot = document.getElementById("moodDot");
const sendFeeling = document.getElementById("sendFeeling");
const letter = document.getElementById("letter");
const bodyIndex = document.getElementById("bodyIndex");
const moodState = document.getElementById("moodState");

const saveDiary = document.getElementById("saveDiary");
const diaryTitle = document.getElementById("diaryTitle");
const diaryText = document.getElementById("diaryText");
const diaryImage = document.getElementById("diaryImage");
const diaryImageName = document.getElementById("diaryImageName");
const diaryList = document.getElementById("diaryList");

const sliderTrack = document.getElementById("sliderTrack");
const sliderCards = Array.from(document.querySelectorAll("#shopSlider .product-card"));
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const sliderCount = document.getElementById("sliderCount");
const sliderProgress = document.getElementById("sliderProgress");
const portfolioTrack = document.getElementById("portfolioTrack");
const portfolioCards = Array.from(document.querySelectorAll("#portfolioTrack .portfolio-card"));
const portfolioPrev = document.getElementById("portfolioPrev");
const portfolioNext = document.getElementById("portfolioNext");
const portfolioCount = document.getElementById("portfolioCount");
const portfolioProgress = document.getElementById("portfolioProgress");
const dreamToast = document.getElementById("dreamToast");
const feelingTotal = document.getElementById("feelingTotal");
const cloudStatus = document.getElementById("cloudStatus");
const diaryWarning = document.getElementById("diaryWarning");
const diaryCloudStatus = document.getElementById("diaryCloudStatus");
const visitorCount = document.getElementById("visitorCount");
const adminLogin = document.getElementById("adminLogin");
const adminLogout = document.getElementById("adminLogout");
let currentPortfolio = 0;

const DIARY_KEY = "poketPartyNextLog";
const FEELING_COUNT_KEY = "poketPartyFeelingTotal";
const VISITOR_KEY = "poketPartyVisitorId";
const ADMIN_PIN_KEY = "poketPartyAdminPin";
let currentSlide = 0;



function getCloudClient() {
  const config = window.POKET_SUPABASE || {};
  const key = config.publishableKey || config.anonKey || "";
  const hasConfig =
    config.url &&
    key &&
    !String(config.url).includes("YOUR_SUPABASE") &&
    !String(key).includes("YOUR_SUPABASE") &&
    !String(key).includes("YOUR_PUBLISHABLE_KEY");

  if (!hasConfig || !window.supabase || !window.supabase.createClient) return null;

  if (!window.__poketSupabaseClient) {
    window.__poketSupabaseClient = window.supabase.createClient(config.url, key);
  }

  return window.__poketSupabaseClient;
}

function renderCloudStatus(text) {
  if (!cloudStatus) return;
  cloudStatus.textContent = text;
}

function renderDiaryCloudStatus(text) {
  if (!diaryCloudStatus) return;
  diaryCloudStatus.textContent = text;
}


async function fetchCloudFeelingTotal() {
  const client = getCloudClient();
  if (!client) {
    renderCloudStatus("保存先：local");
    renderFeelingTotal();
    return;
  }

  const { count, error } = await client
    .from("mood_submissions")
    .select("*", { count: "exact", head: true });

  if (!error && typeof count === "number") {
    if (feelingTotal) feelingTotal.textContent = String(count).padStart(3, "0");
    renderCloudStatus("保存先：cloud");
  } else {
    renderCloudStatus("保存先：local");
    renderFeelingTotal();
  }
}

async function saveMoodToCloud(result, numericValue) {
  const client = getCloudClient();
  if (!client) return false;

  const { error } = await client.from("mood_submissions").insert({
    body_index: numericValue,
    result_title: result.title,
    lucky_color: result.color,
    result_body: result.body,
    result_comment: result.comment
  });

  if (!error) {
    await fetchCloudFeelingTotal();
    return true;
  }

  return false;
}

function loadImageForDiary(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("画像を読み込めませんでした"));
    };
    image.src = url;
  });
}

async function resizeDiaryImage(file, maxSide = 1400, quality = 0.84) {
  if (!file) return null;
  if (!file.type || !file.type.startsWith("image/")) {
    throw new Error("画像ファイルを選んでください");
  }

  const image = await loadImageForDiary(file);
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth || image.width, image.naturalHeight || image.height));
  const width = Math.max(1, Math.round((image.naturalWidth || image.width) * scale));
  const height = Math.max(1, Math.round((image.naturalHeight || image.height) * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { alpha: false });
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(image, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("画像の変換に失敗しました"));
        return;
      }
      resolve({ blob, mime: "image/jpeg", ext: "jpg" });
    }, "image/jpeg", quality);
  });
}

async function makeLocalDiaryImageUrl(file) {
  if (!file) return "";
  try {
    const prepared = await resizeDiaryImage(file, 900, 0.72);
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("画像の読み込みに失敗しました"));
      reader.readAsDataURL(prepared.blob);
    });
  } catch (error) {
    console.warn("local diary image failed", error);
    return "";
  }
}

async function uploadDiaryImage(file) {
  const client = getCloudClient();
  if (!client || !file) return { imageUrl: "", imagePath: "", error: null };

  try {
    const prepared = await resizeDiaryImage(file, 1400, 0.84);
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${prepared.ext}`;
    const imagePath = `diary/${safeName}`;

    const { error } = await client.storage
      .from("diary-images")
      .upload(imagePath, prepared.blob, {
        cacheControl: "3600",
        upsert: false,
        contentType: prepared.mime
      });

    if (error) {
      console.warn("diary image upload failed", error);
      return { imageUrl: "", imagePath: "", error };
    }

    const { data } = client.storage.from("diary-images").getPublicUrl(imagePath);
    const publicUrl = data?.publicUrl || "";
    if (!publicUrl) {
      return { imageUrl: "", imagePath: "", error: new Error("public url missing") };
    }
    return { imageUrl: publicUrl, imagePath, error: null };
  } catch (error) {
    console.warn("diary image prepare failed", error);
    return { imageUrl: "", imagePath: "", error };
  }
}

async function saveDiaryToCloud(entry, file) {
  const client = getCloudClient();
  if (!client) return { saved: false, imageFailed: false };

  const image = file ? await uploadDiaryImage(file) : { imageUrl: "", imagePath: "", error: null };
  if (file && !image.imageUrl) {
    return { saved: false, imageFailed: true };
  }

  const { error } = await client.from("diary_entries").insert({
    title: entry.title || "untitled",
    body: entry.text || "",
    image_url: image.imageUrl || null,
    image_path: image.imagePath || null
  });

  if (error) {
    console.warn("diary insert failed", error);
    return { saved: false, imageFailed: false };
  }

  return { saved: true, imageFailed: false };
}

function getFeelingTotal() {
  return Number(localStorage.getItem(FEELING_COUNT_KEY) || "0");
}

function renderFeelingTotal() {
  if (!feelingTotal) return;
  feelingTotal.textContent = String(getFeelingTotal()).padStart(3, "0");
}

function increaseFeelingTotal() {
  localStorage.setItem(FEELING_COUNT_KEY, String(getFeelingTotal() + 1));
  renderFeelingTotal();
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const oracleResults = [
  { title:"冷たい白", color:"滅菌された白", body:"身体は先に知っている。言葉はあとから、遅れて皮膚に触れる。", comment:"今日の静けさは、手術台の金属に似ている。" },
  { title:"薄い桃色", color:"血の気のないピンク", body:"やさしさは温度ではなく、輪郭の弱さとして現れる。", comment:"触れないことも、ひとつの接触。" },
  { title:"麻酔の青", color:"麻酔前の青", body:"不安は敵ではない。身体が未来を先に読んだ残響。", comment:"深呼吸は、世界に戻るための小さな縫合。" },
  { title:"内臓の緑", color:"淡い臓器の緑", body:"思考は透明ではない。いつも肉の湿度を持っている。", comment:"今日は、結論よりも感覚の置き場所を選ぶ。" },
  { title:"古い象牙色", color:"古い骨のアイボリー", body:"記憶は保存ではなく、毎回少し違う再構成。", comment:"忘れることは、壊すことではなく、場所を空けること。" },
  { title:"蛍光灯の銀", color:"蛍光灯の銀", body:"意識は舞台ではなく、身体が作る仮の照明。", comment:"明るすぎる場所では、影のほうが正直になる。" },
  { title:"乾いた赤", color:"乾いた赤", body:"欲望は汚れではない。生命が方向を持つときの熱。", comment:"強い感情は、切り取らずに観察する。" },
  { title:"沈黙の灰", color:"灰色のガーゼ", body:"沈黙は空白ではない。神経が小さく休んでいる状態。", comment:"今日は、返事よりも沈黙の質を見る。" },
  { title:"体温の黄", color:"低い体温の黄色", body:"希望は明るさではなく、身体がまだ動こうとする微弱な電流。", comment:"小さな予定をひとつだけ残す。" },
  { title:"瞳孔の黒", color:"開いた瞳孔の黒", body:"見ることは、世界を受け入れることではない。切り取ることでもある。", comment:"見すぎたものから、少し離れる。" },
  { title:"消毒液の透明", color:"消毒液の透明", body:"透明なものほど、触れた跡をよく残す。", comment:"きれいにした場所にも、記憶は残る。" },
  { title:"静脈の青紫", color:"静脈の青紫", body:"悲しみは深さではなく、流れの遅さとして現れる。", comment:"急いで治さない。流速だけを見る。" },
  { title:"乾いたラベンダー", color:"乾いたラベンダー", body:"懐かしさは過去ではなく、現在の身体が作る匂い。", comment:"思い出は、証拠ではなく温度。" },
  { title:"淡い包帯", color:"古い包帯の白", body:"守るものは、いつも少しだけ動きを制限する。", comment:"守られている不自由さを観察する。" },
  { title:"標本の金", color:"標本ラベルの金", body:"名前をつけると、ものは少しだけ死に、少しだけ保存される。", comment:"名づける前の輪郭を残す。" },
  { title:"呼吸の水色", color:"浅い呼吸の水色", body:"呼吸は意思ではなく、身体が世界と交わす最小の契約。", comment:"吸うより先に、吐く。" },
  { title:"手袋の乳白", color:"ラテックスの乳白", body:"直接触れないことで、触覚はかえって鋭くなる。", comment:"距離は冷たさではなく、精度になる。" },
  { title:"微熱の橙", color:"微熱のオレンジ", body:"高ぶりは真実とは限らない。神経が音量を上げているだけの時もある。", comment:"強さではなく、持続時間を見る。" },
  { title:"眠る緑", color:"眠る植物の緑", body:"回復は劇的ではない。見えない場所で、細胞が静かに片づける。", comment:"今日は、進むよりも修復する。" },
  { title:"冷蔵庫の白", color:"夜の冷蔵庫の白", body:"孤独は欠落ではなく、感覚が広がりすぎた部屋。", comment:"音を減らす。輪郭が戻る。" }
];

function feelingMessage(value) {
  const n = Number(value);
  let indexes;
  if (n < 28) indexes = [0, 2, 5, 7, 10, 13, 19];
  else if (n < 58) indexes = [1, 3, 4, 11, 12, 15, 16];
  else if (n < 82) indexes = [6, 8, 9, 14, 17, 18];
  else indexes = [2, 5, 6, 8, 14, 17];

  const pool = indexes.map((i) => oracleResults[i]);
  return pool[Math.floor(Math.random() * pool.length)];
}

function updateMoodDot() {
  if (!moodRange || !moodDot) return;
  const value = Number(moodRange.value);
  moodDot.style.top = `${76 - value * 0.54}%`;
  moodDot.style.background =
    value > 75 ? "var(--blue)" : value < 32 ? "var(--green)" : value < 58 ? "var(--pink)" : "var(--yellow)";
  if (bodyIndex) bodyIndex.textContent = String(value).padStart(3, "0");
  if (moodState) {
    moodState.textContent = value < 22 ? "静脈" : value < 45 ? "麻酔" : value < 68 ? "境目" : value < 86 ? "微熱" : "閃光";
  }
}

if (moodRange) {
  moodRange.addEventListener("input", updateMoodDot);
  updateMoodDot();
}

if (sendFeeling && letter) {
  sendFeeling.addEventListener("click", () => {
    const numericValue = moodRange ? Number(moodRange.value) : 58;
    const result = feelingMessage(numericValue);
    increaseFeelingTotal();
    const serial = String((numericValue % 20) + 1).padStart(2, "0");
    letter.classList.add("is-changing");

    setTimeout(() => {
      letter.innerHTML = `
        <div class="oracle-result-head"><span>今日の返答</span><span>${serial}</span></div>
        <h3>${escapeHTML(result.title)}</h3>
        <p>${escapeHTML(result.body)}</p>
        <div class="oracle-card">
          <div class="oracle-row">
            <span class="oracle-label">ラッキーカラー</span>
            <span class="oracle-value">${escapeHTML(result.color)}</span>
          </div>
          <div class="oracle-comment">${escapeHTML(result.comment)}</div>
        </div>
      `;
      letter.classList.remove("is-changing");
    }, 220);
  });
}

function updateSliderUI() {
  const total = sliderCards.length || 1;
  if (sliderCount) {
    sliderCount.textContent =
      String(currentSlide + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  }
  if (sliderProgress) {
    sliderProgress.style.width = `${((currentSlide + 1) / total) * 100}%`;
  }
  sliderCards.forEach((card, index) => {
    card.classList.toggle("is-current", index === currentSlide);
  });
}

function goToSlide(index) {
  if (!sliderTrack || !sliderCards.length) return;
  currentSlide = Math.max(0, Math.min(index, sliderCards.length - 1));
  const card = sliderCards[currentSlide];
  sliderTrack.scrollTo({ left: card.offsetLeft - 22, behavior: "smooth" });
  updateSliderUI();
}

if (sliderTrack && sliderCards.length) {
  if (prevSlide) prevSlide.addEventListener("click", () => goToSlide(currentSlide - 1));
  if (nextSlide) nextSlide.addEventListener("click", () => goToSlide(currentSlide + 1));

  sliderTrack.addEventListener(
    "scroll",
    () => {
      const center = sliderTrack.scrollLeft + sliderTrack.clientWidth / 2;
      let nearest = 0;
      let nearestDistance = Infinity;

      sliderCards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = index;
        }
      });

      currentSlide = nearest;
      updateSliderUI();
    },
    { passive: true }
  );

  updateSliderUI();
}


function updatePortfolioUI() {
  const total = portfolioCards.length || 1;
  if (portfolioCount) {
    portfolioCount.textContent =
      String(currentPortfolio + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
  }
  if (portfolioProgress) {
    portfolioProgress.style.width = `${((currentPortfolio + 1) / total) * 100}%`;
  }
  portfolioCards.forEach((card, index) => {
    card.classList.toggle("is-current", index === currentPortfolio);
  });
}

function goToPortfolio(index) {
  if (!portfolioTrack || !portfolioCards.length) return;
  currentPortfolio = Math.max(0, Math.min(index, portfolioCards.length - 1));
  const card = portfolioCards[currentPortfolio];
  portfolioTrack.scrollTo({ left: card.offsetLeft - 22, behavior: "smooth" });
  updatePortfolioUI();
}

if (portfolioTrack && portfolioCards.length) {
  if (portfolioPrev) portfolioPrev.addEventListener("click", () => goToPortfolio(currentPortfolio - 1));
  if (portfolioNext) portfolioNext.addEventListener("click", () => goToPortfolio(currentPortfolio + 1));

  portfolioTrack.addEventListener(
    "scroll",
    () => {
      const center = portfolioTrack.scrollLeft + portfolioTrack.clientWidth / 2;
      let nearest = 0;
      let nearestDistance = Infinity;

      portfolioCards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = index;
        }
      });

      currentPortfolio = nearest;
      updatePortfolioUI();
    },
    { passive: true }
  );

  updatePortfolioUI();
}

function showDreamToast() {
  if (!dreamToast) return;
  dreamToast.textContent = "Please wake from the dream.";
  dreamToast.classList.add("is-visible");
  window.clearTimeout(showDreamToast.timer);
  showDreamToast.timer = window.setTimeout(() => {
    dreamToast.classList.remove("is-visible");
  }, 1800);
}

document.querySelectorAll(".dream-product").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    showDreamToast();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showDreamToast();
    }
  });
});


const blockedDiaryPatterns = [
  /死ね/i,
  /しね/i,
  /シネ/i,
  /ﾀﾋね/i,
  /ころす/i,
  /殺す/i,
  /消えろ/i,
  /くたばれ/i,
  /ばか/i,
  /バカ/i,
  /馬鹿/i,
  /きもい/i,
  /キモい/i,
  /うざい/i,
  /ウザい/i,
  /fuck/i,
  /shit/i,
  /bitch/i,
  /cunt/i,
  /asshole/i
];

function normalizeDiaryText(text) {
  return String(text || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s\u3000._\-ー~～!！?？、。・]/g, "");
}

function containsBlockedDiaryWord(text) {
  const raw = String(text || "");
  const normalized = normalizeDiaryText(raw);
  return blockedDiaryPatterns.some((pattern) => pattern.test(raw) || pattern.test(normalized));
}

function showDiaryWarning() {
  if (!diaryWarning) return;
  diaryWarning.classList.add("is-visible");
  window.clearTimeout(showDiaryWarning.timer);
  showDiaryWarning.timer = window.setTimeout(() => {
    diaryWarning.classList.remove("is-visible");
  }, 2200);
}



function getVisitorId() {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : `visitor-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

async function updateVisitorCount() {
  const client = getCloudClient();
  if (!visitorCount) return;
  if (!client) {
    visitorCount.textContent = "local";
    return;
  }

  const visitorKey = getVisitorId();
  await client.from("visitor_logs").upsert({ visitor_key: visitorKey }, { onConflict: "visitor_key" });

  const { count, error } = await client
    .from("visitor_logs")
    .select("id", { count: "exact", head: true });

  visitorCount.textContent = !error && typeof count === "number" ? String(count).padStart(3, "0") : "---";
}

function getAdminPin() {
  return sessionStorage.getItem(ADMIN_PIN_KEY) || "";
}

function isAdminMode() {
  return Boolean(getAdminPin());
}

function renderAdminMode() {
  document.body.classList.toggle("is-admin", isAdminMode());
  if (adminLogout) adminLogout.hidden = !isAdminMode();
  if (adminLogin) adminLogin.textContent = isAdminMode() ? "admin on" : "admin";
  renderCloudDiariesIfReady();
}

async function adminDeleteCloudDiary(id) {
  const client = getCloudClient();
  const pin = getAdminPin();
  if (!client || !pin || !id) return false;

  const { data, error } = await client.rpc("admin_delete_diary_entry", {
    entry_id: id,
    admin_pin: pin
  });

  return !error && data === true;
}

async function fetchCloudDiaries() {
  const client = getCloudClient();
  if (!client) {
    renderDiaryCloudStatus("公開掲示板：Supabase設定待ち / まだ公開されていません");
    return null;
  }

  const { data, error } = await client
    .from("diary_entries")
    .select("id,title,body,image_url,image_path,created_at")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error || !Array.isArray(data)) {
    renderDiaryCloudStatus("公開掲示板：接続エラー / 設定を確認");
    return null;
  }

  renderDiaryCloudStatus(`公開掲示板：cloud / 最新${data.length}件を表示`);

  return data.map((entry) => ({
    id: entry.id,
    title: entry.title || "untitled",
    text: entry.body || "",
    imageUrl: entry.image_url || "",
    imagePath: entry.image_path || "",
    date: new Date(entry.created_at).toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }),
    cloud: true
  }));
}

async function renderCloudDiariesIfReady() {
  const cloudDiaries = await fetchCloudDiaries();
  if (!cloudDiaries || !diaryList) return;
  renderDiaryEntries(cloudDiaries);
}

function getDiaries() {
  return JSON.parse(localStorage.getItem(DIARY_KEY) || "[]");
}

function saveDiaries(diaries) {
  localStorage.setItem(DIARY_KEY, JSON.stringify(diaries.slice(0, 10)));
  renderDiaryCloudStatus("公開掲示板：Supabase設定待ち / 端末内保存は無効");
  renderDiaries();
}

function renderDiaryEntries(entries) {
  if (!diaryList) return;
  const diaries = entries || [];

  if (!diaries.length) {
    diaryList.innerHTML =
      `<article class="log-entry"><time>empty</time><h3>まだ空白</h3><p></p></article>`;
    return;
  }

  diaryList.innerHTML = diaries
    .map((entry) => {
      const image = entry.imageUrl
        ? `<img class="log-entry-image" src="${escapeHTML(entry.imageUrl)}" alt="">`
        : "";
      const deleteButton = entry.cloud
        ? (isAdminMode() ? `<button class="delete-entry" type="button" data-cloud="true" data-id="${escapeHTML(entry.id)}">delete</button>` : "")
        : `<button class="delete-entry" type="button" data-id="${escapeHTML(entry.id)}">delete</button>`;

      return `
        <article class="log-entry">
          <time>${escapeHTML(entry.date)}</time>
          <h3>${escapeHTML(entry.title || "untitled")}</h3>
          <p>${escapeHTML(entry.text)}</p>
          ${image}
          ${deleteButton}
        </article>
      `;
    })
    .join("");
}

function renderDiaries() {
  renderDiaryEntries(getDiaries());
}


if (diaryImage && diaryImageName) {
  diaryImage.addEventListener("change", () => {
    const file = diaryImage.files && diaryImage.files[0];
    diaryImageName.textContent = file ? `画像：${file.name}` : "";
  });
}

if (saveDiary && diaryTitle && diaryText) {
  saveDiary.addEventListener("click", async () => {
    const title = diaryTitle.value.trim();
    const text = diaryText.value.trim();
    const imageFile = diaryImage && diaryImage.files ? diaryImage.files[0] : null;
    if (!title && !text && !imageFile) return;
    if (containsBlockedDiaryWord(title + " " + text)) {
      showDiaryWarning();
      return;
    }

    const entry = {
      id: String(Date.now()),
      title,
      text,
      date: new Date().toLocaleString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const client = getCloudClient();

    if (!client) {
      renderDiaryCloudStatus("公開掲示板：Supabase設定待ち / 公開保存できません");
      return;
    }

    saveDiary.disabled = true;
    saveDiary.textContent = "送信中";
    const saved = await saveDiaryToCloud(entry, imageFile);
    saveDiary.disabled = false;
    saveDiary.textContent = "残す";

    if (saved.saved) {
      diaryTitle.value = "";
      diaryText.value = "";
      if (diaryImage) diaryImage.value = "";
      if (diaryImageName) diaryImageName.textContent = "";
      await renderCloudDiariesIfReady();
      renderDiaryCloudStatus("公開掲示板：cloud / みんなに公開中");
      return;
    }

    if (saved.imageFailed) {
      renderDiaryCloudStatus("画像アップロード失敗 / Storageをpublic設定にしてください");
    } else {
      renderDiaryCloudStatus("公開掲示板：送信失敗 / Supabase設定を確認");
    }
  });
}

if (diaryList) {
  diaryList.addEventListener("click", async (event) => {
    const button = event.target.closest(".delete-entry");
    if (!button) return;

    if (button.dataset.cloud === "true") {
      if (!isAdminMode()) return;
      button.disabled = true;
      button.textContent = "deleting";
      const deleted = await adminDeleteCloudDiary(button.dataset.id);
      if (deleted) {
        await renderCloudDiariesIfReady();
      } else {
        button.disabled = false;
        button.textContent = "delete failed";
        window.setTimeout(() => (button.textContent = "delete"), 1400);
      }
      return;
    }

    saveDiaries(getDiaries().filter((entry) => entry.id !== button.dataset.id));
  });
}

if (adminLogin) {
  adminLogin.addEventListener("click", () => {
    const pin = window.prompt("管理者PINを入力してください");
    if (!pin) return;
    sessionStorage.setItem(ADMIN_PIN_KEY, pin);
    renderAdminMode();
  });
}

if (adminLogout) {
  adminLogout.addEventListener("click", () => {
    sessionStorage.removeItem(ADMIN_PIN_KEY);
    renderAdminMode();
  });
}

const revealTargets = document.querySelectorAll(".reveal");
revealTargets.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 80, 420)}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  }
);

revealTargets.forEach((el) => observer.observe(el));
renderFeelingTotal();
renderCloudDiariesIfReady();
renderAdminMode();
updateVisitorCount();
setInterval(renderCloudDiariesIfReady, 20000);
setInterval(updateVisitorCount, 60000);

/* Hero pixel-particle image changer */
(function () {
  const heroPhoto = document.getElementById("heroPhoto");
  const heroPhotoNext = document.getElementById("heroPhotoNext");
  const canvas = document.getElementById("heroParticles");
  const hero = document.querySelector(".hero");
  if (!heroPhoto || !heroPhotoNext || !canvas) return;

  const heroImages = [
    "hero-main-01.jpg",
    "hero-main-02.jpg",
    "hero-main-03.jpg",
    "hero-main-04.jpg",
    "hero-main-05.jpg",
    "hero-main-06.jpg"
  ];

  let current = 0;
  let animating = false;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const imageCache = new Map();

  function loadImage(src) {
    if (imageCache.has(src)) return imageCache.get(src);
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
    imageCache.set(src, promise);
    return promise;
  }

  function fitCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    return { width: rect.width, height: rect.height };
  }

  function drawCover(image, targetCtx, width, height) {
    targetCtx.imageSmoothingEnabled = false;
    const ratio = Math.max(width / image.width, height / image.height);
    const drawW = image.width * ratio;
    const drawH = image.height * ratio;
    const x = (width - drawW) / 2;
    const y = (height - drawH) / 2;
    targetCtx.drawImage(image, x, y, drawW, drawH);
  }

  async function buildPixelParticles(src) {
    const img = await loadImage(src);
    const { width, height } = fitCanvas();

    const off = document.createElement("canvas");
    off.width = Math.max(1, Math.floor(width));
    off.height = Math.max(1, Math.floor(height));
    const offCtx = off.getContext("2d", { willReadFrequently: true });
    drawCover(img, offCtx, off.width, off.height);

    let pixels;
    try {
      pixels = offCtx.getImageData(0, 0, off.width, off.height).data;
    } catch (e) {
      return [];
    }

    const particles = [];
    const isSmall = width < 390;
    const step = isSmall ? 6 : 5;
    const maxParticles = isSmall ? 5200 : 8200;
    const cx = width / 2;
    const cy = height / 2;

    for (let y = 0; y < off.height; y += step) {
      for (let x = 0; x < off.width; x += step) {
        if (Math.random() > 0.78) continue;

        const i = (y * off.width + x) * 4;
        const a = pixels[i + 3];
        if (a < 20) continue;

        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const angle = Math.atan2(dy, dx);
        const orbit = angle + Math.PI / 2;
        const force = 0.38 + Math.random() * 1.35;

        particles.push({
          ox: x,
          oy: y,
          vx: Math.cos(angle) * force + Math.cos(orbit) * (Math.random() - 0.5) * 1.3,
          vy: Math.sin(angle) * force + Math.sin(orbit) * (Math.random() - 0.5) * 1.3,
          size: Math.random() < 0.7 ? 1 : 2,
          color: `rgba(${r},${g},${b},`,
          delay: Math.random() * 0.22,
          jitter: Math.random() * Math.PI * 2
        });

        if (particles.length >= maxParticles) return particles;
      }
    }

    return particles;
  }

  async function changeHero() {
    if (animating || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animating = true;
    if (hero) hero.classList.add("is-pixel-changing");

    const oldSrc = heroImages[current];
    const next = (current + 1) % heroImages.length;
    const nextSrc = heroImages[next];

    await Promise.all([loadImage(oldSrc), loadImage(nextSrc)]).catch(() => null);

    const particles = await buildPixelParticles(oldSrc);
    const { width, height } = fitCanvas();

    heroPhotoNext.style.backgroundImage = `url("${nextSrc}")`;
    heroPhotoNext.classList.add("is-active");

    const duration = 1900;
    const start = performance.now();

    function frame(now) {
      const raw = Math.min(1, (now - start) / duration);
      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;

      heroPhotoNext.style.opacity = String(Math.min(1, Math.max(0, (raw - 0.16) / 0.54)));

      for (const p of particles) {
        const local = Math.max(0, Math.min(1, (raw - p.delay) / (1 - p.delay)));
        if (local <= 0) continue;

        const pixelEase = 1 - Math.pow(1 - local, 3);
        const staticNoiseX = Math.round(Math.sin(p.jitter + raw * 44) * 2) * 2;
        const staticNoiseY = Math.round(Math.cos(p.jitter + raw * 38) * 2) * 2;

        const px = Math.round(p.ox + p.vx * pixelEase * 92 + staticNoiseX);
        const py = Math.round(p.oy + p.vy * pixelEase * 92 - pixelEase * 18 + staticNoiseY);

        const alpha = Math.max(0, 0.86 * (1 - local));
        ctx.fillStyle = p.color + alpha + ")";
        const s = p.size + (local > 0.58 ? 1 : 0);
        ctx.fillRect(px, py, s, s);
      }

      if (raw < 1) {
        requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, width, height);
        heroPhoto.style.backgroundImage = `url("${nextSrc}")`;
        heroPhotoNext.classList.remove("is-active");
        heroPhotoNext.style.opacity = "";
        current = next;
        animating = false;
        if (hero) hero.classList.remove("is-pixel-changing");
      }
    }

    requestAnimationFrame(frame);
  }

  heroPhoto.style.backgroundImage = `url("${heroImages[0]}")`;
  heroImages.forEach((src) => loadImage(src).catch(() => null));
  setInterval(changeHero, 5200);
  window.addEventListener("resize", fitCanvas, { passive: true });
  window.addEventListener("load", fitCanvas);
})();


/* --- mobile touch feedback for floor plan --- */
(function(){
  const roomLinks = document.querySelectorAll('.flat-plan-svg .room-area a');
  if (!roomLinks.length) return;

  const touchCapable = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  roomLinks.forEach((link) => {
    let navTimer = null;
    const clearTouch = () => link.classList.remove('is-touched');
    const triggerTouch = () => {
      link.classList.remove('is-touched');
      requestAnimationFrame(() => link.classList.add('is-touched'));
      window.clearTimeout(navTimer);
      navTimer = window.setTimeout(clearTouch, 420);
    };

    link.addEventListener('touchstart', triggerTouch, { passive: true });
    link.addEventListener('focus', triggerTouch);
    link.addEventListener('blur', clearTouch);

    if (touchCapable) {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        event.preventDefault();
        triggerTouch();
        window.clearTimeout(navTimer);
        navTimer = window.setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.location.hash = href;
          }
          window.setTimeout(clearTouch, 180);
        }, 240);
      });
    }
  });
})();
