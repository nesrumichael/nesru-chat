const OFFICIAL_SITE_URL = "https://nesrumichael.github.io/nesru-chat/";

const SUPABASE_URL = "https://lcyouqcwcwmvbkxgengj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeW91cWN3Y3dtdmJreGdlbmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0NzI1NDQsImV4cCI6MjExMTA0ODU0NH0.eJHcCs2NPgItUnYBxRPBMFXquDQMBFHLUDkPkPzskA4";

const sb = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const PROTECTED_FOUNDER = {
  id: "user-nesru-001",
  username: "nesrumichael",
  full_name: "Nesru m",
  email: "nesrumichael@gmail.com",
  phone: "+251923502787",
  role: "founder",
  avatar_url: "https://ui-avatars.com/api/?name=Nesru+m&background=1877f2&color=fff&size=200",
  bio: "Founder & Owner of Nesru m. Contact: nesrumichael@gmail.com | +251923502787"
};

const WORLD_LANGUAGES = [
  { code: "om", name: "Afaan Oromoo" },
  { code: "en", name: "English" },
  { code: "am", name: "አማርኛ (Amharic)" },
  { code: "ti", name: "ትግርኛ (Tigrinya)" },
  { code: "so", name: "Soomaali" },
  { code: "ar", name: "العربية (Arabic)" },
  { code: "es", name: "Español (Spanish)" },
  { code: "fr", name: "Français (French)" },
  { code: "de", name: "Deutsch (German)" },
  { code: "pt", name: "Português (Portuguese)" },
  { code: "ru", name: "Русский (Russian)" },
  { code: "zh", name: "中文 (Chinese)" },
  { code: "ja", name: "日本語 (Japanese)" },
  { code: "ko", name: "한국어 (Korean)" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "ur", name: "اردو (Urdu)" },
  { code: "tr", name: "Türkçe (Turkish)" },
  { code: "sw", name: "Kiswahili" },
  { code: "ha", name: "Hausa" },
  { code: "yo", name: "Yorùbá" },
  { code: "ig", name: "Igbo" },
  { code: "zu", name: "isiZulu" },
  { code: "it", name: "Italiano" },
  { code: "nl", name: "Nederlands" },
  { code: "sv", name: "Svenska" },
  { code: "pl", name: "Polski" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "th", name: "ไทย" },
  { code: "id", name: "Bahasa Indonesia" }
];

const WORLD_COUNTRIES = [
  "Ethiopia", "United States", "United Kingdom", "Canada", "Germany", "France", "Kenya", "Uganda",
  "Tanzania", "Somalia", "Djibouti", "Eritrea", "Sudan", "South Sudan", "Egypt", "Nigeria",
  "South Africa", "Ghana", "Rwanda", "Morocco", "Algeria", "Tunisia", "Senegal", "Cameroon",
  "Ivory Coast", "Botswana", "Namibia", "Zambia", "Zimbabwe", "Brazil", "Argentina", "Mexico",
  "Colombia", "Chile", "Peru", "Australia", "New Zealand", "Japan", "South Korea", "China",
  "India", "Pakistan", "Bangladesh", "Indonesia", "Malaysia", "Philippines", "Thailand", "Vietnam",
  "Saudi Arabia", "United Arab Emirates", "Qatar", "Turkey", "Italy", "Spain", "Portugal",
  "Netherlands", "Belgium", "Switzerland", "Sweden", "Norway", "Denmark", "Finland", "Poland",
  "Ukraine", "Russia", "Greece", "Ireland", "Israel", "Jordan", "Kuwait", "Oman", "Bahrain"
];

const UI_STRINGS = {
  en: {
    tagline: "Connect with people across all countries and languages around the world.",
    login: "Log In",
    signup: "Create Account",
    impersonationError: "Security Alert: You cannot register or log in as the Founder (Nesru m / nesrumichael@gmail.com). Please create your own unique account."
  },
  om: {
    tagline: "Namoota biyyoota addunyaa hunda keessa jiranii fi afaanota garaagaraan wal-quunnamaa.",
    login: "Seeni (Login)",
    signup: "Account Uumi",
    impersonationError: "Eeggannoo Nageenyaa: Akka Abbaa Hundeesseetti (Nesru m / nesrumichael@gmail.com) galmaa'uu ykn seenuu hin dandeessu. Maaloo account mataa keetii uumi."
  },
  am: {
    tagline: "በዓለም ዙሪያ ካሉ ሰዎች፣ ሀገራት እና ቋንቋዎች ጋር ይገናኙ።",
    login: "ግባ (Log In)",
    signup: "አካውንት ይፍጠሩ",
    impersonationError: "የደህንነት ማስጠንቀቂያ፡ እንደ መስራች (Nesru m / nesrumichael@gmail.com) መመዝገብ ወይም መግባት አይችሉም። እባክዎ የራስዎን አካውንት ይፍጠሩ።"
  },
  fr: {
    tagline: "Connectez-vous avec des personnes de tous les pays et de toutes les langues du monde.",
    login: "Connexion",
    signup: "Créer un compte",
    impersonationError: "Alerte sécurité : vous ne pouvez pas vous inscrire ni vous connecter en tant que fondateur (Nesru m / nesrumichael@gmail.com)."
  },
  ar: {
    tagline: "تواصل مع الأشخاص من جميع البلدان واللغات حول العالم.",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    impersonationError: "تنبيه أمني: لا يمكنك التسجيل أو الدخول بصفتك المؤسس (Nesru m / nesrumichael@gmail.com)."
  }
};

function t(key, langCode) {
  const dict = UI_STRINGS[langCode] || UI_STRINGS.en;
  return dict[key] || UI_STRINGS.en[key] || key;
}

function hashPassword(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return "pw_" + (h >>> 0).toString(16);
}

const DEFAULT_STATE = {
  currentUser: null,
  selectedLanguage: "om",
  selectedCountry: "Ethiopia",
  currentFilter: "all",
  activeChatUserId: "user-demo-1",
  settings: { defaultPrivacy: "public" },
  registeredUsers: [
    {
      id: "user-demo-1",
      username: "sara_k",
      full_name: "Sara Kebede",
      email: "sara@example.com",
      passwordHash: hashPassword("pass1234"),
      country: "Ethiopia",
      language: "om",
      role: "member",
      avatar_url: "https://ui-avatars.com/api/?name=Sara+Kebede&background=42b72a&color=fff&size=200",
      bio: "Community member on Nesru m",
      online: true
    },
    {
      id: "user-demo-2",
      username: "alex_m",
      full_name: "Alex Morgan",
      email: "alex@example.com",
      passwordHash: hashPassword("pass1234"),
      country: "United Kingdom",
      language: "en",
      role: "member",
      avatar_url: "https://ui-avatars.com/api/?name=Alex+Morgan&background=f59e0b&color=fff&size=200",
      bio: "Global traveler & developer",
      online: true
    }
  ],
  stories: [
    { id: "st-1", author: "Sara Kebede", text: "Welcome to Nesru m Global Platform! 🌍", bg: "linear-gradient(135deg,#1877f2,#0d47a1)" },
    { id: "st-2", author: "Alex Morgan", text: "Connecting across countries & languages ✨", bg: "linear-gradient(135deg,#10b981,#047857)" }
  ],
  posts: [
    {
      id: "post-101",
      author_id: "user-demo-1",
      author_name: "Sara Kebede",
      author_avatar: "https://ui-avatars.com/api/?name=Sara+Kebede&background=42b72a&color=fff&size=200",
      isFounder: false,
      content: "Baga gara Nesru m nagaan dhuftan! Afaanotaa fi biyyoota addunyaa hunda waliin wal-quunnamaa.",
      media_url: "",
      media_type: "",
      privacy: "public",
      created_at: "Just now",
      likes: [],
      shares: 0,
      savedBy: [],
      comments: []
    }
  ],
  groups: [
    { id: "grp-1", name: "Global Community — Nesru m", members: 320, desc: "Connect across countries and languages.", joined: true }
  ],
  marketItems: [
    { id: "mkt-1", title: "Wireless Headphones", price: "3,500 ETB", location: "Addis Ababa, Ethiopia", seller: "Sara Kebede" }
  ],
  messages: {
    "user-demo-1": [
      { from: "user-demo-1", text: "Hello! Welcome to Nesru m.", time: "10:00" }
    ]
  },
  notifications: [
    { id: "n-1", text: "Welcome to Nesru m Global Platform!", read: false }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem("nesru_m_global_state_v5");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  try {
    localStorage.setItem("nesru_m_global_state_v5", JSON.stringify(state));
  } catch (e) {}
}

function isUuid(val) {
  return typeof val === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(val);
}

async function syncProfileToSupabase(userObj) {
  if (!sb || !userObj || !isUuid(userObj.id)) return;
  try {
    await sb.from("profiles").upsert({
      id: userObj.id,
      username: userObj.username,
      full_name: userObj.full_name,
      country: userObj.country || "Ethiopia",
      language: userObj.language || "om",
      bio: userObj.bio || "",
      role: userObj.role || "member"
    });
  } catch (e) {
    console.warn("Profile sync warning:", e);
  }
}

async function syncPostsFromSupabase() {
  if (!sb) return;
  try {
    const { data, error } = await sb
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error || !Array.isArray(data)) return;

    const existingIds = new Set((state.posts || []).map(p => p.id));
    let added = false;

    data.forEach(row => {
      if (!existingIds.has(row.id)) {
        state.posts.push({
          id: row.id,
          author_id: row.author_id,
          author_name: row.author_name || "Member",
          author_avatar: row.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(row.author_name || "U")}&background=1877f2&color=fff&size=200`,
          isFounder: row.author_id === PROTECTED_FOUNDER.id,
          content: row.content || "",
          media_url: row.media_url || "",
          media_type: row.media_type || "",
          privacy: row.privacy || "public",
          created_at: row.created_at ? new Date(row.created_at).toLocaleString() : "Just now",
          likes: [],
          shares: 0,
          savedBy: [],
          comments: []
        });
        existingIds.add(row.id);
        added = true;
      }
    });

    if (added) {
      saveState();
      renderPosts();
    }
  } catch (e) {
    console.warn("Posts sync warning:", e);
  }
}

async function syncMessagesFromSupabase() {
  if (!sb || !state.currentUser || !isUuid(state.currentUser.id)) return;
  try {
    const uid = state.currentUser.id;
    const { data, error } = await sb
      .from("messages")
      .select("*")
      .or(`sender_id.eq.${uid},receiver_id.eq.${uid}`)
      .order("created_at", { ascending: true })
      .limit(100);

    if (error || !Array.isArray(data)) return;

    let updated = false;
    data.forEach(row => {
      const partnerId = row.sender_id === uid ? row.receiver_id : row.sender_id;
      if (!partnerId) return;
      if (!state.messages[partnerId]) state.messages[partnerId] = [];
      const exists = state.messages[partnerId].some(m => m.id === row.id);
      if (!exists) {
        const dt = row.created_at ? new Date(row.created_at) : new Date();
        const timeStr = dt.getHours().toString().padStart(2, "0") + ":" + dt.getMinutes().toString().padStart(2, "0");
        state.messages[partnerId].push({
          id: row.id,
          from: row.sender_id,
          text: row.content,
          time: timeStr
        });
        updated = true;
      }
    });

    if (updated) {
      saveState();
      const popup = document.getElementById("messenger-popup");
      if (popup && !popup.classList.contains("hidden")) {
        renderMessenger();
      }
    }
  } catch (e) {
    console.warn("Messages sync warning:", e);
  }
}

function subscribeSupabaseRealtime() {
  if (!sb) return;
  try {
    sb.channel("nesru-chat-live")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "posts" }, (payload) => {
        const row = payload.new;
        if (!row) return;
        const exists = (state.posts || []).some(p => p.id === row.id);
        if (!exists) {
          state.posts.unshift({
            id: row.id,
            author_id: row.author_id,
            author_name: row.author_name || "Member",
            author_avatar: row.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(row.author_name || "U")}&background=1877f2&color=fff&size=200`,
            isFounder: row.author_id === PROTECTED_FOUNDER.id,
            content: row.content || "",
            media_url: row.media_url || "",
            media_type: row.media_type || "",
            privacy: row.privacy || "public",
            created_at: row.created_at ? new Date(row.created_at).toLocaleString() : "Just now",
            likes: [],
            shares: 0,
            savedBy: [],
            comments: []
          });
          saveState();
          renderPosts();
        }
      })
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
        const row = payload.new;
        if (!row || !state.currentUser) return;
        const uid = state.currentUser.id;
        if (row.sender_id !== uid && row.receiver_id !== uid) return;
        const partnerId = row.sender_id === uid ? row.receiver_id : row.sender_id;
        if (!state.messages[partnerId]) state.messages[partnerId] = [];
        const exists = state.messages[partnerId].some(m => m.id === row.id);
        if (!exists) {
          const dt = row.created_at ? new Date(row.created_at) : new Date();
          const timeStr = dt.getHours().toString().padStart(2, "0") + ":" + dt.getMinutes().toString().padStart(2, "0");
          state.messages[partnerId].push({
            id: row.id,
            from: row.sender_id,
            text: row.content,
            time: timeStr
          });
          saveState();
          const popup = document.getElementById("messenger-popup");
          if (popup && !popup.classList.contains("hidden")) {
            renderMessenger();
          }
        }
      })
      .subscribe();
  } catch (e) {
    console.warn("Realtime subscription warning:", e);
  }
}

function populateLocaleSelects() {
  const langSelects = ["auth-lang-select", "app-lang-select", "signup-language", "set-language"];
  langSelects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = WORLD_LANGUAGES.map(l => `<option value="${l.code}">${l.name}</option>`).join("");
    el.value = state.selectedLanguage || "om";
  });

  const countrySelects = ["auth-country-select", "signup-country", "set-country"];
  countrySelects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = WORLD_COUNTRIES.map(c => `<option value="${c}">${c}</option>`).join("");
    el.value = state.selectedCountry || "Ethiopia";
  });

  applyLanguageTexts();
}

function changeGlobalLanguage(langCode) {
  state.selectedLanguage = langCode;
  if (state.currentUser) state.currentUser.language = langCode;
  saveState();
  populateLocaleSelects();
  if (state.currentUser) updateUserLocaleUI();
}

function changeGlobalCountry(countryName) {
  state.selectedCountry = countryName;
  if (state.currentUser) state.currentUser.country = countryName;
  saveState();
  populateLocaleSelects();
  const mapInput = document.getElementById("map-query-input");
  if (mapInput) {
    mapInput.value = countryName;
    updateEmbeddedMap();
  }
  if (state.currentUser) updateUserLocaleUI();
}

function applyLanguageTexts() {
  const lang = state.selectedLanguage || "en";
  const tagline = document.getElementById("landing-tagline");
  if (tagline) tagline.textContent = t("tagline", lang);

  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const btnLogin = document.getElementById("btn-login-submit");
  const btnSignup = document.getElementById("btn-signup-submit");

  if (tabLogin) tabLogin.textContent = t("login", lang);
  if (tabSignup) tabSignup.textContent = t("signup", lang);
  if (btnLogin) btnLogin.textContent = t("login", lang);
  if (btnSignup) btnSignup.textContent = t("signup", lang);
}

function showAuthAlert(msg) {
  const box = document.getElementById("auth-alert");
  if (!box) return;
  box.textContent = msg;
  box.classList.remove("hidden");
}

function clearAuthAlert() {
  const box = document.getElementById("auth-alert");
  if (!box) return;
  box.textContent = "";
  box.classList.add("hidden");
}

function switchAuthTab(tab) {
  clearAuthAlert();
  document.getElementById("tab-login").classList.toggle("active", tab === "login");
  document.getElementById("tab-signup").classList.toggle("active", tab === "signup");
  document.getElementById("login-form").classList.toggle("hidden", tab !== "login");
  document.getElementById("signup-form").classList.toggle("hidden", tab !== "signup");
}

function isImpersonatingFounder(identifier, fullName, email) {
  const idLower = (identifier || "").trim().toLowerCase();
  const nameLower = (fullName || "").trim().toLowerCase();
  const emailLower = (email || "").trim().toLowerCase();

  const founderEmails = ["nesrumichael@gmail.com", PROTECTED_FOUNDER.email.toLowerCase()];
  const founderUsernames = ["nesrumichael", "nesru_m", "nesru m", "founder", "admin"];
  const founderNames = ["nesru m", "nesru michael", "nesru michael kasim"];

  if (founderEmails.includes(idLower) || founderEmails.includes(emailLower)) return true;
  if (founderUsernames.includes(idLower)) return true;
  if (nameLower && founderNames.includes(nameLower)) return true;
  return false;
}

async function handleLogin(e) {
  e.preventDefault();
  clearAuthAlert();

  const identifier = document.getElementById("login-identifier").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;

  if (isImpersonatingFounder(identifier, "", "")) {
    showAuthAlert(t("impersonationError", state.selectedLanguage));
    return;
  }

  if (sb && identifier.includes("@")) {
    const { data, error } = await sb.auth.signInWithPassword({ email: identifier, password });
    if (!error && data && data.user) {
      const u = data.user;
      const meta = u.user_metadata || {};
      const loggedUser = {
        id: u.id,
        username: meta.username || identifier.split("@")[0],
        full_name: meta.full_name || identifier.split("@")[0],
        email: u.email,
        country: state.selectedCountry || meta.country || "Ethiopia",
        language: state.selectedLanguage || meta.language || "om",
        role: "member",
        avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(meta.full_name || identifier)}&background=1877f2&color=fff&size=200`,
        bio: meta.bio || "",
        online: true
      };
      state.currentUser = loggedUser;
      saveState();
      await syncProfileToSupabase(loggedUser);
      enterProtectedApp();
      return;
    }
  }

  const found = (state.registeredUsers || []).find(
    u => u.email.toLowerCase() === identifier || u.username.toLowerCase() === identifier
  );

  if (!found) {
    showAuthAlert("Account not found. Please sign up first to create your account.");
    return;
  }

  if (found.passwordHash !== hashPassword(password)) {
    showAuthAlert("Incorrect password. Please try again.");
    return;
  }

  found.online = true;
  found.country = state.selectedCountry || found.country || "Ethiopia";
  found.language = state.selectedLanguage || found.language || "om";
  state.currentUser = found;
  saveState();
  enterProtectedApp();
}

async function handleSignup(e) {
  e.preventDefault();
  clearAuthAlert();

  const fullName = document.getElementById("signup-name").value.trim();
  const username = document.getElementById("signup-username").value.trim().toLowerCase();
  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  const password = document.getElementById("signup-password").value;
  const country = document.getElementById("signup-country").value || state.selectedCountry || "Ethiopia";
  const language = document.getElementById("signup-language").value || state.selectedLanguage || "om";

  if (password.length < 6) {
    showAuthAlert("Password must be at least 6 characters.");
    return;
  }

  if (isImpersonatingFounder(username, fullName, email)) {
    showAuthAlert(t("impersonationError", language));
    return;
  }

  const exists = (state.registeredUsers || []).some(
    u => u.email.toLowerCase() === email || u.username.toLowerCase() === username
  );
  if (exists) {
    showAuthAlert("This email or username is already registered. Please log in instead.");
    return;
  }

  let createdUserId = "user-" + Date.now();
  if (sb) {
    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, username, country, language }
      }
    });
    if (!error && data && data.user) {
      createdUserId = data.user.id;
    }
  }

  const newUser = {
    id: createdUserId,
    username,
    full_name: fullName,
    email,
    passwordHash: hashPassword(password),
    country,
    language,
    role: "member",
    avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=1877f2&color=fff&size=200`,
    bio: `${fullName} from ${country}`,
    online: true
  };

  state.registeredUsers.push(newUser);
  state.currentUser = newUser;
  state.selectedCountry = country;
  state.selectedLanguage = language;
  saveState();
  await syncProfileToSupabase(newUser);
  enterProtectedApp();
}

async function handleLogout() {
  if (sb) {
    try { await sb.auth.signOut(); } catch (e) {}
  }
  if (state.currentUser) {
    const u = (state.registeredUsers || []).find(x => x.id === state.currentUser.id);
    if (u) u.online = false;
  }
  state.currentUser = null;
  saveState();
  document.getElementById("app-shell").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
  populateLocaleSelects();
}

function enterProtectedApp() {
  if (!state.currentUser) {
    document.getElementById("app-shell").classList.add("hidden");
    document.getElementById("auth-screen").classList.remove("hidden");
    return;
  }

  if (state.currentUser.id !== PROTECTED_FOUNDER.id) {
    state.currentUser.role = "member";
  }

  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");

  populateLocaleSelects();
  updateUserLocaleUI();
  renderStories();
  renderPosts();
  renderOnlineContacts();
  renderNotifications();
  renderFriends();
  renderGroups();
  renderMarketplace();

  syncPostsFromSupabase();
  syncMessagesFromSupabase();
  subscribeSupabaseRealtime();
}

function updateUserLocaleUI() {
  const u = state.currentUser;
  if (!u) return;
  const langObj = WORLD_LANGUAGES.find(l => l.code === (u.language || state.selectedLanguage)) || { name: "English" };
  const country = u.country || state.selectedCountry || "Ethiopia";

  document.getElementById("nav-avatar").src = u.avatar_url;
  document.getElementById("nav-username").textContent = u.full_name;
  document.getElementById("drop-fullname").textContent = u.full_name;
  document.getElementById("drop-email").textContent = u.email;
  document.getElementById("drop-locale-info").textContent = `${country} • ${langObj.name}`;
  document.getElementById("role-badge").textContent = u.id === PROTECTED_FOUNDER.id ? "✔ Founder & Owner" : "✔ Verified Member";

  document.getElementById("side-avatar").src = u.avatar_url;
  document.getElementById("side-fullname").textContent = u.full_name;
  document.getElementById("side-country-lang").textContent = `${country} • ${langObj.name}`;

  document.getElementById("composer-avatar").src = u.avatar_url;
  document.getElementById("post-content").placeholder = `What's on your mind, ${u.full_name}?`;

  const mapInput = document.getElementById("map-query-input");
  if (mapInput && mapInput.value === "Ethiopia" && country !== "Ethiopia") {
    mapInput.value = country;
    updateEmbeddedMap();
  }
}

function navigateTo(view) {
  if (!state.currentUser) return;
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById("profile-dropdown").classList.add("hidden");

  const targetSec = document.getElementById(`view-${view}`);
  if (targetSec) targetSec.classList.remove("hidden");
  if (view === "profile") renderProfileView();
  if (view === "settings") populateSettingsForm();
}

function populateSettingsForm() {
  if (!state.currentUser) return;
  populateLocaleSelects();
  document.getElementById("set-fullname").value = state.currentUser.full_name || "";
  document.getElementById("set-bio").value = state.currentUser.bio || "";
  document.getElementById("set-country").value = state.currentUser.country || state.selectedCountry || "Ethiopia";
  document.getElementById("set-language").value = state.currentUser.language || state.selectedLanguage || "om";
  document.getElementById("set-default-privacy").value = (state.settings && state.settings.defaultPrivacy) || "public";
  const msg = document.getElementById("settings-save-msg");
  if (msg) msg.textContent = "";
}

async function saveAccountSettings() {
  if (!state.currentUser) return;
  const newName = document.getElementById("set-fullname").value.trim();
  const newBio = document.getElementById("set-bio").value.trim();
  const newCountry = document.getElementById("set-country").value;
  const newLang = document.getElementById("set-language").value;
  const defPriv = document.getElementById("set-default-privacy").value;

  if (newName && !isImpersonatingFounder(newName, newName, "")) {
    state.currentUser.full_name = newName;
  }
  state.currentUser.bio = newBio;
  state.currentUser.country = newCountry;
  state.currentUser.language = newLang;
  state.selectedCountry = newCountry;
  state.selectedLanguage = newLang;
  state.settings = state.settings || {};
  state.settings.defaultPrivacy = defPriv;

  const reg = (state.registeredUsers || []).find(u => u.id === state.currentUser.id);
  if (reg) {
    reg.full_name = state.currentUser.full_name;
    reg.bio = state.currentUser.bio;
    reg.country = newCountry;
    reg.language = newLang;
  }

  saveState();
  await syncProfileToSupabase(state.currentUser);
  enterProtectedApp();
  const msg = document.getElementById("settings-save-msg");
  if (msg) msg.textContent = "✔ Saved!";
}

function updateEmbeddedMap() {
  const input = document.getElementById("map-query-input");
  const q = (input && input.value.trim()) || state.selectedCountry || "Ethiopia";
  const frame = document.getElementById("google-map-frame");
  const extLink = document.getElementById("external-gmaps-link");
  const statusEl = document.getElementById("map-status-line");

  const encoded = encodeURIComponent(q);
  if (frame) frame.src = `https://maps.google.com/maps?q=${encoded}&t=&z=6&ie=UTF8&iwloc=&output=embed`;
  if (extLink) extLink.href = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  if (statusEl) statusEl.textContent = `Viewing: ${q} • Founder: Nesru m (nesrumichael@gmail.com | +251923502787)`;
}

function locateMeOnMap() {
  const statusEl = document.getElementById("map-status-line");
  if (!navigator.geolocation) {
    if (statusEl) statusEl.textContent = "Geolocation is not supported by your browser.";
    return;
  }
  if (statusEl) statusEl.textContent = "Locating your GPS position...";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      const coordQuery = `${lat},${lon}`;
      const frame = document.getElementById("google-map-frame");
      const extLink = document.getElementById("external-gmaps-link");
      if (frame) frame.src = `https://maps.google.com/maps?q=${encodeURIComponent(coordQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
      if (extLink) extLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordQuery)}`;
      if (statusEl) statusEl.textContent = `📍 Current Location: ${lat}, ${lon}`;
    },
    () => {
      if (statusEl) statusEl.textContent = "Location permission denied or unavailable.";
    }
  );
}

function toggleMobileMenu() {
  document.getElementById("left-sidebar").classList.toggle("mobile-open");
}

function toggleProfileDropdown() {
  document.getElementById("profile-dropdown").classList.toggle("hidden");
  document.getElementById("notif-dropdown").classList.add("hidden");
}

function toggleNotifications() {
  document.getElementById("notif-dropdown").classList.toggle("hidden");
  document.getElementById("profile-dropdown").classList.add("hidden");
}

function renderStories() {
  const bar = document.getElementById("stories-bar");
  if (!bar) return;
  const addCard = `
    <div class="story-card" style="background:linear-gradient(135deg,#374151,#111827);border:2px dashed rgba(255,255,255,0.45);" onclick="addStoryPrompt()">
      <div class="story-avatar-ring">+</div>
      <div class="story-name">Add Story</div>
    </div>
  `;
  const items = (state.stories || []).map(s => `
    <div class="story-card" style="background:${s.bg}" onclick="openStory('${s.id}')">
      <div class="story-avatar-ring">${(s.author || "U")[0]}</div>
      <div class="story-name">${s.author}</div>
    </div>
  `).join("");
  bar.innerHTML = addCard + items;
}

function addStoryPrompt() {
  if (!state.currentUser) return;
  const text = prompt("Write a story:");
  if (!text || !text.trim()) return;
  state.stories.unshift({
    id: "st-" + Date.now(),
    author: state.currentUser.full_name,
    text: text.trim(),
    bg: "linear-gradient(135deg,#1877f2,#0d47a1)"
  });
  saveState();
  renderStories();
}

function openStory(id) {
  const story = state.stories.find(s => s.id === id);
  if (!story) return;
  document.getElementById("story-author").textContent = story.author;
  document.getElementById("story-display").textContent = story.text;
  document.getElementById("story-modal").classList.remove("hidden");
}

function closeStoryModal() {
  document.getElementById("story-modal").classList.add("hidden");
}

function toggleMediaInput() {
  document.getElementById("media-input-row").classList.toggle("hidden");
}

async function createNewPost() {
  if (!state.currentUser) return;
  const content = document.getElementById("post-content").value.trim();
  const mediaUrl = document.getElementById("post-media-url").value.trim();
  const mediaType = document.getElementById("post-media-type").value;
  const privacy = document.getElementById("post-privacy").value;

  if (!content && !mediaUrl) return;

  const u = state.currentUser;
  const localId = "post-" + Date.now();
  const newPost = {
    id: localId,
    author_id: u.id,
    author_name: u.full_name,
    author_avatar: u.avatar_url,
    isFounder: u.id === PROTECTED_FOUNDER.id,
    content,
    media_url: mediaUrl,
    media_type: mediaUrl ? mediaType : "",
    privacy,
    created_at: "Just now",
    likes: [],
    shares: 0,
    savedBy: [],
    comments: []
  };

  state.posts.unshift(newPost);
  saveState();
  document.getElementById("post-content").value = "";
  document.getElementById("post-media-url").value = "";
  document.getElementById("media-input-row").classList.add("hidden");
  renderPosts();

  if (sb && isUuid(u.id)) {
    const { data, error } = await sb
      .from("posts")
      .insert({
        author_id: u.id,
        author_name: u.full_name,
        author_avatar: u.avatar_url || "",
        content,
        media_url: mediaUrl,
        media_type: mediaUrl ? mediaType : "",
        privacy
      })
      .select()
      .single();

    if (!error && data && data.id) {
      newPost.id = data.id;
      saveState();
      renderPosts();
    }
  }
}

function filterFeed(type, btn) {
  state.currentFilter = type;
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderPosts();
}

function handleSearch(query) {
  renderPosts(query.trim().toLowerCase());
}

function renderPosts(searchQuery = "") {
  const container = document.getElementById("posts-stream");
  if (!container || !state.currentUser) return;
  const uid = state.currentUser.id;

  const filtered = (state.posts || []).filter(p => {
    if (p.privacy === "only_me" && p.author_id !== uid) return false;
    if (state.currentFilter === "public" && p.privacy !== "public") return false;
    if (state.currentFilter === "friends" && p.privacy !== "friends") return false;
    if (state.currentFilter === "mine" && p.author_id !== uid) return false;
    if (searchQuery) {
      return (p.content || "").toLowerCase().includes(searchQuery) || (p.author_name || "").toLowerCase().includes(searchQuery);
    }
    return true;
  });

  container.innerHTML = filtered.length
    ? filtered.map(post => renderPostCardHTML(post)).join("")
    : `<div class="card"><p class="muted">No posts found.</p></div>`;
}

function renderPostCardHTML(post) {
  const uid = state.currentUser.id;
  const isLiked = (post.likes || []).includes(uid);
  const isSaved = (post.savedBy || []).includes(uid);
  const isAuthor = post.author_id === uid;
  const privacyIcon = post.privacy === "public" ? "🌍" : post.privacy === "friends" ? "👥" : "🔒";

  let mediaHTML = "";
  if (post.media_url) {
    mediaHTML = post.media_type === "video"
      ? `<video class="post-media" controls src="${post.media_url}"></video>`
      : `<img class="post-media" src="${post.media_url}" alt="Media" onerror="this.style.display='none'" />`;
  }

  const commentsHTML = (post.comments || []).map(c => `
    <div class="comment-item"><strong>${c.author}:</strong> ${c.text}</div>
  `).join("");

  return `
    <article class="card">
      <div class="post-header">
        <div class="post-author-info">
          <img src="${post.author_avatar}" alt="${post.author_name}" />
          <div>
            <strong>${post.author_name} ${post.isFounder ? '<span class="verified-badge">✔ Founder</span>' : ''}</strong>
            <div class="post-meta">${post.created_at} • ${privacyIcon}</div>
          </div>
        </div>
        ${isAuthor ? `<button type="button" class="link-btn" onclick="deletePost('${post.id}')">🗑️</button>` : ""}
      </div>
      <div class="post-body">${post.content}</div>
      ${mediaHTML}
      <div class="post-stats">
        <span>👍 ${(post.likes || []).length} Likes</span>
        <span>💬 ${(post.comments || []).length} Comments • ↗️ ${post.shares || 0} Shares</span>
      </div>
      <div class="post-actions">
        <button type="button" class="post-action-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">${isLiked ? '👍 Liked' : '👍 Like'}</button>
        <button type="button" class="post-action-btn" onclick="focusComment('${post.id}')">💬 Comment</button>
        <button type="button" class="post-action-btn" onclick="sharePost('${post.id}')">↗️ Share</button>
        <button type="button" class="post-action-btn" onclick="toggleSavePost('${post.id}')">${isSaved ? '🔖 Saved' : '🔖 Save'}</button>
      </div>
      <div class="comments-box">
        ${commentsHTML}
        <form class="comment-form" onsubmit="addComment(event, '${post.id}')">
          <input type="text" id="comment-input-${post.id}" placeholder="Write a comment..." required />
          <button type="submit" class="btn-primary">Send</button>
        </form>
      </div>
    </article>
  `;
}

function toggleLike(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  const uid = state.currentUser.id;
  const idx = post.likes.indexOf(uid);
  if (idx > -1) post.likes.splice(idx, 1);
  else post.likes.push(uid);
  saveState();
  renderPosts();
}

function focusComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  if (input) input.focus();
}

function addComment(e, postId) {
  e.preventDefault();
  const input = document.getElementById(`comment-input-${postId}`);
  const text = input.value.trim();
  if (!text) return;
  const post = state.posts.find(p => p.id === postId);
  post.comments.push({ id: "c-" + Date.now(), author: state.currentUser.full_name, text });
  saveState();
  renderPosts();
}

function sharePost(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  post.shares = (post.shares || 0) + 1;
  saveState();
  renderPosts();
}

function toggleSavePost(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  if (!post.savedBy) post.savedBy = [];
  const uid = state.currentUser.id;
  const idx = post.savedBy.indexOf(uid);
  if (idx > -1) post.savedBy.splice(idx, 1);
  else post.savedBy.push(uid);
  saveState();
  renderPosts();
}

async function deletePost(postId) {
  const target = state.posts.find(p => p.id === postId);
  if (!target || target.author_id !== state.currentUser.id) return;
  state.posts = state.posts.filter(p => p.id !== postId);
  saveState();
  renderPosts();

  if (sb && isUuid(postId)) {
    try { await sb.from("posts").delete().eq("id", postId); } catch (e) {}
  }
}

function renderProfileView() {
  const u = state.currentUser;
  if (!u) return;
  const langObj = WORLD_LANGUAGES.find(l => l.code === (u.language || state.selectedLanguage)) || { name: "English" };
  document.getElementById("prof-avatar").src = u.avatar_url;
  document.getElementById("prof-fullname").textContent = u.full_name;
  document.getElementById("prof-bio").textContent = u.bio || "";
  document.getElementById("prof-locale").textContent = `🌍 Country: ${u.country || state.selectedCountry} • 🌐 Language: ${langObj.name}`;
  document.getElementById("prof-contact-line").textContent = `📧 ${u.email} (@${u.username})`;
  const myPosts = state.posts.filter(p => p.author_id === u.id);
  document.getElementById("profile-posts-stream").innerHTML = myPosts.map(p => renderPostCardHTML(p)).join("");
}

function renderFriends() {
  const container = document.getElementById("friends-list-container");
  if (!container || !state.currentUser) return;
  const others = (state.registeredUsers || []).filter(u => u.id !== state.currentUser.id);
  container.innerHTML = others.map(u => `
    <div class="mini-card">
      <strong>${u.full_name}</strong>
      <p class="post-meta">🌍 ${u.country || "World"}</p>
      <div style="margin-top:8px;display:flex;gap:6px;">
        <button type="button" class="btn-secondary" onclick="openChatWith('${u.id}')">💬 Chat</button>
      </div>
    </div>
  `).join("");
}

function renderGroups() {
  const container = document.getElementById("groups-list-container");
  if (!container) return;
  container.innerHTML = state.groups.map(g => `
    <div class="mini-card">
      <h4>${g.name}</h4>
      <p class="post-meta">${g.members} members</p>
      <p style="font-size:13px;margin:8px 0;">${g.desc}</p>
      <button type="button" class="${g.joined ? 'btn-secondary' : 'btn-primary'}" onclick="toggleGroupJoin('${g.id}')">
        ${g.joined ? '✔ Joined' : '+ Join'}
      </button>
    </div>
  `).join("");
}

function toggleGroupJoin(gid) {
  const g = state.groups.find(x => x.id === gid);
  if (!g) return;
  g.joined = !g.joined;
  g.members += g.joined ? 1 : -1;
  saveState();
  renderGroups();
}

function createNewGroupPrompt() {
  const name = prompt("Group Name:");
  if (!name) return;
  const desc = prompt("Description:") || "Community group.";
  state.groups.unshift({ id: "grp-" + Date.now(), name, members: 1, desc, joined: true });
  saveState();
  renderGroups();
}

function renderMarketplace() {
  const container = document.getElementById("market-container");
  if (!container) return;
  container.innerHTML = state.marketItems.map(item => `
    <div class="mini-card">
      <h4>${item.title}</h4>
      <p style="color:#1877f2;font-weight:700;margin:4px 0;">${item.price}</p>
      <p class="post-meta">📍 ${item.location} • ${item.seller}</p>
    </div>
  `).join("");
}

function addMarketItemPrompt() {
  const title = prompt("Item Name:");
  if (!title) return;
  const price = prompt("Price:") || "Contact seller";
  const location = prompt("Location:") || state.selectedCountry || "Ethiopia";
  state.marketItems.unshift({ id: "mkt-" + Date.now(), title, price, location, seller: state.currentUser.full_name });
  saveState();
  renderMarketplace();
}

function renderOnlineContacts() {
  const list = document.getElementById("online-contacts-list");
  if (!list || !state.currentUser) return;
  const contacts = (state.registeredUsers || []).filter(u => u.id !== state.currentUser.id);
  document.getElementById("online-count").textContent = contacts.filter(c => c.online).length;
  list.innerHTML = contacts.map(c => `
    <div class="contact-row" onclick="openChatWith('${c.id}')">
      <span class="online-dot" style="background:${c.online ? '#31a24c' : '#9ca3af'}"></span>
      <span>${c.full_name}</span>
    </div>
  `).join("");
}

function toggleMessenger() {
  const popup = document.getElementById("messenger-popup");
  popup.classList.toggle("hidden");
  if (!popup.classList.contains("hidden")) renderMessenger();
}

function openChatWith(userId) {
  state.activeChatUserId = userId;
  document.getElementById("messenger-popup").classList.remove("hidden");
  renderMessenger();
}

function renderMessenger() {
  const contacts = (state.registeredUsers || []).filter(u => u.id !== state.currentUser.id);
  const strip = document.getElementById("chat-users-strip");
  strip.innerHTML = contacts.map(c => `
    <button type="button" class="chat-user-chip ${c.id === state.activeChatUserId ? 'active' : ''}" onclick="openChatWith('${c.id}')">${c.full_name.split(" ")[0]}</button>
  `).join("");

  const partner = contacts.find(c => c.id === state.activeChatUserId) || contacts[0];
  if (!partner) return;
  state.activeChatUserId = partner.id;
  document.getElementById("chat-partner-name").textContent = partner.full_name;

  const msgs = state.messages[partner.id] || [];
  const box = document.getElementById("chat-messages");
  box.innerHTML = msgs.map(m => `
    <div class="msg-bubble ${m.from === state.currentUser.id ? 'msg-sent' : 'msg-received'}">
      ${m.text}
      <div style="font-size:10px;opacity:0.75;margin-top:2px;">${m.time}</div>
    </div>
  `).join("");
  box.scrollTop = box.scrollHeight;
}

async function sendDirectMessage(e) {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;
  const pid = state.activeChatUserId;
  if (!state.messages[pid]) state.messages[pid] = [];
  const now = new Date();
  const time = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  const msgObj = { id: "msg-" + Date.now(), from: state.currentUser.id, text, time };
  state.messages[pid].push(msgObj);
  saveState();
  input.value = "";
  renderMessenger();

  if (sb && isUuid(state.currentUser.id) && isUuid(pid)) {
    const { data, error } = await sb
      .from("messages")
      .insert({
        sender_id: state.currentUser.id,
        receiver_id: pid,
        content: text
      })
      .select()
      .single();

    if (!error && data && data.id) {
      msgObj.id = data.id;
      saveState();
    }
  }
}

function renderNotifications() {
  const list = document.getElementById("notif-list");
  if (!list) return;
  const unread = state.notifications.filter(n => !n.read).length;
  const badge = document.getElementById("notif-badge");
  badge.textContent = unread;
  badge.style.display = unread > 0 ? "inline-block" : "none";
  list.innerHTML = state.notifications.map(n => `
    <div class="dropdown-item" style="background:${n.read ? 'transparent' : '#e7f3ff'};margin-bottom:4px;">${n.text}</div>
  `).join("");
}

function markAllNotifsRead() {
  state.notifications.forEach(n => n.read = true);
  saveState();
  renderNotifications();
}

const LEGAL_CONTENT = {
  about: {
    title: "ℹ️ About — Nesru m",
    html: `
      <p><strong>Nesru m</strong> is a social platform and map hub supporting global languages and countries.</p>
      <p><strong>Founder &amp; Owner:</strong> Nesru m</p>
      <p><strong>Website:</strong> <a href="${OFFICIAL_SITE_URL}" target="_blank" rel="noopener">${OFFICIAL_SITE_URL}</a></p>
      <p><strong>Email:</strong> nesrumichael@gmail.com | <strong>Phone:</strong> +251923502787</p>
    `
  },
  privacy: {
    title: "🔒 Privacy Policy",
    html: `<p>Your privacy and account credentials are protected on <strong>Nesru m</strong>. Founder identity protection prevents impersonation.</p>`
  },
  terms: {
    title: "📜 Terms of Service",
    html: `<p>Users must respect community guidelines, avoid impersonation, and take responsibility for their own posts.</p>`
  },
  transparency: {
    title: "🔍 Transparency",
    html: `<p><strong>Founder &amp; Owner:</strong> Nesru m (nesrumichael@gmail.com | +251923502787).</p>`
  },
  support: {
    title: "📞 Contact Support",
    html: `<p>Email: <a href="mailto:nesrumichael@gmail.com">nesrumichael@gmail.com</a> • Phone: <a href="tel:+251923502787">+251923502787</a></p>`
  },
  copyright: {
    title: "©️ Copyright Notice",
    html: `<p><strong>© 2026 Nesru m. All rights reserved.</strong></p>`
  }
};

function openLegalModal(key) {
  const item = LEGAL_CONTENT[key];
  if (!item) return;
  document.getElementById("legal-modal-title").textContent = item.title;
  document.getElementById("legal-modal-body").innerHTML = item.html;
  document.getElementById("legal-modal").classList.remove("hidden");
}

function closeLegalModal() {
  document.getElementById("legal-modal").classList.add("hidden");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

populateLocaleSelects();
if (state.currentUser) {
  enterProtectedApp();
}
