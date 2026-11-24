/**
 * Nesru Michael Social Platform — Full Frontend + Realtime Engine
 * Founder & Owner: Nesru Michael
 * Email: nesrumichael@gmail.com
 * Phone: +251923502787
 *
 * Supports dual mode:
 * 1) Instant Offline/LocalStorage Mode (works immediately out of the box)
 * 2) Live Supabase Cloud Mode (just paste SUPABASE_URL & SUPABASE_ANON_KEY below)
 */

const SUPABASE_URL = "https://lcyouqcwcwmvbkxgengj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeW91cWN3Y3dtdmJreGdlbmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0NzI1NDQsImV4cCI6MjExMTA0ODU0NH0.eJHcCs2NPgItUnYBxRPBMFXquDQMBFHLUDkPkPzskA4";

let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

const FOUNDER_USER = {
  id: "user-nesru-001",
  username: "nesrumichael",
  full_name: "Nesru Michael",
  email: "nesrumichael@gmail.com",
  phone: "+251923502787",
  role: "Founder & Owner",
  avatar_url: "https://ui-avatars.com/api/?name=Nesru+Michael&background=1877f2&color=fff&size=200",
  bio: "Founder & Software Engineer at Nesru Michael Platform. Building modern social & web ecosystems. Contact: nesrumichael@gmail.com | +251923502787"
};

const DEFAULT_STATE = {
  currentUser: null,
  currentFilter: "all",
  activeChatUserId: "user-bontu-002",
  users: [
    FOUNDER_USER,
    {
      id: "user-bontu-002",
      username: "bontu_t",
      full_name: "Bontu Tadesse",
      email: "bontu@example.com",
      avatar_url: "https://ui-avatars.com/api/?name=Bontu+Tadesse&background=42b72a&color=fff&size=200",
      bio: "Software Developer & Community Lead",
      online: true,
      friendStatus: "accepted"
    },
    {
      id: "user-obsa-003",
      username: "obsa_g",
      full_name: "Obsa Gemechu",
      email: "obsa@example.com",
      avatar_url: "https://ui-avatars.com/api/?name=Obsa+Gemechu&background=f59e0b&color=fff&size=200",
      bio: "Tech Entrepreneur & Educator",
      online: true,
      friendStatus: "accepted"
    },
    {
      id: "user-chaltu-004",
      username: "chaltu_k",
      full_name: "Chaltu Kebede",
      email: "chaltu@example.com",
      avatar_url: "https://ui-avatars.com/api/?name=Chaltu+Kebede&background=8b5cf6&color=fff&size=200",
      bio: "Digital Creator",
      online: true,
      friendStatus: "pending"
    },
    {
      id: "user-dawit-005",
      username: "dawit_m",
      full_name: "Dawit Mekonnen",
      email: "dawit@example.com",
      avatar_url: "https://ui-avatars.com/api/?name=Dawit+Mekonnen&background=ec4899&color=fff&size=200",
      bio: "UI/UX Designer",
      online: false,
      friendStatus: "suggested"
    }
  ],
  stories: [
    { id: "st-1", author: "Nesru Michael", text: "Baga gara Platformii Nesru Michael nagaan dhuftan! 🚀", bg: "linear-gradient(135deg,#1877f2,#0d47a1)" },
    { id: "st-2", author: "Bontu Tadesse", text: "Coding new features today 💻✨", bg: "linear-gradient(135deg,#10b981,#047857)" },
    { id: "st-3", author: "Obsa Gemechu", text: "Oromia Tech Community Meetup 2026 🌍", bg: "linear-gradient(135deg,#f59e0b,#b45309)" },
    { id: "st-4", author: "Chaltu Kebede", text: "Har'a guyyaa gaarii haa ta'u! ☀️", bg: "linear-gradient(135deg,#8b5cf6,#5b21b6)" }
  ],
  posts: [
    {
      id: "post-101",
      author_id: "user-nesru-001",
      author_name: "Nesru Michael",
      author_avatar: FOUNDER_USER.avatar_url,
      verified: true,
      content: "Baga gara weebsaayitii fi appii hawaasummaa koo — Nesru Michael Platform nagaan dhuftan! 🎉\nAsitti hiriyyoota keessan waliin wal-quunnamuu, yaada keessan qooddachuu, garee uumuu fi ergaa battalaa (Real-time Messenger) erguu dandeessu.\n\nQuunnamtiif: nesrumichael@gmail.com | +251923502787",
      media_url: "",
      media_type: "",
      privacy: "public",
      created_at: "Amma (Just now)",
      likes: ["user-bontu-002", "user-obsa-003"],
      shares: 4,
      savedBy: [],
      comments: [
        { id: "c-1", author: "Bontu Tadesse", text: "Baga gammaddan obbo Nesru! Appiin kun baay'ee bareeda." },
        { id: "c-2", author: "Obsa Gemechu", text: "Hojiin teeknooloojii kun boonsaadha, jabaadhu!" }
      ]
    },
    {
      id: "post-102",
      author_id: "user-bontu-002",
      author_name: "Bontu Tadesse",
      author_avatar: "https://ui-avatars.com/api/?name=Bontu+Tadesse&background=42b72a&color=fff&size=200",
      verified: false,
      content: "Web development ammayyaa fi PWA (Progressive Web App) ijaaruun bilbila irratti akka appii idileetti fe'amee hojjechuun bu'aa guddaa qaba.",
      media_url: "",
      media_type: "",
      privacy: "friends",
      created_at: "Sa'aatii 2 dura",
      likes: ["user-nesru-001"],
      shares: 1,
      savedBy: [],
      comments: []
    }
  ],
  groups: [
    { id: "grp-1", name: "Ethiopia Software Developers", members: 1420, desc: "Garee ogeessota software, web fi AI Itoophiyaa.", joined: true },
    { id: "grp-2", name: "Oromia Innovation & Business", members: 980, desc: "Waldaa daldalaa, kalaqaa fi teeknooloojii.", joined: true },
    { id: "grp-3", name: "Nesru Michael Official Community", members: 2540, desc: "Garee deeggartootaa fi fayyadamtoota platformii Nesru Michael.", joined: true }
  ],
  marketItems: [
    { id: "mkt-1", title: "Laptop HP EliteBook Core i7", price: "48,000 ETB", location: "Finfinnee", seller: "Nesru Michael" },
    { id: "mkt-2", title: "Smartphone Samsung Galaxy A55", price: "34,500 ETB", location: "Chiro / Adama", seller: "Obsa Gemechu" }
  ],
  messages: {
    "user-bontu-002": [
      { from: "user-bontu-002", text: "Akkam Nesru! Platformiin haaraan kun haala gaariin hojjechaa jira.", time: "10:15" },
      { from: "user-nesru-001", text: "Galatoomi Bontu! Amma live chat fi database guutuun qophaa'eera.", time: "10:17" }
    ],
    "user-obsa-003": [
      { from: "user-obsa-003", text: "Nagaa jirtaa Nesru? Pirojektii irratti haa mari'annu.", time: "09:40" }
    ]
  },
  notifications: [
    { id: "n-1", text: "Bontu Tadesse maxxansa kee irratti yaada (comment) kenneera.", read: false },
    { id: "n-2", text: "Chaltu Kebede gaaffii hiriyyummaa (Friend Request) siif ergiteetti.", read: false },
    { id: "n-3", text: "Obsa Gemechu maxxansa kee jaallateera (Liked).", read: false }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem("nesru_social_state_v1");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Storage fallback:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  try {
    localStorage.setItem("nesru_social_state_v1", JSON.stringify(state));
  } catch (e) {
    console.warn("Save failed:", e);
  }
}

// AUTHENTICATION
function switchAuthTab(tab) {
  document.getElementById("tab-login").classList.toggle("active", tab === "login");
  document.getElementById("tab-signup").classList.toggle("active", tab === "signup");
  document.getElementById("login-form").classList.toggle("hidden", tab !== "login");
  document.getElementById("signup-form").classList.toggle("hidden", tab !== "signup");
}

function loginAsFounderDemo() {
  state.currentUser = FOUNDER_USER;
  saveState();
  initApp();
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  if (email === "nesrumichael@gmail.com" || email === "nesrumichael") {
    state.currentUser = FOUNDER_USER;
  } else {
    const found = state.users.find(u => u.email.toLowerCase() === email || u.username.toLowerCase() === email);
    state.currentUser = found || {
      id: "user-" + Date.now(),
      username: email.split("@")[0],
      full_name: email.split("@")[0],
      email: email,
      avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(email)}&background=1877f2&color=fff`,
      bio: "Member of Nesru Michael Social Platform"
    };
  }
  saveState();
  initApp();
}

function handleSignup(e) {
  e.preventDefault();
  const fullName = document.getElementById("signup-name").value.trim();
  const username = document.getElementById("signup-username").value.trim();
  const email = document.getElementById("signup-email").value.trim();

  const newUser = {
    id: "user-" + Date.now(),
    username,
    full_name: fullName,
    email,
    avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=1877f2&color=fff`,
    bio: "New member at Nesru Michael Platform",
    online: true,
    friendStatus: "accepted"
  };

  state.users.push(newUser);
  state.currentUser = newUser;
  saveState();
  initApp();
}

function handleLogout() {
  state.currentUser = null;
  saveState();
  document.getElementById("app-shell").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
}

// INITIALIZE APP
function initApp() {
  if (!state.currentUser) return;
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");

  const u = state.currentUser;
  document.getElementById("nav-avatar").src = u.avatar_url;
  document.getElementById("nav-username").textContent = u.full_name.split(" ")[0];
  document.getElementById("drop-fullname").textContent = u.full_name;
  document.getElementById("drop-email").textContent = u.email;
  document.getElementById("side-avatar").src = u.avatar_url;
  document.getElementById("side-fullname").textContent = u.full_name;
  document.getElementById("composer-avatar").src = u.avatar_url;
  document.getElementById("post-content").placeholder = `Maal yaadaa jirta, ${u.full_name}?`;

  const isFounder = u.email === "nesrumichael@gmail.com";
  document.getElementById("founder-badge").textContent = isFounder ? "✔ Founder & Owner" : "✔ Verified Member";

  renderStories();
  renderPosts();
  renderOnlineContacts();
  renderNotifications();
  renderFriends();
  renderGroups();
  renderReels();
  renderMarketplace();
}

// NAVIGATION
function navigateTo(view) {
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById("profile-dropdown").classList.add("hidden");

  if (["feed", "profile", "friends", "groups", "reels", "marketplace"].includes(view)) {
    document.getElementById(`view-${view}`).classList.remove("hidden");
    if (view === "profile") renderProfileView();
  } else {
    const extraSec = document.getElementById("view-extra");
    extraSec.classList.remove("hidden");
    renderExtraSection(view);
  }
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

// STORIES
function renderStories() {
  const bar = document.getElementById("stories-bar");
  bar.innerHTML = state.stories.map(s => `
    <div class="story-card" style="background:${s.bg}" onclick="openStory('${s.id}')">
      <div class="story-avatar-ring">${s.author[0]}</div>
      <div class="story-name">${s.author}</div>
    </div>
  `).join("");
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

// POSTS & FEED
function toggleMediaInput() {
  document.getElementById("media-input-row").classList.toggle("hidden");
}

function createNewPost() {
  const content = document.getElementById("post-content").value.trim();
  const mediaUrl = document.getElementById("post-media-url").value.trim();
  const mediaType = document.getElementById("post-media-type").value;
  const privacy = document.getElementById("post-privacy").value;

  if (!content && !mediaUrl) {
    alert("Maaloo barreeffama ykn linkii suuraa galchi.");
    return;
  }

  const u = state.currentUser;
  const newPost = {
    id: "post-" + Date.now(),
    author_id: u.id,
    author_name: u.full_name,
    author_avatar: u.avatar_url,
    verified: u.email === "nesrumichael@gmail.com",
    content,
    media_url: mediaUrl,
    media_type: mediaUrl ? mediaType : "",
    privacy,
    created_at: "Amma (Just now)",
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
  const uid = state.currentUser.id;

  let filtered = state.posts.filter(p => {
    if (p.privacy === "only_me" && p.author_id !== uid) return false;
    if (state.currentFilter === "public" && p.privacy !== "public") return false;
    if (state.currentFilter === "friends" && p.privacy !== "friends") return false;
    if (state.currentFilter === "mine" && p.author_id !== uid) return false;
    if (searchQuery) {
      return p.content.toLowerCase().includes(searchQuery) || p.author_name.toLowerCase().includes(searchQuery);
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card"><p class="muted">Maxxansi argame hin jiru.</p></div>`;
    return;
  }

  container.innerHTML = filtered.map(post => renderPostCardHTML(post)).join("");
}

function renderPostCardHTML(post) {
  const uid = state.currentUser.id;
  const isLiked = post.likes.includes(uid);
  const isSaved = (post.savedBy || []).includes(uid);
  const isOwner = post.author_id === uid || state.currentUser.email === "nesrumichael@gmail.com";
  const privacyIcon = post.privacy === "public" ? "🌍" : post.privacy === "friends" ? "👥" : "🔒";

  let mediaHTML = "";
  if (post.media_url) {
    if (post.media_type === "video") {
      mediaHTML = `<video class="post-media" controls src="${post.media_url}"></video>`;
    } else {
      mediaHTML = `<img class="post-media" src="${post.media_url}" alt="Post media" onerror="this.style.display='none'" />`;
    }
  }

  const commentsHTML = post.comments.map(c => `
    <div class="comment-item">
      <strong>${c.author}:</strong> ${c.text}
    </div>
  `).join("");

  return `
    <article class="card">
      <div class="post-header">
        <div class="post-author-info">
          <img src="${post.author_avatar}" alt="${post.author_name}" />
          <div>
            <strong>${post.author_name} ${post.verified ? '<span class="verified-badge">✔</span>' : ''}</strong>
            <div class="post-meta">${post.created_at} • ${privacyIcon}</div>
          </div>
        </div>
        ${isOwner ? `<button class="link-btn" onclick="deletePost('${post.id}')" title="Haqi">🗑️</button>` : ""}
      </div>
      <div class="post-body">${post.content}</div>
      ${mediaHTML}
      <div class="post-stats">
        <span>👍 ${post.likes.length} Likes</span>
        <span>💬 ${post.comments.length} Comments • ↗️ ${post.shares} Shares</span>
      </div>
      <div class="post-actions">
        <button class="post-action-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">
          ${isLiked ? '👍 Liked' : '👍 Like'}
        </button>
        <button class="post-action-btn" onclick="focusComment('${post.id}')">💬 Comment</button>
        <button class="post-action-btn" onclick="sharePost('${post.id}')">↗️ Share</button>
        <button class="post-action-btn" onclick="toggleSavePost('${post.id}')">
          ${isSaved ? '🔖 Saved' : '🔖 Save'}
        </button>
      </div>
      <div class="comments-box">
        ${commentsHTML}
        <form class="comment-form" onsubmit="addComment(event, '${post.id}')">
          <input type="text" id="comment-input-${post.id}" placeholder="Yaada barreessi..." required />
          <button type="submit" class="btn-primary">Ergi</button>
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
  post.comments.push({
    id: "c-" + Date.now(),
    author: state.currentUser.full_name,
    text
  });
  saveState();
  renderPosts();
}

function sharePost(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  post.shares += 1;
  saveState();
  renderPosts();
  alert("Maxxansi kun hiriyyoota keetiif qoodameera (Shared)!");
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

function deletePost(postId) {
  if (!confirm("Maxxansa kana haquu barbaaddaa?")) return;
  state.posts = state.posts.filter(p => p.id !== postId);
  saveState();
  renderPosts();
}

// PROFILE VIEW
function renderProfileView() {
  const u = state.currentUser;
  document.getElementById("prof-avatar").src = u.avatar_url;
  document.getElementById("prof-fullname").innerHTML = `${u.full_name} ${u.email === 'nesrumichael@gmail.com' ? '<span class="verified-badge">✔ Founder & Owner</span>' : ''}`;
  document.getElementById("prof-bio").textContent = u.bio || "";
  document.getElementById("prof-contact-line").textContent = `📧 ${u.email} | 📱 ${u.phone || '+251923502787'}`;

  const myPosts = state.posts.filter(p => p.author_id === u.id);
  document.getElementById("profile-posts-stream").innerHTML = myPosts.map(p => renderPostCardHTML(p)).join("");
}

function editProfileBio() {
  const newBio = prompt("Bio haaraa galchi:", state.currentUser.bio);
  if (newBio !== null) {
    state.currentUser.bio = newBio;
    saveState();
    renderProfileView();
  }
}

// FRIENDS / SOCIAL GRAPH
function renderFriends() {
  const container = document.getElementById("friends-list-container");
  const others = state.users.filter(u => u.id !== state.currentUser.id);
  container.innerHTML = others.map(u => `
    <div class="mini-card">
      <strong>${u.full_name}</strong>
      <p class="post-meta">${u.bio || ''}</p>
      <p style="margin:8px 0;font-size:12px;">Status: <strong>${u.friendStatus.toUpperCase()}</strong></p>
      ${u.friendStatus === 'accepted'
        ? `<button class="btn-secondary" onclick="openChatWith('${u.id}')">💬 Ergaa Ergi</button>`
        : `<button class="btn-primary" onclick="acceptFriend('${u.id}')">🤝 Hiriyyaa Ta'i</button>`
      }
    </div>
  `).join("");
}

function acceptFriend(userId) {
  const u = state.users.find(x => x.id === userId);
  if (u) u.friendStatus = "accepted";
  saveState();
  renderFriends();
}

// GROUPS
function renderGroups() {
  const container = document.getElementById("groups-list-container");
  container.innerHTML = state.groups.map(g => `
    <div class="mini-card">
      <h4>${g.name}</h4>
      <p class="post-meta">${g.members} miseensota</p>
      <p style="font-size:13px;margin:8px 0;">${g.desc}</p>
      <button class="${g.joined ? 'btn-secondary' : 'btn-primary'}" onclick="toggleGroupJoin('${g.id}')">
        ${g.joined ? '✔ Miseensa (Joined)' : '+ Garee Seeni'}
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
  const name = prompt("Maqaa Garee Haaraa:");
  if (!name) return;
  const desc = prompt("Ibsa garee:") || "Garee hawaasaa haaraa.";
  state.groups.unshift({ id: "grp-" + Date.now(), name, members: 1, desc, joined: true });
  saveState();
  renderGroups();
}

// REELS & MARKETPLACE
function renderReels() {
  document.getElementById("reels-container").innerHTML = `
    <div class="grid-cards">
      <div class="mini-card">
        <h4>🎥 Akkaataa Appii PWA Ijaaran</h4>
        <p class="post-meta">By Nesru Michael • 1.2K views</p>
        <p style="font-size:13px;margin-top:6px;">HTML, CSS, JS fi Supabase fayyadamuun appii bilbilaa fi weebii ijaaruu.</p>
      </div>
      <div class="mini-card">
        <h4>🎥 Oromia Digital Transformation</h4>
        <p class="post-meta">By Obsa Gemechu • 840 views</p>
        <p style="font-size:13px;margin-top:6px;">Teeknooloojii ammayyaa fi daldala dijitaalaa.</p>
      </div>
    </div>
  `;
}

function renderMarketplace() {
  document.getElementById("market-container").innerHTML = state.marketItems.map(item => `
    <div class="mini-card">
      <h4>${item.title}</h4>
      <p style="color:#1877f2;font-weight:700;margin:4px 0;">${item.price}</p>
      <p class="post-meta">📍 ${item.location} • Gurguraa: ${item.seller}</p>
      <button class="btn-primary" style="margin-top:8px;" onclick="alert('Gurguraa quunnamuuf: nesrumichael@gmail.com | +251923502787')">Bitachuuf Quunnami</button>
    </div>
  `).join("");
}

function addMarketItemPrompt() {
  const title = prompt("Maqaa meeshaa:");
  if (!title) return;
  const price = prompt("Gatii (Fkn: 15,000 ETB):") || "Bilbilaan gaafadhu";
  const location = prompt("Bakka:") || "Ethiopia";
  state.marketItems.unshift({
    id: "mkt-" + Date.now(),
    title,
    price,
    location,
    seller: state.currentUser.full_name
  });
  saveState();
  renderMarketplace();
}

function renderExtraSection(view) {
  const titleEl = document.getElementById("extra-view-title");
  const bodyEl = document.getElementById("extra-view-body");

  if (view === "saved") {
    titleEl.textContent = "🔖 Saved Posts (Maxxansaalee Ol-kaa'aman)";
    const saved = state.posts.filter(p => (p.savedBy || []).includes(state.currentUser.id));
    bodyEl.innerHTML = saved.length
      ? saved.map(p => renderPostCardHTML(p)).join("")
      : `<p class="muted">Hanga ammaatti maxxansa ol-kaa'ame hin qabdu.</p>`;
  } else if (view === "memories") {
    titleEl.textContent = "🕰️ Memories (Yaadannoo)";
    bodyEl.innerHTML = `<p>Bara 2026 keessa platformii <strong>Nesru Michael</strong> irratti maxxansaalee fi hiriyyoota hedduu horatteetta!</p>`;
  } else if (view === "events") {
    titleEl.textContent = "📅 Events (Taateewwan)";
    bodyEl.innerHTML = `<p><strong>1. Ethiopia Web &amp; Mobile App Summit 2026</strong> — Qopheessaan: Nesru Michael.</p>`;
  } else if (view === "pages") {
    titleEl.textContent = "🚩 Pages (Fuulota)";
    bodyEl.innerHTML = `<p><strong>Nesru Michael Official Tech Page</strong> — Email: nesrumichael@gmail.com | Tel: +251923502787</p>`;
  } else if (view === "ads") {
    titleEl.textContent = "📊 Ads Manager (Bulchiinsa Beeksisa)";
    bodyEl.innerHTML = `<p>Daldala keessan beeksisuuf nu quunnamaa: <strong>nesrumichael@gmail.com</strong> ykn bilbila <strong>+251923502787</strong>.</p>`;
  }
}

// CONTACTS & REAL-TIME MESSENGER
function renderOnlineContacts() {
  const list = document.getElementById("online-contacts-list");
  const contacts = state.users.filter(u => u.id !== state.currentUser.id);
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
  if (!popup.classList.contains("hidden")) {
    renderMessenger();
  }
}

function openChatWith(userId) {
  state.activeChatUserId = userId;
  document.getElementById("messenger-popup").classList.remove("hidden");
  renderMessenger();
}

function renderMessenger() {
  const contacts = state.users.filter(u => u.id !== state.currentUser.id);
  const strip = document.getElementById("chat-users-strip");
  strip.innerHTML = contacts.map(c => `
    <button class="chat-user-chip ${c.id === state.activeChatUserId ? 'active' : ''}" onclick="openChatWith('${c.id}')">
      ${c.full_name.split(" ")[0]}
    </button>
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

function sendDirectMessage(e) {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;

  const pid = state.activeChatUserId;
  if (!state.messages[pid]) state.messages[pid] = [];

  const now = new Date();
  const time = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");

  state.messages[pid].push({
    from: state.currentUser.id,
    text,
    time
  });

  saveState();
  input.value = "";
  renderMessenger();
}

// NOTIFICATIONS
function renderNotifications() {
  const list = document.getElementById("notif-list");
  const unread = state.notifications.filter(n => !n.read).length;
  const badge = document.getElementById("notif-badge");
  badge.textContent = unread;
  badge.style.display = unread > 0 ? "inline-block" : "none";

  list.innerHTML = state.notifications.map(n => `
    <div class="dropdown-item" style="background:${n.read ? 'transparent' : '#e7f3ff'};margin-bottom:4px;">
      ${n.text}
    </div>
  `).join("");
}

function markAllNotifsRead() {
  state.notifications.forEach(n => n.read = true);
  saveState();
  renderNotifications();
}

// LEGAL & INFO PAGES MODAL
const LEGAL_CONTENT = {
  about: {
    title: "ℹ️ About Us — Waa'ee Platformii Nesru Michael",
    html: `
      <p><strong>Nesru Michael Social Platform</strong> weebsaayitii fi appii wal-quunnamtii hawaasaa ammayyaa kan namoota walitti fiduu, yaada qooddachuu, garee ijaaruu fi ergaa battalaa (Real-time Messaging) dabarsuuf qophaa'edha.</p>
      <p><strong>Abbaa fi Hundeeffamaa (Founder &amp; Owner):</strong> Nesru Michael</p>
      <p><strong>Email:</strong> nesrumichael@gmail.com</p>
      <p><strong>Bilbila (Phone):</strong> +251923502787</p>
    `
  },
  contact: {
    title: "📞 Contact & Support — Nu Quunnamaa",
    html: `
      <p>Deeggarsa teeknikaa, yaada ykn gaaffii daldalaaf kallattiin abbaa platformii quunnamuu dandeessu:</p>
      <ul>
        <li><strong>Abbaa Appii (Owner):</strong> Nesru Michael</li>
        <li><strong>Email:</strong> <a href="mailto:nesrumichael@gmail.com">nesrumichael@gmail.com</a></li>
        <li><strong>Bilbila / WhatsApp / Telegram:</strong> <a href="tel:+251923502787">+251923502787</a></li>
      </ul>
    `
  },
  privacy: {
    title: "🔒 Privacy Policy — Imaammata Iccitii Odeeffannoo",
    html: `
      <p>Platformiin <strong>Nesru Michael</strong> iccitii fi nageenya odeeffannoo fayyadamtootaaf dursa kenna:</p>
      <ul>
        <li>Odeeffannoon dhuunfaa (Email, Maqaa, Ergaa Dhuunfaa) qaama sadaffaatti hin gurguramu.</li>
        <li>Fayyadamaan kamuu maxxansa isaa <em>Public</em>, <em>Friends</em>, ykn <em>Only Me</em> gochuun to'achuu danda'a.</li>
        <li>Ergaan dhuunfaa (Direct Messages) namoota lamaan wal-haasa'an gidduutti qofa eegama (Row Level Security).</li>
      </ul>
    `
  },
  terms: {
    title: "📜 Terms of Service — Waliigaltee Tajaajilaa",
    html: `
      <p>Platformii <strong>Nesru Michael</strong> yeroo fayyadamtan seerota armaan gadii kabajuuf waliigaltu:</p>
      <ul>
        <li>Herrega sobaa (impersonation) banuun dhorkaadha.</li>
        <li>Mirga abbummaa kalaqaa (Copyright) kan platformii fi fayyadamtoota biroo kabajuu.</li>
        <li>Platformichi tajaajila fooyyessuuf yeroo yeroon haaromfamaa deema.</li>
      </ul>
    `
  },
  standards: {
    title: "⚖️ Community Standards & Transparency",
    html: `
      <p>Hawaasa nagaa fi kabaja qabu ijaaruuf:</p>
      <ul>
        <li>Arrabsoo, jibbiinsa sanyii/amantaa fi oduu sobaa (misinformation) maxxansuun dhorkaadha.</li>
        <li>Spam fi gochaalee seeraan alaa kamiyyuu ni haqamu, herregni sunis ni cufama.</li>
        <li>Komii yoo qabaattan gara <strong>nesrumichael@gmail.com</strong> ykn <strong>+251923502787</strong> ergaa.</li>
      </ul>
    `
  }
};

function openLegalModal(key) {
  const item = LEGAL_CONTENT[key];
  if (!item) return;
  document.getElementById("legal-modal-title").textContent = item.title;
  document.getElementById("legal-modal-body").innerHTML = item.html;
  document.getElementById("legal-modal").classList.remove("hidden");
  document.getElementById("profile-dropdown").classList.add("hidden");
}

function closeLegalModal() {
  document.getElementById("legal-modal").classList.add("hidden");
}

// REGISTER SERVICE WORKER FOR PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// AUTO-BOOT IF LOGGED IN
if (state.currentUser) {
  initApp();
}// ============================================================================
// DABALATA GAMA DUUBAA (APPENDED) — SIRNA DURAANII UTUU HIN MIIDHIN
// ============================================================================
(function () {
  function showOwnerButtonOnlyForFounder() {
    const demoBtn = document.querySelector("#login-form .btn-demo");
    if (demoBtn) {
      demoBtn.style.display = "block";
    }
  }

  // 1) Linkii irratti ?owner=nesru yoo itti dabaltu qofa qabduun siif mul'ata
  if (window.location.search.includes("owner=nesru")) {
    showOwnerButtonOnlyForFounder();
  }

  // 2) Logo "NM" fuula seensaa irra jiru yeroo 5 walitti aansitee yoo cuqaastu (bilbilaafis ni hojjeta!)
  let tapCount = 0;
  let tapTimer = null;
  const brandLogo = document.querySelector(".brand-logo-large");
  if (brandLogo) {
    brandLogo.style.cursor = "pointer";
    brandLogo.addEventListener("click", function () {
      tapCount++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { tapCount = 0; }, 2000);
      if (tapCount >= 5) {
        showOwnerButtonOnlyForFounder();
        tapCount = 0;
      }
    });// ============================================================================
// DABALATA GAMA DUUBAA — ACCOUNT FEED, FOLLOW & 2,000 FRIEND LIMIT
// Abbaa Appii: Nesru Michael | nesrumichael@gmail.com | +251923502787
// ============================================================================
(function () {
  const MAX_FRIENDS_LIMIT = 2000;

  // Mirkaneeffannaa galmee & abbummaa platformii
  if (!state.platformMeta) {
    state.platformMeta = {
      owner: "Nesru Michael",
      email: "nesrumichael@gmail.com",
      phone: "+251923502787",
      copyright: "© 2026 Nesru Michael. Mirgi abbummaa seeraan eegamaadha."
    };
  }

  // Fayyadamaa kamuu irratti following fi friends array akka jiraatan mirkaneessi
  state.users.forEach((u) => {
    if (!Array.isArray(u.following)) u.following = [];
    if (!Array.isArray(u.followers)) u.followers = [];
    if (!Array.isArray(u.friendsList)) {
      u.friendsList = u.friendStatus === "accepted" ? [u.id] : [];
    }
  });

  if (state.currentUser) {
    if (!Array.isArray(state.currentUser.following)) state.currentUser.following = [];
    if (!Array.isArray(state.currentUser.followers)) state.currentUser.followers = [];
    if (!Array.isArray(state.currentUser.friendsList)) state.currentUser.friendsList = [];
  }

  // Namoonni account mataa isaanii yeroo uumatan postii hundaa akka argan gochuu
  const originalHandleSignup = window.handleSignup;
  window.handleSignup = function (e) {
    if (typeof originalHandleSignup === "function") {
      originalHandleSignup(e);
    }
    if (state.currentUser) {
      state.currentUser.following = state.currentUser.following || [];
      state.currentUser.followers = state.currentUser.followers || [];
      state.currentUser.friendsList = state.currentUser.friendsList || [];
      state.currentFilter = "all";
      saveState();
      if (typeof renderPosts === "function") renderPosts();
      if (typeof renderFriends === "function") renderEnhancedFriends();
    }
  };

  // Follow toggle (daangaa malee ol dabalaa deema)
  window.toggleFollowUser = function (targetUserId) {
    if (!state.currentUser) return;
    const me = state.users.find((u) => u.id === state.currentUser.id) || state.currentUser;
    const target = state.users.find((u) => u.id === targetUserId);
    if (!target) return;

    me.following = me.following || [];
    target.followers = target.followers || [];

    const idx = me.following.indexOf(targetUserId);
    if (idx > -1) {
      me.following.splice(idx, 1);
      const fIdx = target.followers.indexOf(me.id);
      if (fIdx > -1) target.followers.splice(fIdx, 1);
    } else {
      me.following.push(targetUserId);
      if (!target.followers.includes(me.id)) {
        target.followers.push(me.id);
      }
    }

    state.currentUser.following = me.following;
    saveState();
    renderEnhancedFriends();
  };

  // Add/Remove Friend (hanga 2,000 qofa)
  window.toggleFriendWithLimit = function (targetUserId) {
    if (!state.currentUser) return;
    const me = state.users.find((u) => u.id === state.currentUser.id) || state.currentUser;
    const target = state.users.find((u) => u.id === targetUserId);
    if (!target) return;

    me.friendsList = me.friendsList || [];
    const existingIdx = me.friendsList.indexOf(targetUserId);

    if (existingIdx > -1) {
      me.friendsList.splice(existingIdx, 1);
      target.friendStatus = "suggested";
    } else {
      if (me.friendsList.length >= MAX_FRIENDS_LIMIT) {
        alert(
          `Daangaan hiriyyummaa (Friends) hanga ${MAX_FRIENDS_LIMIT.toLocaleString()} guuteera! Hiriyyaa haaraa dabaluu hin dandeessu; garuu Follow gochuu ni dandeessa.`
        );
        return;
      }
      me.friendsList.push(targetUserId);
      target.friendStatus = "accepted";
    }

    state.currentUser.friendsList = me.friendsList;
    saveState();
    renderEnhancedFriends();
  };

  // Fuula Friends irratti Follow + Friend (Max 2,000) + Followers counter mul'isuu
  window.renderEnhancedFriends = function () {
    const container = document.getElementById("friends-list-container");
    if (!container || !state.currentUser) return;

    const me = state.users.find((u) => u.id === state.currentUser.id) || state.currentUser;
    const myFriends = me.friendsList || [];
    const myFollowing = me.following || [];
    const others = state.users.filter((u) => u.id !== me.id);

    const summaryHtml = `
      <div class="mini-card" style="grid-column: 1 / -1; background: #e7f3ff; border-color: #b6d4fe;">
        <strong>📊 Walitti Dhufeenya Kee:</strong>
        <span style="margin-left:10px;">🤝 Friends: <strong>${myFriends.length} / ${MAX_FRIENDS_LIMIT}</strong></span>
        <span style="margin-left:10px;">➕ Following: <strong>${myFollowing.length}</strong></span>
      </div>
    `;

    const cardsHtml = others
      .map((u) => {
        const isFriend = myFriends.includes(u.id) || u.friendStatus === "accepted";
        const isFollowing = myFollowing.includes(u.id);
        const followersCount = (u.followers || []).length + (isFollowing ? 1 : 0);

        return `
          <div class="mini-card">
            <strong>${u.full_name}</strong>
            <p class="post-meta">${u.bio || ""}</p>
            <p style="margin:6px 0;font-size:12px;">
              👥 Followers: <strong>${followersCount}</strong> •
              Status: <strong>${isFriend ? "FRIEND" : "SUGGESTED"}</strong>
            </p>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
              <button class="${isFriend ? "btn-secondary" : "btn-primary"}" onclick="toggleFriendWithLimit('${u.id}')">
                ${isFriend ? "✔ Friend" : "+ Add Friend"}
              </button>
              <button class="${isFollowing ? "btn-secondary" : "btn-demo"}" style="margin-top:0;" onclick="toggleFollowUser('${u.id}')">
                ${isFollowing ? "Following" : "+ Follow"}
              </button>
              <button class="btn-secondary" onclick="openChatWith('${u.id}')">💬</button>
            </div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = summaryHtml + cardsHtml;
  };

  // Yeroo appiin jalqabu renderEnhancedFriends hojiirra oolchuu
  const originalInitApp = window.initApp;
  window.initApp = function () {
    if (typeof originalInitApp === "function") {
      originalInitApp();
    }
    renderEnhancedFriends();
  };

  if (state.currentUser) {
    renderEnhancedFriends();
  }
})();
  }
})();
