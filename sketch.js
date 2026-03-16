// --- CONFIGURATION ---

// Map alternate names to a canonical display name.
// Generate this using name-mapper.html, then paste it here.
const NAME_MAP = {
  // Jen!, Jen
  'Jen!': 'Jen',
  'Jen': 'Jen',
  // stef, stefanja
  'stef': 'Stef',
  'stefanja': 'Stef',
  // alice💓💖💘💝💞, alice
  'alice💓💖💘💝💞': 'Alice',
  'alice': 'Alice',
  // elissa, Elissa
  'elissa': 'Elissa',
  'Elissa': 'Elissa',
  // Helena, Helena Bjeletich
  'Helena': 'Helena',
  'Helena Bjeletich': 'Helena',
  // Ramsey, Ramsey Hutton, Ramsey!
  'Ramsey': 'Ramsey',
  'Ramsey Hutton': 'Ramsey',
  'Ramsey!': 'Ramsey',
  // piper guinn, Piper guinn, Piper Guinn
  'piper guinn': 'Piper',
  'Piper guinn': 'Piper',
  'Piper Guinn': 'Piper',
  // Nick da goat, Silly Goose Jr.
  'Nick da goat': 'Nick',
  'Silly Goose Jr.': 'Nick',
  // SARAH DAVISON
  'SARAH DAVISON': 'Sarah',
  // Chris
  'Chris': 'Chris',
  // Charlie Buntz
  'Charlie Buntz': 'Charlie',
  // Susanne Kjeldsen
  'Susanne Kjeldsen': 'Nonni',
  // vasi “the oscar winner” bjeletich
  'vasi “the oscar winner” bjeletich': 'Vasi',
  // sloame
  'sloame': 'Sloane',
  // Sofia
  'Sofia': 'Sofia',
  // Ella Key
  'Ella Key': 'Ella',
  // Saraaaaaass
  'Saraaaaaass': 'Sara',
  // Ananya Venkataramaiah
  'Ananya Venkataramaiah': 'Ananya',
  // Ollo
  'Ollo': 'Ollie',
  // Rebeka
  'Rebeka': 'Rebeka',
};

const YEARS = [

  // 2026 (LIVE)
  {
    year: '2026',
    ceremony: '98th Academy Awards',
    live: true,

    sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT0feB11hiykK1RborxtdPP9A03_wQH0k2TP3YQlC2bqC52xQSm826REkK4uYdvqNIM69acHhtl8cwh/pub?output=csv',

    winners: {
      'Best Picture': 'One Battle After Another',
      'Director': 'Paul Thomas Anderson - One Battle After Another',
      'Actor in a Leading Role': 'Michael B. Jordan - Sinners',
      'Actress in a Leading Role': 'Jessie Buckley - Hamnet',
      'Actor in a Supporting Role': 'Sean Penn - One Battle After Another',
      'Actress in a Supporting Role': 'Amy Madigan - Weapons',
      'Animated Feature Film': 'KPop Demon Hunters',
      'Cinematography': 'Sinners',
      'Costume Design': 'Frankenstein',
      'Casting': 'One Battle After Another',
      'Documentary - Feature Film': 'Mr. Nobody Against Putin',
      'Documentary - Short Film': 'All the Empty Rooms',
      'Film Editing': 'One Battle After Another',
      'International Feature Film': 'Sentimental Value (Norway)',
      'Makeup and Hairstyling': 'Frankenstein',
      'Music (Original Score)': 'Sinners',
      'Music (Original Song)': '"Golden" - KPop Demon Hunters',
      'Production Design': 'Frankenstein',
      'Short Film (Animated)': 'The Girl Who Cried Pearls',
      'Short Film (Live Action)': ['The Singers', 'Two People Exchanging Saliva'],
      'Sound': 'F1',
      'Visual Effects': 'Avatar: Fire and Ash',
      'Writing (Adapted Screenplay)': 'One Battle After Another',
      'Writing (Original Screenplay)': 'Sinners',
    },

    skipColumns: ['Timestamp', 'Your Name'],
    nameColumn: 'Your Name',
    refreshInterval: 30,  // seconds (only applies when sheetUrl is set)
  },

  // 2025
  {
    year: '2025',
    ceremony: '97th Academy Awards',
    live: false,
    sheetUrl: '',

    winners: {
      'Best Picture': 'Anora',
      'Director': 'Brady Corbet - The Brutalist',
      'Actor in a Leading Role': 'Adrien Brody - The Brutalist',
      'Actress in a Leading Role': 'Mikey Madison - Anora',
      'Actor in a Supporting Role': 'Kieran Culkin - A Real Pain',
      'Actress in a Supporting Role': 'Zoe Saldaña - Emilia Pérez',
      'Animated Feature Film': 'Flow',
      'Cinematography': 'The Brutalist',
      'Costume Design': 'Conclave',
      'Documentary - Feature Film': 'No Other Land',
      'Documentary - Short Film': 'The Only Girl in the Orchestra',
      'Film Editing': 'Anora',
      'International Feature Film': "I'm Still Here (Brazil)",
      'Makeup and Hairstyling': 'The Substance',
      'Music (Original Score)': 'The Brutalist',
      'Music (Original Song)': '"Like a Bird" - Sing Sing',
      'Production Design': 'The Brutalist',
      'Short Film (Animated)': 'In the Shadow of the Cypress',
      'Short Film (Live Action)': "I'm Not a Robot",
      'Sound': 'Dune: Part Two',
      'Visual Effects': 'Dune: Part Two',
      'Writing (Adapted Screenplay)': 'Conclave',
      'Writing (Original Screenplay)': 'Anora',
    },

    skipColumns: ['Timestamp', 'Score', 'Your Name'],
    nameColumn: 'Your Name',
    scoreColumn: 'Score',
    refreshInterval: 0,
  },

  // 2024
  {
    year: '2024',
    ceremony: '96th Academy Awards',
    live: false,
    sheetUrl: '',
    winners: {
      'Best Picture': 'Oppenheimer',
      'Directing': 'Christopher Nolan - Oppenheimer',
      'Actor in a Leading Role': 'Cillian Murphy - Oppenheimer',
      'Actress in a Leading Role': 'Emma Stone - Poor Things',
      'Actor in a Supporting Role': 'Robert Downey Jr. - Oppenheimer',
      'Actress in a Supporting Role': 'Da\'vine Joy Randolph - The Holdovers',
      'Animated Feature Film': 'The Boy and the Heron',
      'Cinematography': 'Oppenheimer',
      'Costume Design': 'Poor Things',
      'Documentary Feature Film': '20 Days in Mariupol',
      'Documentary Short Film': 'The Last Repair Shop',
      'Film Editing': 'Oppenheimer',
      'International Feature Film': "The Zone of Interest",
      'Makeup and Hairstyling': 'Poor Things',
      'Music (Original Score)': 'Oppenheimer',
      'Music (Original Song)': 'What Was I Made For? - Barbie',
      'Production Design': 'Poor Things',
      'Short Film (Animated)': 'War Is Over! Inspired by the Music of John & Yoko',
      'Short Film (Live Action)': "The Wonderful Story of Henry Sugar",
      'Sound': 'The Zone of Interest',
      'Visual Effects': 'Godzilla Minus One',
      'Writing (Adapted Screenplay)': 'American Fiction',
      'Writing (Original Screenplay)': 'Anatomy of a Fall',
    },
    skipColumns: ['Timestamp', 'Score', 'Your Name'],
    nameColumn: 'Your Name',
    refreshInterval: 0,
  },

  // 2023
  {
    year: '2023',
    ceremony: '95th Academy Awards',
    live: false,
    sheetUrl: '',
    winners: {
      'Best Picture': 'Everything Everywhere All At Once',
      'Directing': 'Daniel Kwan and Daniel Scheinert - Everything Everywhere All at Once',
      'Actor in a Leading Role': 'Brendan Fraser - The Whale',
      'Actress in a Leading Role': 'Michelle Yeoh - Everything Everywhere All at Once',
      'Actor in a Supporting Role': 'Ke Huy Quan - Everything Everywhere All at Once',
      'Actress in a Supporting Role': 'Jamie Lee Curtis - Everything Everywhere All at Once',
      'Animated Feature Film': 'Guillermo Del Toro\'s Pinocchio',
      'Cinematography': 'All Quiet on the Western Front',
      'Costume Design': 'Black Panther: Wakanda Forever',
      'Documentary Feature Film': 'Navalny',
      'Documentary Short Film': 'The Elephant Whisperers',
      'Film Editing': 'Everything Everywhere All at Once',
      'International Feature Film': "All Quiet on the Western Front",
      'Makeup and Hairstyling': 'The Whale',
      'Music (Original Score)': 'Everything Everywhere All at Once',
      'Music (Original Song)': 'Naatu Naatu - RRR',
      'Production Design': 'All Quiet on the Western Front',
      'Short Film (Animated)': 'The Boy, The Mole, The Fox and the Horse',
      'Short Film (Live Action)': "An Irish Goodbye",
      'Sound': 'Top Gun: Maverick',
      'Visual Effects': 'Avatar: The Way of Water',
      'Writing (Adapted Screenplay)': 'Women Talking',
      'Writing (Original Screenplay)': 'Everything Everywhere All at Once',
    },
    skipColumns: ['Timestamp', 'Scores', 'Your Name'],
    nameColumn: 'Your Name',
    refreshInterval: 0,
  },
];


// --- APP LOGIC ---

let activeYear = YEARS[0].year;
let refreshTimer = null;

// Cross-year stats: { year -> [{ name, score, total, pct }] }
const allYearsScored = {};
let allStatsReady = false;

// ── Helpers ──

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function getConfig(year) {
  return YEARS.find(y => y.year === year);
}

// Resolve name to canonical form using NAME_MAP, fallback to raw name
function canonicalName(name) {
  return NAME_MAP[name] || name;
}

// Check if a pick matches a winner (winner can be string or array for ties)
function isWinnerMatch(pick, winner) {
  if (!pick || !winner) return false;
  if (Array.isArray(winner)) {
    return winner.some(w => pick.toLowerCase() === w.toLowerCase());
  }
  return pick.toLowerCase() === winner.toLowerCase();
}


// ── Tab rendering ──

function buildTabs() {
  const wrap = document.getElementById('year-tabs');
  wrap.innerHTML = YEARS.map(y => {
    const dot = y.live ? '<span class="live-dot"></span>' : '';
    const cls = y.year === activeYear ? ' active' : '';
    return `<button class="year-tab${cls}" data-year="${y.year}">${y.year}${dot}</button>`;
  }).join('');

  wrap.querySelectorAll('.year-tab').forEach(btn =>
    btn.addEventListener('click', () => switchYear(btn.dataset.year))
  );
}

function switchYear(year) {
  activeYear = year;
  if (refreshTimer) { clearTimeout(refreshTimer); refreshTimer = null; }
  buildTabs();
  loadYear(getConfig(year));
}


// ── Load all years for cross-year stats ──

function loadAllYears() {
  const scored = YEARS.filter(y => Object.keys(y.winners || {}).length > 0 && !y.live);
  let loaded = 0;

  if (scored.length === 0) { allStatsReady = true; return; }

  scored.forEach(cfg => {
    const source = cfg.sheetUrl || `data/${cfg.year}.csv`;
    Papa.parse(source, {
      download: true, header: true, skipEmptyLines: true,
      complete: (results) => {
        if (results.data && results.data.length > 0) {
          allYearsScored[cfg.year] = scoreRows(results.data, cfg);
        }
        loaded++;
        if (loaded === scored.length) {
          allStatsReady = true;
          // Re-render current view to include stats
          loadYear(getConfig(activeYear));
        }
      },
      error: () => { loaded++; if (loaded === scored.length) { allStatsReady = true; } }
    });
  });
}

function scoreRows(rows, cfg) {
  const headers = Object.keys(rows[0]);
  const skipLower = cfg.skipColumns.map(s => s.toLowerCase());
  const categories = headers.filter(h => !skipLower.includes(h.toLowerCase()));
  const winners = cfg.winners || {};

  return rows.map(row => {
    const rawName = (row[cfg.nameColumn] || 'Anonymous').trim();
    const name = canonicalName(rawName);
    let score = 0, total = 0;

    for (const cat of categories) {
      const w = winners[cat];
      if (w !== undefined) {
        total++;
        const pick = (row[cat] || '').trim();
        if (pick && w && isWinnerMatch(pick, w)) score++;
      }
    }

    return { name, score, total, pct: total > 0 ? score / total : 0 };
  });
}

function computeAllTimeStats() {
  const stats = [];
  const yearKeys = Object.keys(allYearsScored).sort();
  if (yearKeys.length === 0) return stats;

  // Flatten all entries: { name, score, total, pct, year }
  const all = [];
  for (const year of yearKeys) {
    for (const p of allYearsScored[year]) {
      all.push({ ...p, year });
    }
  }

  // 1. All-Time Best single score
  const best = all.reduce((a, b) => b.pct > a.pct ? b : a, all[0]);
  stats.push({
    emoji: '🎯',
    value: `${best.score} / ${best.total}`,
    label: 'All-Time Best',
    detail: `${best.name} · ${best.year}`,
  });

  // 2. All-Time Worst single score
  const worst = all.reduce((a, b) => b.pct < a.pct ? b : a, all[0]);
  stats.push({
    emoji: '😬',
    value: `${worst.score} / ${worst.total}`,
    label: 'All-Time Worst',
    detail: `${worst.name} · ${worst.year}`,
  });

  // 3. Dynasty — best average % across 2+ years
  const byPerson = {};
  for (const entry of all) {
    const key = canonicalName(entry.name);
    if (!byPerson[key]) byPerson[key] = { displayName: key, entries: [] };
    byPerson[key].entries.push(entry);
  }

  const multiYear = Object.values(byPerson).filter(p => p.entries.length >= 2);
  if (multiYear.length > 0) {
    const dynasty = multiYear.reduce((best, p) => {
      const avg = p.entries.reduce((s, e) => s + e.pct, 0) / p.entries.length;
      p.avg = avg;
      return avg > (best.avg || 0) ? p : best;
    }, { avg: 0 });

    stats.push({
      emoji: '👑',
      value: `${Math.round(dynasty.avg * 100)}%`,
      label: 'Dynasty',
      detail: `${dynasty.displayName} · ${dynasty.entries.length}-year avg`,
    });
  }

  // 4. Biggest Glow-Up — largest year-over-year % improvement
  let bestGlowUp = null;
  for (const person of Object.values(byPerson)) {
    if (person.entries.length < 2) continue;
    const sorted = [...person.entries].sort((a, b) => a.year.localeCompare(b.year));
    for (let i = 1; i < sorted.length; i++) {
      const improvement = sorted[i].pct - sorted[i - 1].pct;
      if (!bestGlowUp || improvement > bestGlowUp.improvement) {
        bestGlowUp = {
          improvement,
          name: person.displayName,
          fromYear: sorted[i - 1].year,
          toYear: sorted[i].year,
          fromScore: sorted[i - 1],
          toScore: sorted[i],
        };
      }
    }
  }
  if (bestGlowUp && bestGlowUp.improvement > 0) {
    stats.push({
      emoji: '📈',
      value: `+${Math.round(bestGlowUp.improvement * 100)}%`,
      label: 'Biggest Glow-Up',
      detail: `${bestGlowUp.name} · ${bestGlowUp.fromYear}→${bestGlowUp.toYear}`,
    });
  }

  // 5. Total predictions made across all years
  const totalPredictions = all.length;
  const totalYears = yearKeys.length;
  stats.push({
    emoji: '🗳️',
    value: totalPredictions.toString(),
    label: 'Total Ballots',
    detail: `across ${totalYears} year${totalYears !== 1 ? 's' : ''}`,
  });

  return stats;
}

function renderStats() {
  if (!allStatsReady) return '';
  const stats = computeAllTimeStats();
  if (stats.length === 0) return '';

  let html = '<div class="section-title" style="margin-top:0.5rem">All-Time Stats <span class="line"></span></div>';
  html += '<div class="stats-grid">';

  stats.forEach((s, i) => {
    html += `
      <div class="stat-card" style="animation-delay:${i * 0.07}s">
        <div class="stat-emoji">${s.emoji}</div>
        <div class="stat-value">${esc(s.value)}</div>
        <div class="stat-label">${esc(s.label)}</div>
        <div class="stat-detail">${esc(s.detail)}</div>
      </div>`;
  });

  html += '</div>';
  return html;
}


// ── Data loading ──

function loadYear(cfg) {
  document.getElementById('ceremony-label').textContent = cfg.ceremony;

  document.getElementById('live-badge-wrap').innerHTML = cfg.live
    ? '<div class="live-banner"><span class="live-dot"></span> Live — refreshes every 30s</div>'
    : '';

  document.getElementById('config-banner').style.display =
    (cfg.live && !cfg.sheetUrl) ? 'block' : 'none';

  const content = document.getElementById('content');
  content.innerHTML = '<div class="status-msg"><div class="spinner"></div><br>Loading predictions…</div>';

  const csvPath = `data/${cfg.year}.csv`;
  const source = cfg.sheetUrl || csvPath;

  Papa.parse(source, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      if (results.data && results.data.length > 0) {
        render(results.data, cfg);
      } else {
        showEmpty(cfg);
      }
    },
    error: () => showEmpty(cfg),
  });
}

function showEmpty(cfg) {
  document.getElementById('content').innerHTML = `
    <div class="empty-state">
      <div class="icon">📋</div>
      <p>No prediction data for ${cfg.year} yet.<br>
      Drop a <code>${cfg.year}.csv</code> file in the <code>data/</code> folder.</p>
    </div>`;
  document.getElementById('refresh-info').textContent = '';
}


// ── Rendering ──

function render(rows, cfg) {
  if (!rows || !rows.length) {
    showEmpty(cfg);
    return;
  }

  const headers = Object.keys(rows[0]);
  const skipLower = cfg.skipColumns.map(s => s.toLowerCase());
  const categories = headers.filter(h => !skipLower.includes(h.toLowerCase()));
  const hasWinners = Object.keys(cfg.winners || {}).length > 0;

  // ── Score each person ──
  const people = rows.map(row => {
    const name = (row[cfg.nameColumn] || 'Anonymous').trim();
    let score = null;
    let total = categories.length;

    if (cfg.scoreColumn && row[cfg.scoreColumn]) {
      const m = row[cfg.scoreColumn].match(/(\d+)\s*\/\s*(\d+)/);
      if (m) { score = +m[1]; total = +m[2]; }
    }

    if (hasWinners) {
      score = 0;
      total = 0;
      for (const cat of categories) {
        const w = cfg.winners[cat];
        if (w !== undefined) {
          total++;
          const pick = (row[cat] || '').trim();
          if (pick && w && isWinnerMatch(pick, w)) score++;
        }
      }
    }

    return { name, score, total, row };
  });

  const hasScores = people.some(p => p.score !== null);
  if (hasScores) people.sort((a, b) => (b.score || 0) - (a.score || 0));
  const maxScore = Math.max(...people.map(p => p.total || 1), 1);

  // ── Leaderboard HTML ──
  let html = '<div class="section-title">Leaderboard <span class="line"></span></div>';
  html += '<div class="leaderboard">';

  people.forEach((p, i) => {
    const delay = i * 0.05;
    if (hasScores) {
      const pct = (p.score / maxScore) * 100;
      html += `
        <div class="lb-row" style="animation-delay:${delay}s">
          <div class="lb-rank">${i + 1}</div>
          <div class="lb-name">${esc(p.name)}</div>
          <div class="lb-score-wrap">
            <div class="lb-bar-track"><div class="lb-bar-fill" style="width:${pct}%"></div></div>
            <div class="lb-score">${p.score} / ${p.total}</div>
          </div>
        </div>`;
    } else {
      html += `
        <div class="lb-row no-score" style="animation-delay:${delay}s">
          <div class="lb-rank">${i + 1}</div>
          <div class="lb-name">${esc(p.name)}</div>
        </div>`;
    }
  });

  html += '</div>';
  if (!hasScores) {
    html += '<div class="waiting-note">Scores appear once winners are filled in</div>';
  }

  // ── All-Time Stats (between leaderboard and categories) ──
  html += renderStats();

  // ── Category cards HTML ──
  html += '<div class="section-title" style="margin-top:0.5rem">Categories <span class="line"></span></div>';
  html += '<div class="categories">';

  categories.forEach((cat, ci) => {
    const counts = {};
    rows.forEach(r => {
      const pick = (r[cat] || '').trim();
      if (pick) counts[pick] = (counts[pick] || 0) + 1;
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const maxCount = sorted.length ? sorted[0][1] : 1;
    const winner = (cfg.winners || {})[cat];

    // If nobody picked the actual winner, add it with 0 votes
    if (winner) {
      const winnerList = Array.isArray(winner) ? winner : [winner];
      for (const w of winnerList) {
        if (!sorted.some(([ch]) => ch.toLowerCase() === w.toLowerCase())) {
          sorted.push([w, 0]);
        }
      }
    }

    html += `<div class="cat-card" style="animation-delay:${ci * 0.025}s">`;
    html += `<div class="cat-name">${esc(cat)}</div>`;

    for (const [choice, count] of sorted) {
      const pct = (count / maxCount) * 100;
      const isW = winner && isWinnerMatch(choice, winner);
      const barCls = isW ? 'cat-bar-fill winner' : 'cat-bar-fill';
      const nameCls = isW ? 'cat-choice-name winner' : 'cat-choice-name';
      const tag = isW ? '<span class="winner-tag">✓ WON</span>' : '';

      html += `
        <div class="cat-choice">
          <div class="cat-bar-track"><div class="${barCls}" style="width:${pct}%"></div></div>
          <div class="${nameCls}" title="${esc(choice)}">${esc(choice)}${tag}</div>
          <div class="cat-count">${count}</div>
        </div>`;
    }

    html += '</div>';
  });

  html += '</div>';

  document.getElementById('content').innerHTML = html;

  const now = new Date().toLocaleTimeString();
  document.getElementById('refresh-info').textContent =
    `${rows.length} prediction${rows.length !== 1 ? 's' : ''} loaded · last refreshed ${now}`;

  // ── Schedule auto-refresh for live year ──
  if (cfg.live && cfg.sheetUrl && cfg.refreshInterval > 0) {
    if (refreshTimer) clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => {
      if (activeYear === cfg.year) loadYear(cfg);
    }, cfg.refreshInterval * 1000);
  }
}


// ── Init ──

buildTabs();
loadYear(getConfig(activeYear));
loadAllYears();