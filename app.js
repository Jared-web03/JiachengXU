'use strict';

const readPreference = (key, fallback) => {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
};
const savePreference = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* Storage is optional. */ }
};
const queryLanguage = new URLSearchParams(location.search).get('lang');
let language = ['zh', 'en'].includes(queryLanguage)
  ? queryLanguage
  : readPreference('jx-language', 'zh');
if (!['zh', 'en'].includes(language)) language = 'zh';
if (readPreference('jx-theme', 'light') === 'dark') document.body.classList.add('dark');

const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));
const localized = values => values[language === 'en' ? 1 : 0];
const label = (zh, en) => language === 'en' ? en : zh;

function renderPaper(paper, openIds) {
  const authors = escapeHTML(paper.authors).replace('Jiacheng Xu', '<strong class="author-self">Jiacheng Xu</strong>');
  const figureAlt = `${paper.title} — ${label('方法与研究概览图', 'method and research overview')}`;
  return `<details class="paper ${paper.image ? 'with-image' : 'no-image'} ${paper.accepted ? 'accepted' : 'submitted'}" id="paper-${paper.id}" ${openIds.has(`paper-${paper.id}`) ? 'open' : ''}>
    <summary>
      ${paper.image ? `<img class="paper-thumb" src="${paper.image}" alt="" width="134" height="96">` : ''}
      <span class="paper-summary-text">
        <span class="paper-meta"><span class="venue">${escapeHTML(paper.venue)}</span><span class="paper-status">${escapeHTML(localized(paper.status))}</span></span>
        <span class="paper-title">${escapeHTML(paper.title)}</span>
        <span class="paper-authors">${authors}</span>
        <span class="paper-hint"><span class="hint-closed">${label('展开研究详情', 'Expand research details')}</span><span class="hint-open">${label('收起详情', 'Collapse details')}</span></span>
      </span>
    </summary>
    <div class="paper-detail">
      <h4>${label('研究内容', 'Research overview')}</h4>
      <p>${escapeHTML(localized(paper.abstract))}</p>
      ${paper.points.length ? `<ul>${paper.points.map(point => `<li>${escapeHTML(localized(point))}</li>`).join('')}</ul>` : ''}
      ${paper.links.length ? `<div class="paper-links">${paper.links.map(([text, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHTML(text)} ↗</a>`).join('')}</div>` : ''}
      ${paper.image ? `<figure class="paper-figure"><a href="${paper.image}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(label('打开原图：', 'Open full-size figure: ') + paper.title)}"><img src="${paper.image}" alt="${escapeHTML(figureAlt)}" loading="lazy"></a><figcaption>${label('点击图片查看原图。', 'Click the figure to view it at full size.')}</figcaption></figure>` : ''}
    </div>
  </details>`;
}

function renderRecords(records) {
  return records.map(([date, title, detail]) => `<article class="record"><time>${date}</time><div><h3>${escapeHTML(localized(title))}</h3><p>${escapeHTML(localized(detail))}</p></div></article>`).join('');
}

function updateThemeLabel() {
  const dark = document.body.classList.contains('dark');
  document.getElementById('theme').setAttribute('aria-pressed', String(dark));
  document.getElementById('theme').setAttribute('aria-label', dark ? label('切换浅色模式', 'Switch to light mode') : label('切换深色模式', 'Switch to dark mode'));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#08090b' : '#f5f6fa';
}

function render() {
  const openIds = new Set([...document.querySelectorAll('.paper[open]')].map(paper => paper.id));
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  document.title = label('徐嘉程 | Jiacheng Xu', 'Jiacheng Xu | Academic Homepage');
  document.querySelector('meta[name="description"]').content = label(
    '徐嘉程，山东大学计算机科学与技术本科生，2027 年入学清华大学大模型科学与工程硕士。研究方向：具身智能、世界模型、空中视觉语言导航和强化学习。',
    'Jiacheng Xu, Computer Science undergraduate at Shandong University and incoming master’s student in Large Model Science and Engineering at Tsinghua University in 2027. Research in embodied AI, world models, aerial VLN, and reinforcement learning.'
  );
  document.querySelectorAll('[data-zh]').forEach(element => { element.innerHTML = element.dataset[language]; });
  document.getElementById('language').innerHTML = `<span class="language-icon" aria-hidden="true">文</span><span>${label('English', '中文')}</span>`;
  document.getElementById('language').setAttribute('aria-label', label('Switch to English', '切换为中文'));
  document.getElementById('paper-list').innerHTML = profileData.papers.map(paper => renderPaper(paper, openIds)).join('');
  document.getElementById('competition-list').innerHTML = renderRecords(profileData.competitions);
  document.getElementById('honor-list').innerHTML = renderRecords(profileData.honors);
  updateThemeLabel();
}

document.getElementById('language').addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  savePreference('jx-language', language);
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  history.replaceState(null, '', url);
  render();
});
document.getElementById('theme').addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  savePreference('jx-theme', dark ? 'dark' : 'light');
  updateThemeLabel();
});
document.getElementById('expand-all').addEventListener('click', () => {
  document.querySelectorAll('.paper').forEach(paper => { paper.open = true; });
});
document.getElementById('collapse-all').addEventListener('click', () => {
  document.querySelectorAll('.paper').forEach(paper => { paper.open = false; });
});

function revealLinkedPaper() {
  if (!location.hash.startsWith('#paper-')) return;
  const paper = document.getElementById(location.hash.slice(1));
  if (paper instanceof HTMLDetailsElement) {
    paper.open = true;
    requestAnimationFrame(() => paper.scrollIntoView({ block: 'start' }));
  }
}
window.addEventListener('hashchange', revealLinkedPaper);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#paper-"]');
  if (link) {
    const paper = document.getElementById(link.hash.slice(1));
    if (paper instanceof HTMLDetailsElement) paper.open = true;
  }
});

let scrollScheduled = false;
function updateNavigation() {
  const sections = [...document.querySelectorAll('main>.section')];
  const active = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1) || sections[0];
  document.querySelectorAll('.toc a').forEach(link => {
    const selected = link.hash === `#${active.id}`;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
render();
revealLinkedPaper();
updateNavigation();
