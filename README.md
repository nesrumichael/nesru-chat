# Nesru Michael Social Platform (Full-Stack Web & PWA)

- **Founder & Owner:** Nesru Michael
- **Email:** nesrumichael@gmail.com
- **Phone:** +251923502787

## Caasaa Pirojektii (Project Structure)
- `index.html` — Caasaa fuula guutuu (Navbar, Left Sidebar, Stories, Create Post, Main Feed, Right Sidebar, Messenger, Legal Modals).
- `styles.css` — Dizaayinii ammayyaa fi responsive (Desktop & Mobile).
- `app.js` — Logic guutuu (Auth, Posts, Likes, Comments, Shares, Friends, Groups, Reels, Marketplace, Real-time Messenger, Legal Pages).
- `manifest.json` & `sw.js` — Progressive Web App (PWA) bilbila irratti akka appii idileetti install gochuuf.
- `supabase/schema.sql` — SQL Database Schema guutuu (Profiles, Friendships, Posts, Reactions, Comments, Shares, Groups, Messages, Notifications, Row Level Security).
- `netlify.toml` & `vercel.json` — Qophii hosting.

## Karaalee Host Ittiin Godhamu (Hosting Guide)

### 1. GitHub Pages (Bilisa & Salphaa)
1. GitHub irratti repository haaraa (`nesru-michael-social`) uumi.
2. Faayiloota folder kana keessa jiran hunda upload godhi.
3. **Settings -> Pages -> Branch: `main` / `(root)` -> Save** cuqaasi.

### 2. Netlify (Drag & Drop ykn GitHub)
1. Gara [app.netlify.com](https://app.netlify.com) seeni.
2. Folder `Nesru-Michael-Social-App` jedhu kallattiin **Deploy manually (Drag & Drop)** irra kaa'i.
3. Sekondii 10 keessatti live siif ta'a.

### 3. Vercel / Cloudflare Pages
1. Repository GitHub kee Vercel ykn Cloudflare Pages waliin wal-qabsiisi (`Deploy`).
2. Custom domain yoo qabaatte DNS irraa itti hidhi.

### 4. Database Live (Supabase) Hidhuuf
1. [supabase.com](https://supabase.com) irratti pirojektii haaraa uumi.
2. **SQL Editor** keessatti koodii `supabase/schema.sql` keessa jiru paste gootee **Run** cuqaasi.
3. **Project Settings -> API** irraa `Project URL` fi `anon public key` fudhadhuutii `app.js` sarara 11-12 irratti galchi.

### 5. Android APK Uumuuf (PWABuilder)
1. Erga Netlify ykn GitHub Pages irratti host gootee booda URL kee fudhadhu.
2. Gara [pwabuilder.com](https://www.pwabuilder.com) seenii URL kee galchuun faayila `.apk` buufadhu.
