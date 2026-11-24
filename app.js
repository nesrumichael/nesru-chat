/**
 * Nesru m Social Platform — Full Frontend + Settings + Policies + Map + Realtime
 * Owner: Nesru m
 * Email: nesrumichael@gmail.com
 * Phone: +251923502787
 * Official Website: https://nesrumichael.github.io/nesru-chat/
 */

const SUPABASE_URL = "https://lcyouqcwcwmvbkxgengj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeW91cWN3Y3dtdmJreGdlbmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0NzI1NDQsImV4cCI6MjExMTA0ODU0NH0.eJHcCs2NPgItUnYBxRPBMFXquDQMBFHLUDkPkPzskA4";
const OFFICIAL_SITE_URL = "https://nesrumichael.github.io/nesru-chat/";

let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    supabaseClient = null;
  }
}

const FOUNDER_USER = {
  id: "user-nesru-001",
  username: "nesrumichael",
  full_name: "Nesru m",
  email: "nesrumichael@gmail.com",
  phone: "+251923502787",
  website: OFFICIAL_SITE_URL,
  role: "Founder & Owner",
  avatar_url: "https://ui-avatars.com/api/?name=Nesru+m&background=1877f2&color=fff&size=200",
  bio: "Nesru m — Official Social Platform & Map Hub. Contact: nesrumichael@gmail.com | +251923502787 | https://nesrumichael.github.io/nesru-chat/"
};

const DEFAULT_STATE = {
  currentUser: null,
  currentFilter: "all",
  activeChatUserId: "user-bontu-002",
  officialUrl: OFFICIAL_SITE_URL,
  settings: {
    defaultPrivacy: "public"
  },
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
    }
  ],
  stories: [
    { id: "st-1", author: "Nesru m", text: "Baga gara Nesru m nagaan dhuftan! 🚀", bg: "linear-gradient(135deg,#1877f2,#0d47a1)" },
    { id: "st-2", author: "Bontu Tadesse", text: "Coding new features today 💻✨", bg: "linear-gradient(135deg,#10b981,#047857)" }
  ],
  posts: [
    {
      id: "post-101",
      author_id: "user-nesru-001",
      author_name: "Nesru m",
      author_avatar: FOUNDER_USER.avatar_url,
      verified: true,
      content: "Baga gara Nesru m nagaan dhuftan! 🎉\nWebsite: https://nesrumichael.github.io/nesru-chat/\nEmail: nesrumichael@gmail.com | Phone: +251923502787",
      media_url: "",
      media_type: "",
      privacy: "public",
      created_at: "Amma (Just now)",
      likes: ["user-bontu-002"],
      shares: 2,
      savedBy: [],
      comments: [
        { id: "c-1", author: "Bontu Tadesse", text: "Baga gammaddan Nesru m!" }
      ]
    }
  ],
  groups: [
    { id: "grp-1", name: "Nesru m Official Community", members: 1420, desc: "Garee hawaasaa fi teeknooloojii Nesru m.", joined: true }
  ],
  marketItems: [
    { id: "mkt-1", title: "Laptop HP EliteBook Core i7", price: "48,000 ETB", location: "Finfinnee", seller: "Nesru m" }
  ],
  messages: {
    "user-bontu-002": [
      { from: "user-bontu-002", text: "Akkam Nesru m! Platformiin haaraan kun gaariidha.", time: "10:15" },
      { from: "user-nesru-001", text: "Galatoomi Bontu! Live feed, chat fi map hundi qophaa'eera.", time: "10:17" }
    ]
  },
  notifications: [
    { id: "n-1", text: "Baga gara Nesru m (https://nesrumichael.github.io/nesru-chat/) dhuftan!", read: false }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem("nesru_m_dl_state_v3");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  try {
    localStorage.setItem("nesru_m_dl_state_v3", JSON.stringify(state));
  } catch (e) {}
}

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
  if (email === "nesrumichael@gmail.com" || email === "nesrumichael" || email === "nesru m") {
    state.currentUser = FOUNDER_USER;
  } else {
    const found = state.users.find(u => u.email.toLowerCase() === email || u.username.toLowerCase() === email);
    state.currentUser = found || {
      id: "user-" + Date.now(),
      username: email.split("@")[0] || "member",
      full_name: email.split("@")[0] || "Member",
      email,
      avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(email)}&background=1877f2&color=fff`,
      bio: "Member of Nesru m"
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
    bio: "New member at Nesru m",
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

function initApp() {
  if (!state.currentUser) return;
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");

  const u = state.currentUser;
  document.getElementById("nav-avatar").src = u.avatar_url;
  document.getElementById("nav-username").textContent = u.full_name;
  document.getElementById("drop-fullname").textContent = u.full_name;
  document.getElementById("drop-email").textContent = u.email;
  document.getElementById("side-avatar").src = u.avatar_url;
  document.getElementById("side-fullname").textContent = u.full_name;
  document.getElementById("composer-avatar").src = u.avatar_url;
  document.getElementById("post-content").placeholder = `Maal yaadaa jirta, ${u.full_name}?`;

  if (state.settings && state.settings.defaultPrivacy) {
    const privSelect = document.getElementById("post-privacy");
    if (privSelect) privSelect.value = state.settings.defaultPrivacy;
  }

  const isFounder = (u.email || "").toLowerCase() === "nesrumichael@gmail.com";
  document.getElementById("founder-badge").textContent = isFounder ? "✔ Founder & Owner (Nesru m)" : "✔ Verified Member";

  renderStories();
  renderPosts();
  renderOnlineContacts();
  renderNotifications();
  renderFriends();
  renderGroups();
  renderMarketplace();
}

function navigateTo(view) {
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
  document.getElementById("set-fullname").value = state.currentUser.full_name || "";
  document.getElementById("set-bio").value = state.currentUser.bio || "";
  document.getElementById("set-default-privacy").value = (state.settings && state.settings.defaultPrivacy) || "public";
  const msg = document.getElementById("settings-save-msg");
  if (msg) msg.textContent = "";
}

function saveAccountSettings() {
  if (!state.currentUser) return;
  const newName = document.getElementById("set-fullname").value.trim();
  const newBio = document.getElementById("set-bio").value.trim();
  const defPriv = document.getElementById("set-default-privacy").value;

  if (newName) state.currentUser.full_name = newName;
  state.currentUser.bio = newBio;
  state.settings = state.settings || {};
  state.settings.defaultPrivacy = defPriv;

  const privSelect = document.getElementById("post-privacy");
  if (privSelect) privSelect.value = defPriv;

  saveState();
  initApp();
  const msg = document.getElementById("settings-save-msg");
  if (msg) msg.textContent = "✔ Ol-kaa'ameera!";
}

function updateEmbeddedMap() {
  const input = document.getElementById("map-query-input");
  const q = (input && input.value.trim()) || "Ethiopia";
  const frame = document.getElementById("google-map-frame");
  const extLink = document.getElementById("external-gmaps-link");
  const statusEl = document.getElementById("map-status-line");

  const encoded = encodeURIComponent(q);
  if (frame) frame.src = `https://maps.google.com/maps?q=${encoded}&t=&z=12&ie=UTF8&iwloc=&output=embed`;
  if (extLink) extLink.href = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  if (statusEl) statusEl.textContent = `Bakka mul'ataa jiru: ${q} • Nesru m (nesrumichael@gmail.com | +251923502787)`;
}

function locateMeOnMap() {
  const statusEl = document.getElementById("map-status-line");
  if (!navigator.geolocation) {
    if (statusEl) statusEl.textContent = "Browser keessan GPS/Location hin deeggaru.";
    return;
  }
  if (statusEl) statusEl.textContent = "Bakka jirtan (GPS) barbaadaa jira...";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      const coordQuery = `${lat},${lon}`;
      const frame = document.getElementById("google-map-frame");
      const extLink = document.getElementById("external-gmaps-link");
      if (frame) frame.src = `https://maps.google.com/maps?q=${encodeURIComponent(coordQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
      if (extLink) extLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordQuery)}`;
      if (statusEl) statusEl.textContent = `📍 Bakka Amma Jirtan: Lat ${lat}, Lon ${lon} • Nesru m`;
    },
    () => {
      if (statusEl) statusEl.textContent = "Hayyama Location (GPS) kennuu dhiiftaniittu ykn hin danda'amne.";
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
      <div class="story-name">Story Ol-baasi</div>
    </div>
  `;
  const items = (state.stories || []).map(s => `
    <div class="story-card" style="background:${s.bg}" onclick="openStory('${s.id}')">
      <div class="story-avatar-ring">${(s.author || "N")[0]}</div>
      <div class="story-name">${s.author}</div>
    </div>
  `).join("");
  bar.innerHTML = addCard + items;
}

function addStoryPrompt() {
  if (!state.currentUser) return;
  const text = prompt("Story haaraa maal maxxansuu barbaadda?");
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
    verified: (u.email || "").toLowerCase() === "nesrumichael@gmail.com",
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

  if (supabaseClient) {
    supabaseClient.from("posts").insert([{
      content: newPost.content,
      media_url: newPost.media_url,
      media_type: newPost.media_type,
      privacy: newPost.privacy
    }]).then(() => {}).catch(() => {});
  }

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

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card"><p class="muted">Maxxansi argame hin jiru.</p></div>`;
    return;
  }

  container.innerHTML = filtered.map(post => renderPostCardHTML(post)).join("");
}

function renderPostCardHTML(post) {
  const uid = state.currentUser.id;
  const isLiked = (post.likes || []).includes(uid);
  const isSaved = (post.savedBy || []).includes(uid);
  const isAuthor = post.author_id === uid;
  const privacyIcon = post.privacy === "public" ? "🌍" : post.privacy === "friends" ? "👥" : "🔒";

  let mediaHTML = "";
  if (post.media_url) {
    if (post.media_type === "video") {
      mediaHTML = `<video class="post-media" controls src="${post.media_url}"></video>`;
    } else {
      mediaHTML = `<img class="post-media" src="${post.media_url}" alt="Post media" onerror="this.style.display='none'" />`;
    }
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
            <strong>${post.author_name} ${post.verified ? '<span class="verified-badge">✔</span>' : ''}</strong>
            <div class="post-meta">${post.created_at} • ${privacyIcon}</div>
          </div>
        </div>
        ${isAuthor ? `<button type="button" class="link-btn" onclick="deletePost('${post.id}')" title="Haqi">🗑️</button>` : ""}
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
  alert("Maxxansi kun qoodameera!");
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
  const target = state.posts.find(p => p.id === postId);
  if (!target || target.author_id !== state.currentUser.id) {
    alert("Abbaan maxxansa kana barreesse qofatu haquu danda'a.");
    return;
  }
  state.posts = state.posts.filter(p => p.id !== postId);
  saveState();
  renderPosts();
}

function renderProfileView() {
  const u = state.currentUser;
  document.getElementById("prof-avatar").src = u.avatar_url;
  document.getElementById("prof-fullname").textContent = u.full_name;
  document.getElementById("prof-bio").textContent = u.bio || "";
  document.getElementById("prof-contact-line").textContent = `📧 ${u.email} | 📱 ${u.phone || '+251923502787'}`;
  const myPosts = state.posts.filter(p => p.author_id === u.id);
  document.getElementById("profile-posts-stream").innerHTML = myPosts.map(p => renderPostCardHTML(p)).join("");
}

function renderFriends() {
  const container = document.getElementById("friends-list-container");
  if (!container || !state.currentUser) return;
  const others = state.users.filter(u => u.id !== state.currentUser.id);
  container.innerHTML = others.map(u => `
    <div class="mini-card">
      <strong>${u.full_name}</strong>
      <p class="post-meta">${u.bio || ''}</p>
      <div style="margin-top:8px;display:flex;gap:6px;">
        <button type="button" class="btn-primary" onclick="acceptFriend('${u.id}')">🤝 Connect</button>
        <button type="button" class="btn-secondary" onclick="openChatWith('${u.id}')">💬 Chat</button>
      </div>
    </div>
  `).join("");
}

function acceptFriend(userId) {
  const u = state.users.find(x => x.id === userId);
  if (u) u.friendStatus = "accepted";
  saveState();
  renderFriends();
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
  const name = prompt("Maqaa Garee Haaraa:");
  if (!name) return;
  const desc = prompt("Ibsa garee:") || "Garee haaraa.";
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
      <button type="button" class="btn-primary" style="margin-top:8px;" onclick="openLegalModal('support')">Quunnami</button>
    </div>
  `).join("");
}

function addMarketItemPrompt() {
  const title = prompt("Maqaa meeshaa:");
  if (!title) return;
  const price = prompt("Gatii:") || "Bilbilaan gaafadhu";
  const location = prompt("Bakka:") || "Ethiopia";
  state.marketItems.unshift({ id: "mkt-" + Date.now(), title, price, location, seller: state.currentUser.full_name });
  saveState();
  renderMarketplace();
}

function renderOnlineContacts() {
  const list = document.getElementById("online-contacts-list");
  if (!list || !state.currentUser) return;
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
  if (!popup.classList.contains("hidden")) renderMessenger();
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

function sendDirectMessage(e) {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;
  const pid = state.activeChatUserId;
  if (!state.messages[pid]) state.messages[pid] = [];
  const now = new Date();
  const time = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
  state.messages[pid].push({ from: state.currentUser.id, text, time });
  saveState();
  if (supabaseClient) {
    supabaseClient.from("messages").insert([{ content: text }]).then(() => {}).catch(() => {});
  }
  input.value = "";
  renderMessenger();
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
    title: "ℹ️ About — Waa'ee Nesru m",
    html: `
      <p><strong>Nesru m</strong> weebsaayitii fi appii wal-quunnamtii hawaasaa, kaartaa (Google Map), garee, fi ergaa battalaa kan namoota walitti fiduuf qophaa'edha.</p>
      <p><strong>Owner / Founder:</strong> Nesru m</p>
      <p><strong>Official Website:</strong> <a href="${OFFICIAL_SITE_URL}" target="_blank" rel="noopener">${OFFICIAL_SITE_URL}</a></p>
      <p><strong>Email:</strong> nesrumichael@gmail.com | <strong>Phone:</strong> +251923502787</p>
    `
  },
  privacy: {
    title: "🔒 Privacy Policy — Imaammata Iccitii",
    html: `
      <p>Platformiin <strong>Nesru m</strong> iccitii fi nageenya odeeffannoo fayyadamtootaaf dursa kenna:</p>
      <ul>
        <li>Odeeffannoon dhuunfaa fayyadamaa kamiyyuu qaama sadaffaatti hin gurguramu.</li>
        <li>Fayyadamaan kamuu qindaa'ina <em>Privacy</em> (<em>Public</em>, <em>Friends</em>, ykn <em>Only Me</em>) ofii isaa to'achuu danda'a.</li>
        <li>Hayyamni Location (GPS) yoo fayyadamaan gaafate qofa hojjeta.</li>
      </ul>
    `
  },
  terms: {
    title: "📜 Terms of Service — Waliigaltee Tajaajilaa",
    html: `
      <p>Tajaajila <strong>Nesru m</strong> yeroo fayyadamtan waliigalteewwan armaan gadii kabajuu qabdu:</p>
      <ul>
        <li>Seerota hawaasummaa, kabaja nama biroo, fi nageenya weebsaayitii eeguu.</li>
        <li>Gochaalee miidhaa geessisan, spam, ykn akeeka seeraan alaa irraa of qusachuu.</li>
        <li>Maxxansa mataa keetii irratti itti gaafatamummaa qabaachuu.</li>
      </ul>
    `
  },
  transparency: {
    title: "🔍 Transparency — Iftoomina Hojmaataa",
    html: `
      <p><strong>Nesru m</strong> iftoomina guutuun hojjeta:</p>
      <ul>
        <li><strong>Abbummaa &amp; Bulchiinsa:</strong> Nesru m (nesrumichael@gmail.com | +251923502787).</li>
        <li><strong>Sirna Daataa:</strong> Local persistence fi Supabase cloud integration (Row Level Security waliin).</li>
        <li><strong>To'annoo Maxxansaa:</strong> Maxxansa kan barreesse qofatu haquu ykn bulchuu danda'a.</li>
      </ul>
    `
  },
  support: {
    title: "📞 Contact Support — Deeggarsa Quunnamaa",
    html: `
      <p>Deeggarsa teeknikaa, yaada, ykn gaaffii kamiyyuuaf kallattiin <strong>Nesru m</strong> quunnamaa:</p>
      <ul>
        <li><strong>Support Contact:</strong> Nesru m</li>
        <li><strong>Email:</strong> <a href="mailto:nesrumichael@gmail.com">nesrumichael@gmail.com</a></li>
        <li><strong>Phone / Call / SMS:</strong> <a href="tel:+251923502787">+251923502787</a></li>
        <li><strong>Official Website:</strong> <a href="${OFFICIAL_SITE_URL}" target="_blank" rel="noopener">${OFFICIAL_SITE_URL}</a></li>
      </ul>
    `
  },
  copyright: {
    title: "©️ Copyright Notice — Mirga Abbummaa Kalaqaa",
    html: `
      <p><strong>© 2026 Nesru m. All rights reserved.</strong></p>
      <p>Caaseffamni, dizaayiniin, koodiin, fi qabiyyeen platformii <strong>Nesru m</strong> kan <strong>Nesru m</strong> qofaati; hayyama abbaa weebsaayitii malee garagalchuun ykn daldalaaf itti fayyadamuun hin danda'amu.</p>
      <p>Quunnamtiif: <strong>nesrumichael@gmail.com</strong> | <strong>+251923502787</strong></p>
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

if (state.currentUser) {
  initApp();
}
