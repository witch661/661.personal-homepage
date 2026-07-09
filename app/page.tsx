'use client';

import { useState, useMemo, useEffect, useRef } from 'react';

export default function Home() {
  const [phase, setPhase] = useState<'intro' | 'transition' | 'main'>('intro');
  const [activeTab, setActiveTab] = useState('王之本纪');
  const [contentKey, setContentKey] = useState(0);

  // ─── 模式 ───
  const [mode, setMode] = useState<'admin' | 'visitor' | null>(null);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLocked, setPasswordLocked] = useState(false);
  const MAX_ATTEMPTS = 3;

  // ─── 持久化状态 ───
  const [avatarUrl, setAvatarUrl] = useState('/平板壁纸.jpg');
  const [idPhotoUrl, setIdPhotoUrl] = useState('/证件照.jpg');
  const [rewardUrl, setRewardUrl] = useState('/赞赏码.jpg');
  const [introText, setIntroText] = useState('这里写你的个人简介……');

  const [journalEntries, setJournalEntries] = useState([
    { date: '2025-01-18', content: '整理了一下最近的项目计划。' },
    { date: '2025-01-17', content: '看了《三体》的电视剧，改编得不错。' },
    { date: '2025-01-16', content: '学习了一下Tailwind CSS的高级用法。' },
    { date: '2025-01-15', content: '今天天气不错，适合写代码。' },
    { date: '2025-01-14', content: '完成了个人主页的基础框架。' },
    { date: '2025-01-13', content: '研究了React 19的新特性，收获颇丰。' },
    { date: '2025-01-12', content: '周末整理了书架，发现很多值得重读的书。' },
  ]);

  const [guestMessages, setGuestMessages] = useState<{ name: string; content: string; date: string }[]>([]);

  const [projects, setProjects] = useState<{ title: string; desc: string; tags: string; link?: string }[]>([
    { title: '个人主页', desc: '基于 Next.js 的个人主页，集成 Tailwind CSS 全屏动效与管理者系统。', tags: 'Next.js, Tailwind CSS', link: '' },
    { title: '博客系统', desc: '轻量级 Markdown 博客，支持标签分类与全文搜索。', tags: 'React, Node.js', link: '' },
  ]);

  const [contactText, setContactText] = useState(
    '📧 邮箱：661@example.com\n📱 微信：sixsixone\n🐦 微博：@六六幺\n🌐 个人主页：661.space'
  );

  const [editingContact, setEditingContact] = useState(false);
  const [contactEditValue, setContactEditValue] = useState('');

  // ─── 文件上传 ───
  const idPhotoInputRef = useRef<HTMLInputElement>(null);
  const rewardInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (file: File, setter: (url: string) => void) => {
    const reader = new FileReader();
    reader.onload = (e) => { if (e.target?.result) setter(e.target.result as string); };
    reader.readAsDataURL(file);
  };

  // ─── localStorage 载入 ───
  useEffect(() => { try { const v = localStorage.getItem('avatarUrl'); if (v) setAvatarUrl(v); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem('avatarUrl', avatarUrl); } catch {} }, [avatarUrl]);
  useEffect(() => { try { const v = localStorage.getItem('idPhotoUrl'); if (v) setIdPhotoUrl(v); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem('idPhotoUrl', idPhotoUrl); } catch {} }, [idPhotoUrl]);
  useEffect(() => { try { const v = localStorage.getItem('rewardUrl'); if (v) setRewardUrl(v); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem('rewardUrl', rewardUrl); } catch {} }, [rewardUrl]);
  useEffect(() => { try { const v = localStorage.getItem('introText'); if (v) setIntroText(v); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem('introText', introText); } catch {} }, [introText]);
  useEffect(() => { try { const v = localStorage.getItem('contactText'); if (v) setContactText(v); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem('contactText', contactText); } catch {} }, [contactText]);
  useEffect(() => {
    try { const v = localStorage.getItem('journalEntries'); if (v) { const p = JSON.parse(v); if (Array.isArray(p)) setJournalEntries(p); } } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem('journalEntries', JSON.stringify(journalEntries)); } catch {} }, [journalEntries]);
  useEffect(() => {
    try { const v = localStorage.getItem('guestMessages'); if (v) { const p = JSON.parse(v); if (Array.isArray(p)) setGuestMessages(p); } } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem('guestMessages', JSON.stringify(guestMessages)); } catch {} }, [guestMessages]);
  useEffect(() => {
    try { const v = localStorage.getItem('projects'); if (v) { const p = JSON.parse(v); if (Array.isArray(p)) setProjects(p); } } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem('projects', JSON.stringify(projects)); } catch {} }, [projects]);

  // ─── 起居注 ───
  const [journalPage, setJournalPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [newEntryDate, setNewEntryDate] = useState('');
  const [newEntryContent, setNewEntryContent] = useState('');

  const [flipPhase, setFlipPhase] = useState<'none' | 'out' | 'in'>('none');
  const [sourceEntries, setSourceEntries] = useState<typeof journalEntries>([]);

  // ─── 访客留言 ───
  const [guestName, setGuestName] = useState('');
  const [guestContent, setGuestContent] = useState('');

  // ─── 我的项目 ───
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjTags, setNewProjTags] = useState('');
  const [newProjLink, setNewProjLink] = useState('');
  const [projectPage, setProjectPage] = useState(0);
  const projectPageSize = 4;
  const projectTotalPages = Math.ceil(projects.length / projectPageSize);
  const currentProjects = projects.slice(projectPage * projectPageSize, (projectPage + 1) * projectPageSize);

  // ─── 编辑状态 ───
  const [editingIntro, setEditingIntro] = useState(false);
  const [introEditValue, setIntroEditValue] = useState('');

  const [avatarModal, setAvatarModal] = useState<'none' | 'view' | 'change'>('none');
  const [idPhotoModal, setIdPhotoModal] = useState<'none' | 'view' | 'change'>('none');

  const tabs = ['王之本纪', '起居注', '我的项目', '联系我', '访客留言', '欢迎为国库添砖加瓦'];
  const isAdmin = mode === 'admin';
  const isVisitor = mode === 'visitor';

  // ─── 计算属性 ───
  const sortedEntries = useMemo(() =>
    [...journalEntries].sort((a, b) => b.date.localeCompare(a.date)), [journalEntries]
  );
  const filteredEntries = useMemo(() => {
    if (!searchQuery.trim()) return sortedEntries;
    const q = searchQuery.toLowerCase();
    return sortedEntries.filter(e => e.date.includes(q) || e.content.toLowerCase().includes(q));
  }, [searchQuery, sortedEntries]);
  const sortedMessages = useMemo(() =>
    [...guestMessages].sort((a, b) => b.date.localeCompare(a.date)), [guestMessages]
  );
  const pageSize = 5;
  const totalPages = Math.ceil(filteredEntries.length / pageSize);
  const currentEntries = filteredEntries.slice(journalPage * pageSize, (journalPage + 1) * pageSize);

  // ─── 通用操作 ───
  const doEnter = () => { setPhase('transition'); setTimeout(() => setPhase('main'), 3000); };

  const handleBack = () => {
    setPhase('intro'); setActiveTab('王之本纪'); setContentKey(0); setJournalPage(0);
    setSearchQuery(''); setMode(null); setShowPasswordInput(false); setPasswordInput('');
    setPasswordAttempts(0); setPasswordError(false); setPasswordLocked(false);
  };

  const handleTabChange = (tab: string) => {
    setContentKey(p => p + 1); setActiveTab(tab); setJournalPage(0); setProjectPage(0);
    setSearchQuery(''); setShowAddEntry(false); setShowAddProject(false);
  };

  // ─── 入口 ───
  const handleIAm661 = () => { setShowPasswordInput(true); setPasswordInput(''); setPasswordError(false); if (passwordAttempts >= MAX_ATTEMPTS) setPasswordAttempts(0); };
  const handleIAmVisitor = () => { setMode('visitor'); doEnter(); };

  const handlePasswordSubmit = () => {
    if (passwordLocked || passwordAttempts >= MAX_ATTEMPTS) return;
    if (passwordInput === '060828') { setMode('admin'); doEnter(); }
    else {
      const next = passwordAttempts + 1;
      setPasswordAttempts(next); setPasswordError(true); setPasswordInput('');
      if (next >= MAX_ATTEMPTS) {
        setPasswordLocked(true);
        setTimeout(() => { setMode('visitor'); setShowPasswordInput(false); doEnter(); }, 2000);
      }
    }
  };

  // ─── 起居注 ───
  const handleNextPage = () => {
    if (journalPage >= totalPages - 1 || flipPhase !== 'none') return;
    setSourceEntries(currentEntries); setFlipPhase('out');
    setTimeout(() => { setJournalPage(p => p + 1); setFlipPhase('in'); setTimeout(() => setFlipPhase('none'), 400); }, 400);
  };
  const handlePrevPage = () => {
    if (journalPage <= 0 || flipPhase !== 'none') return;
    setSourceEntries(currentEntries); setFlipPhase('out');
    setTimeout(() => { setJournalPage(p => p - 1); setFlipPhase('in'); setTimeout(() => setFlipPhase('none'), 400); }, 400);
  };
  const handleAddEntry = () => {
    if (!newEntryDate || !newEntryContent.trim()) return;
    setJournalEntries(p => [...p, { date: newEntryDate, content: newEntryContent.trim() }]);
    setNewEntryDate(''); setNewEntryContent(''); setShowAddEntry(false); setJournalPage(0);
  };
  const handleDeleteEntry = (date: string, content: string) => {
    if (!window.confirm('确定删除此条日志？')) return;
    setJournalEntries(prev => { const idx = prev.findIndex(e => e.date === date && e.content === content); if (idx === -1) return prev; const next = [...prev]; next.splice(idx, 1); return next; });
  };

  // ─── 访客留言 ───
  const handleGuestSubmit = () => {
    if (!guestName.trim() || !guestContent.trim()) return;
    if (!window.confirm(`「${guestName.trim()}」确定要发送这条留言吗？`)) return;
    const now = new Date();
    const ds = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    setGuestMessages(p => [...p, { name: guestName.trim(), content: guestContent.trim(), date: ds }]);
    setGuestName(''); setGuestContent('');
  };
  const handleDeleteGuestMessage = (msg: { name: string; content: string; date: string }) => {
    if (!window.confirm('确定删除此留言？')) return;
    setGuestMessages(prev => {
      const idx = prev.findIndex(m => m.name === msg.name && m.content === msg.content && m.date === msg.date);
      if (idx === -1) return prev;
      const next = [...prev];
      next.splice(idx, 1);
      return next;
    });
  };
  const canEditMessage = () => isAdmin;

  // ─── 我的项目 ───
  const handleAddProject = () => {
    if (!newProjTitle.trim() || !newProjDesc.trim()) return;
    setProjects(p => [...p, { title: newProjTitle.trim(), desc: newProjDesc.trim(), tags: newProjTags.trim(), link: newProjLink.trim() }]);
    setNewProjTitle(''); setNewProjDesc(''); setNewProjTags(''); setNewProjLink(''); setShowAddProject(false); setProjectPage(0);
  };
  const handleDeleteProject = (idx: number) => {
    if (!window.confirm(`确定删除项目「${projects[idx].title}」？`)) return;
    setProjects(prev => { const next = [...prev]; next.splice(idx, 1); return next; });
  };
  const handleProjectNextPage = () => { if (projectPage < projectTotalPages - 1) setProjectPage(p => p + 1); };
  const handleProjectPrevPage = () => { if (projectPage > 0) setProjectPage(p => p - 1); };

  // ─── 管理者交互 ───
  const handleAvatarClick = () => { if (isAdmin) setAvatarModal('view'); };
  const handleIdPhotoClick = () => { if (isAdmin) setIdPhotoModal('view'); };
  const handleIntroStartEdit = () => { if (!isAdmin) return; setIntroEditValue(introText); setEditingIntro(true); };
  const handleIntroSave = () => { setIntroText(introEditValue); setEditingIntro(false); };
  const handleContactStartEdit = () => { if (!isAdmin) return; setContactEditValue(contactText); setEditingContact(true); };
  const handleContactSave = () => { setContactText(contactEditValue); setEditingContact(false); };
  const handleRewardClick = () => { if (!isAdmin) return; rewardInputRef.current?.click(); };
  const handleChangeAvatar = () => { const url = prompt('输入新的头像图片路径：', avatarUrl); if (url?.trim()) { setAvatarUrl(url.trim()); setAvatarModal('none'); } };
  const handleChangeIdPhoto = () => { idPhotoInputRef.current?.click(); };

  // ─── 组件 ───
  const AvatarCircle = ({ size = 'w-20 h-20', clickable = false }: { size?: string; clickable?: boolean }) => (
    <div className={`${size} rounded-full bg-gradient-to-br from-[#7ec8e3] to-[#ff9eb5] flex items-center justify-center text-2xl font-bold text-white shadow-lg overflow-hidden ${clickable ? 'cursor-pointer hover:ring-4 hover:ring-[#7ec8e3]/50 transition-all' : ''}`}
      onClick={clickable ? handleAvatarClick : undefined}>
      <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );

  const Divider = () => (
    <div className="flex items-center gap-2 my-3">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#7ec8e3]/25 to-transparent" />
      <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-[#7ec8e3] to-[#ff9eb5] shadow-sm" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff9eb5]/25 to-transparent" />
    </div>
  );

  const EntryCard = ({ entry, showDelete }: { entry: { date: string; content: string }; showDelete: boolean }) => (
    <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(126,200,227,0.12)] transition-all duration-300">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-1.5 h-3.5 rounded-full bg-gradient-to-b from-[#7ec8e3] to-[#ff9eb5] shadow-sm" />
        <span className="text-[11px] font-medium text-[#7b9fb0] tracking-wide">{entry.date}</span>
      </div>
      <p className="text-sm text-[#2c5f7c] leading-relaxed pl-3">{entry.content}</p>
      {showDelete && (
        <button onClick={() => handleDeleteEntry(entry.date, entry.content)}
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-400 text-white text-[11px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 shadow-md scale-0 group-hover:scale-100">×</button>
      )}
    </div>
  );

  const GuestCard = ({ msg }: { msg: { name: string; content: string; date: string } }) => {
    const showDelete = canEditMessage();
    return (
      <div className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#f0e8ed] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(255,158,181,0.1)] transition-all duration-300">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff9eb5] to-[#ffc4d1] flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-2 ring-white/40">
              {msg.name.charAt(0)}
            </div>
            <span className="text-xs font-medium text-[#5a8fa8]">{msg.name}</span>
          </div>
          <span className="text-[10px] text-[#aac4d3]">{msg.date}</span>
        </div>
        <p className="text-sm text-[#2c5f7c] leading-relaxed pl-3">{msg.content}</p>
        {showDelete && (
          <button onClick={() => handleDeleteGuestMessage(msg)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-400 text-white text-[11px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 shadow-md scale-0 group-hover:scale-100">×</button>
        )}
      </div>
    );
  };

  const ProjectCard = ({ proj, idx }: { proj: { title: string; desc: string; tags: string; link?: string }; idx: number }) => (
    <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_28px_rgba(126,200,227,0.12)] transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7ec8e3]/20 to-[#ff9eb5]/20 flex items-center justify-center text-lg shrink-0 border border-white/40 shadow-sm">
          🚀
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-[#2c5f7c] mb-1">{proj.title}</h3>
          <p className="text-sm text-[#5a8fa8] leading-relaxed mb-2">{proj.desc}</p>
          {proj.tags && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {proj.tags.split(',').map((t, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#7ec8e3]/15 to-[#ff9eb5]/15 text-[#5a8fa8] border border-white/40">{t.trim()}</span>
              ))}
            </div>
          )}
          {proj.link && (
            <a href={proj.link} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-lg bg-[#7ec8e3]/10 text-[#2c5f7c] hover:bg-[#7ec8e3]/20 transition-all shadow-sm">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              直达链接
            </a>
          )}
        </div>
      </div>
      {isAdmin && (
        <button onClick={() => handleDeleteProject(idx)}
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-400 text-white text-[11px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 shadow-md scale-0 group-hover:scale-100">×</button>
      )}
    </div>
  );

  // ─── 王之本纪 ───
  const renderWangContent = () => (
    <div className="h-full flex relative pt-2">
      <div className={`w-32 h-40 flex-shrink-0 ${isAdmin ? 'cursor-pointer hover:ring-4 hover:ring-[#c9a87c]/50 transition-all' : ''}`} onClick={handleIdPhotoClick}>
        <div className="relative w-full h-full">
          <div className="absolute -top-1 -left-1 w-5 h-5 border-t-[3px] border-l-[3px] border-[#c9a87c] rounded-tl-md" />
          <div className="absolute -top-1 -right-1 w-5 h-5 border-t-[3px] border-r-[3px] border-[#c9a87c] rounded-tr-md" />
          <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-[3px] border-l-[3px] border-[#c9a87c] rounded-bl-md" />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-[3px] border-r-[3px] border-[#c9a87c] rounded-br-md" />
          <div className="absolute top-1 left-1 right-1 bottom-1 border border-[#e8d5b5] rounded-md" />
          <div className="absolute top-2 left-2 right-2 bottom-2 overflow-hidden rounded border-2 border-[#d4c5a9] shadow-inner">
            <img src={idPhotoUrl} alt="证件照" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="flex-1 ml-6 mt-2">
        {editingIntro ? (
          <div className="border-2 border-dashed border-[#7ec8e3] rounded-xl p-4 bg-white/40">
            <textarea value={introEditValue} onChange={e => setIntroEditValue(e.target.value)}
              className="w-full h-28 bg-transparent outline-none text-sm text-[#2c5f7c] resize-none leading-relaxed" />
            <div className="flex gap-2 mt-2 justify-end">
              <button onClick={() => setEditingIntro(false)} className="px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white">取消</button>
              <button onClick={handleIntroSave} className="px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d">保存</button>
            </div>
          </div>
        ) : (
          <div className={`border-2 border-[#d4c5a9] rounded-xl p-4 bg-white/30 min-h-[8rem] ${isAdmin ? 'cursor-pointer hover:border-[#7ec8e3] hover:bg-white/40 transition-all' : ''}`}
            onClick={handleIntroStartEdit}>
            <p className="text-sm text-[#2c5f7c] leading-relaxed whitespace-pre-wrap">{introText}</p>
            {isAdmin && <p className="text-[10px] text-[#aac4d3] mt-2">点击编辑简介</p>}
          </div>
        )}
      </div>
    </div>
  );

  // ─── 起居注 ───
  const renderJournalContent = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 mb-3">
        <div className="relative flex-1">
          <input type="text" placeholder="搜索日期或关键词…" value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setJournalPage(0); }}
            className="w-full py-2 pl-9 pr-3 rounded-xl bg-white/70 border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] focus:ring-2 focus:ring-[#7ec8e3]/20 transition-all" />
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#c0d8e5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        {isAdmin && (
          <button onClick={() => { setShowAddEntry(!showAddEntry); setNewEntryDate(''); setNewEntryContent(''); }}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-xl font-bold shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center btn-3d">+</button>
        )}
      </div>

      {showAddEntry && (
        <div className="mx-4 mb-3 p-4 rounded-xl bg-white/70 border border-[#e0eef5] shadow-sm animate-fadeIn">
          <input type="date" value={newEntryDate} onChange={e => setNewEntryDate(e.target.value)}
            className="w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] outline-none focus:border-[#7ec8e3] bg-white/80" />
          <textarea placeholder="写点什么……" value={newEntryContent} onChange={e => setNewEntryContent(e.target.value)}
            className="w-full h-20 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80 resize-none leading-relaxed" />
          <div className="flex gap-2 mt-2 justify-end">
            <button onClick={() => setShowAddEntry(false)} className="px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white">取消</button>
            <button onClick={handleAddEntry} className="px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d">添加</button>
          </div>
        </div>
      )}

      <div className="flex-1 px-4 overflow-y-auto">
        {flipPhase === 'out' ? (
          <div className="space-y-2.5 animate-pageFlipOut">{sourceEntries.map((e, i) => (<EntryCard key={e.date + i} entry={e} showDelete={false} />))}</div>
        ) : flipPhase === 'in' ? (
          <div className="space-y-2.5 animate-pageFlipIn">{currentEntries.map((e, i) => (<EntryCard key={e.date + i} entry={e} showDelete={true} />))}</div>
        ) : currentEntries.length === 0 ? (
          <p className="text-center text-[#aac4d3] mt-12 text-sm">未找到匹配内容</p>
        ) : (
          <div className="space-y-2.5">{currentEntries.map((e, i) => (<EntryCard key={e.date + i} entry={e} showDelete={isAdmin} />))}</div>
        )}
      </div>

      <div className="flex justify-between items-center px-4 py-3 mt-2 border-t border-[#e8f0f5]/60">
        <span className="text-xs text-[#aac4d3]">{filteredEntries.length > 0 ? `第 ${journalPage + 1} / ${totalPages} 页` : '共 0 条'}</span>
        <div className="flex gap-2">
          {journalPage > 0 && (
            <button onClick={handlePrevPage} disabled={flipPhase !== 'none'}
              className="group flex items-center gap-1 px-4 py-1.5 rounded-lg bg-white/50 text-[#5a8fa8] text-sm font-medium shadow-sm hover:shadow-md hover:bg-white/70 transition-all btn-3d-white">
              <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              <span>上一页</span>
            </button>
          )}
          <button onClick={handleNextPage} disabled={journalPage >= totalPages - 1 || totalPages === 0 || flipPhase !== 'none'}
            className="group flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed btn-3d">
            <span>下一页</span>
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );

  // ─── 我的项目 ───
  const renderProjectsContent = () => (
    <div className="h-full flex flex-col">
      <Divider />

      <div className="flex items-center justify-between px-4 mb-3">
        <span className="text-xs text-[#7b9fb0] tracking-[0.2em]">项目列表</span>
        {isAdmin && (
          <button onClick={() => { setShowAddProject(!showAddProject); setNewProjTitle(''); setNewProjDesc(''); setNewProjTags(''); setNewProjLink(''); }}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-xl font-bold shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center btn-3d">+</button>
        )}
      </div>

      {showAddProject && (
        <div className="mx-4 mb-3 p-4 rounded-xl bg-white/70 border border-[#e0eef5] shadow-sm animate-fadeIn">
          <input type="text" placeholder="项目名称" value={newProjTitle} onChange={e => setNewProjTitle(e.target.value)}
            className="w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80" />
          <textarea placeholder="项目描述" value={newProjDesc} onChange={e => setNewProjDesc(e.target.value)}
            className="w-full mb-2 h-16 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80 resize-none leading-relaxed" />
          <input type="text" placeholder="标签（用逗号分隔）" value={newProjTags} onChange={e => setNewProjTags(e.target.value)}
            className="w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80" />
          <input type="url" placeholder="链接（选填）" value={newProjLink} onChange={e => setNewProjLink(e.target.value)}
            className="w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80" />
          <div className="flex gap-2 mt-2 justify-end">
            <button onClick={() => setShowAddProject(false)} className="px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white">取消</button>
            <button onClick={handleAddProject} className="px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d">添加</button>
          </div>
        </div>
      )}

      <div className="flex-1 px-4 overflow-y-auto space-y-3">
        {projects.length === 0 ? (
          <p className="text-center text-[#aac4d3] mt-12 text-sm">还没有项目</p>
        ) : (
          currentProjects.map((p, i) => <ProjectCard key={projectPage * projectPageSize + i} proj={p} idx={projectPage * projectPageSize + i} />)
        )}
      </div>

      {projects.length > projectPageSize && (
        <div className="flex justify-between items-center px-4 py-3 mt-2 border-t border-[#e8f0f5]/60">
          <span className="text-xs text-[#aac4d3]">{`第 ${projectPage + 1} / ${projectTotalPages} 页`}</span>
          <div className="flex gap-2">
            {projectPage > 0 && (
              <button onClick={handleProjectPrevPage}
                className="group flex items-center gap-1 px-4 py-1.5 rounded-lg bg-white/50 text-[#5a8fa8] text-sm font-medium shadow-sm hover:shadow-md hover:bg-white/70 transition-all btn-3d-white">
                <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                <span>上一页</span>
              </button>
            )}
            <button onClick={handleProjectNextPage} disabled={projectPage >= projectTotalPages - 1 || projectTotalPages === 0}
              className="group flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed btn-3d">
              <span>下一页</span>
              <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </button>
          </div>
        </div>
      )}

      <Divider />
    </div>
  );

  // ─── 联系我 ───
  const renderContactContent = () => (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7ec8e3]/20 to-[#ff9eb5]/20 flex items-center justify-center text-3xl mb-4 border border-white/40 shadow-sm">
        💬
      </div>
      <Divider />
      {editingContact ? (
        <div className="w-full max-w-md border-2 border-dashed border-[#7ec8e3] rounded-xl p-4 bg-white/40">
          <textarea value={contactEditValue} onChange={e => setContactEditValue(e.target.value)}
            className="w-full h-32 bg-transparent outline-none text-sm text-[#2c5f7c] resize-none leading-relaxed" />
          <div className="flex gap-2 mt-2 justify-end">
            <button onClick={() => setEditingContact(false)} className="px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white">取消</button>
            <button onClick={handleContactSave} className="px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d">保存</button>
          </div>
        </div>
      ) : (
        <div className={`w-full max-w-md rounded-xl p-5 bg-white/30 border border-[#d4c5a9]/50 ${isAdmin ? 'cursor-pointer hover:border-[#7ec8e3] hover:bg-white/40 transition-all' : ''}`}
          onClick={() => { if (isAdmin) { setContactEditValue(contactText); setEditingContact(true); } }}>
          <p className="text-sm text-[#2c5f7c] leading-loose whitespace-pre-wrap text-center">{contactText}</p>
          {isAdmin && <p className="text-[10px] text-[#aac4d3] mt-2 text-center">点击编辑联系信息</p>}
        </div>
      )}
      <Divider />
    </div>
  );

  // ─── 访客留言 ───
  const renderGuestbookContent = () => (
    <div className="h-full flex flex-col">
      <div className="text-center text-xs text-[#7b9fb0] tracking-[0.3em] mb-3" style={{ fontFamily: "'Ma Shan Zheng','ZCOOL KuaiLe',cursive,serif" }}>留下你的足迹</div>
      <Divider />

      <div className="flex-1 px-4 overflow-y-auto space-y-2.5 mb-3">
        {sortedMessages.length === 0 ? (
          <p className="text-center text-[#aac4d3] mt-12 text-sm">还没有留言，快来留下第一条吧</p>
        ) : (
          sortedMessages.map((msg, i) => <GuestCard key={i} msg={msg} />)
        )}
      </div>

      {isVisitor && (
        <div className="px-4 py-3 border-t border-[#e8f0f5]/60">
          <div className="flex gap-2 mb-2">
            <input type="text" placeholder="你的昵称" value={guestName} onChange={e => setGuestName(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-white/70 border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#ff9eb5] focus:ring-2 focus:ring-[#ff9eb5]/20 transition-all" />
          </div>
          <div className="flex gap-2">
            <textarea placeholder="写点什么……" value={guestContent} onChange={e => setGuestContent(e.target.value)}
              className="flex-1 h-20 px-3 py-2 rounded-lg bg-white/70 border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#ff9eb5] focus:ring-2 focus:ring-[#ff9eb5]/20 transition-all resize-none leading-relaxed" />
            <button onClick={handleGuestSubmit} disabled={!guestName.trim() || !guestContent.trim()}
              className="self-end px-5 py-2 rounded-lg bg-gradient-to-r from-[#ff9eb5] to-[#ffc4d1] text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 btn-3d">发送</button>
          </div>
        </div>
      )}
    </div>
  );

  // ─── 右侧内容 ───
  const renderContent = () => (
    <div className="relative w-full h-full flex items-stretch gap-0">
      {/* 内容面板 + 装饰边框 */}
      <div className="flex-1 relative">
        <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#7ec8e3]/30 rounded-tl-xl pointer-events-none" />
        <div className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-[#ff9eb5]/30 rounded-tr-xl pointer-events-none" />
        <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-[#ff9eb5]/30 rounded-bl-xl pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#7ec8e3]/30 rounded-br-xl pointer-events-none" />
        <div className="h-full bg-white/65 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 animate-contentFade overflow-hidden">
          {activeTab === '王之本纪' && renderWangContent()}
          {activeTab === '起居注' && renderJournalContent()}
          {activeTab === '我的项目' && renderProjectsContent()}
          {activeTab === '联系我' && renderContactContent()}
          {activeTab === '访客留言' && renderGuestbookContent()}
          {activeTab === '欢迎为国库添砖加瓦' && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className={`w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white/50 ${isAdmin ? 'cursor-pointer hover:ring-4 hover:ring-[#ff9eb5]/50 transition-all' : ''}`} onClick={handleRewardClick}>
                <img src={rewardUrl} alt="赞赏码" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#5a8fa8] mt-4 text-lg" style={{ fontFamily: "'Ma Shan Zheng',cursive" }}>"(´▽｀)"</p>
              {isAdmin && <p className="text-[10px] text-[#aac4d3] mt-1">点击可更换图片</p>}
            </div>
          )}
        </div>
      </div>

      {/* 竖排标题 */}
      <div className="w-14 ml-4 flex items-center justify-center flex-shrink-0 pointer-events-none select-none">
        <span className="text-3xl font-semibold text-[#2c5f7c] tracking-[0.35em] leading-[1.6] drop-shadow-sm"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          {activeTab}
        </span>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#b8ecf5] via-[#dceaf5] to-[#ffd0da] text-gray-800 overflow-hidden relative">

      {/* ═══ 华丽背景装饰 ═══ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
        {/* 主光晕 */}
        <div className="absolute -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-[#7ec8e3]/8 blur-[150px] animate-float1" />
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-[#ff9eb5]/10 blur-[150px] animate-float2" />
        <div className="absolute -bottom-48 left-1/3 w-[700px] h-[700px] rounded-full bg-[#a8e6f0]/12 blur-[150px] animate-float3" />
        <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ffc4d1]/10 blur-[100px] animate-float2" />
        <div className="absolute top-1/5 left-1/2 w-[400px] h-[400px] rounded-full bg-[#7ec8e3]/6 blur-[100px] animate-float1" />

        {/* 装饰几何形状 */}
        <div className="absolute top-[15%] left-[8%] w-8 h-8 bg-[#ff9eb5]/15 rotate-45 animate-float2 rounded-md" style={{ animationDuration: '14s' }} />
        <div className="absolute top-[30%] right-[12%] w-10 h-10 bg-[#7ec8e3]/15 rotate-12 animate-float1 rounded-md" style={{ animationDuration: '16s', animationDelay: '1s' }} />
        <div className="absolute top-[65%] left-[12%] w-7 h-7 bg-[#ffc4d1]/20 rotate-[30deg] animate-float3 rounded-md" style={{ animationDuration: '13s', animationDelay: '2s' }} />
        <div className="absolute top-[55%] right-[8%] w-10 h-10 border-[3px] border-[#7ec8e3]/12 rotate-45 animate-float2 rounded-md" style={{ animationDuration: '17s', animationDelay: '1.5s' }} />
        <div className="absolute bottom-[15%] left-[40%] w-9 h-9 border-[3px] border-[#ff9eb5]/10 rotate-[60deg] animate-float1 rounded-md" style={{ animationDuration: '15s', animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] left-[45%] w-6 h-6 bg-[#7ec8e3]/12 rotate-[20deg] animate-float3 rounded-md" style={{ animationDuration: '19s', animationDelay: '3s' }} />

        {/* 动态装饰圆点 */}
        <div className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-[#7ec8e3]/20 animate-float1" style={{ animationDuration: '15s' }} />
        <div className="absolute top-[45%] right-[20%] w-3 h-3 rounded-full bg-[#ff9eb5]/20 animate-float2" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-[35%] left-[30%] w-3 h-3 rounded-full bg-[#ffc4d1]/20 animate-float3" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[70%] right-[30%] w-3 h-3 rounded-full bg-[#7ec8e3]/20 animate-float1" style={{ animationDuration: '20s' }} />
        <div className="absolute top-[10%] right-[35%] w-2 h-2 rounded-full bg-[#ff9eb5]/15 animate-float2" style={{ animationDuration: '14s' }} />
        <div className="absolute bottom-[15%] right-[15%] w-2 h-2 rounded-full bg-[#7ec8e3]/15 animate-float3" style={{ animationDuration: '16s' }} />

        {/* 动态装饰星形 */}
        <div className="absolute top-[12%] right-[25%] text-lg text-[#ff9eb5]/15 animate-float2" style={{ animationDuration: '22s' }}>✦</div>
        <div className="absolute bottom-[20%] left-[10%] text-xl text-[#7ec8e3]/15 animate-float1" style={{ animationDuration: '19s' }}>✦</div>
        <div className="absolute top-[60%] left-[5%] text-base text-[#ffc4d1]/20 animate-float3" style={{ animationDuration: '17s' }}>✦</div>

        {/* 装饰光环 */}
        <div className="absolute top-[35%] left-[25%] w-32 h-32 rounded-full border-2 border-[#7ec8e3]/8 animate-float3" style={{ animationDuration: '25s' }} />
        <div className="absolute top-[60%] right-[15%] w-28 h-28 rounded-full border-2 border-[#ff9eb5]/8 animate-float1" style={{ animationDuration: '22s', animationDelay: '3s' }} />
        <div className="absolute top-[15%] left-[40%] w-24 h-24 rounded-full border-2 border-[#ffc4d1]/10 animate-float2" style={{ animationDuration: '28s', animationDelay: '1s' }} />

        {/* 装饰小十字 */}
        <div className="absolute top-[8%] left-[60%] text-2xl text-[#7ec8e3]/10 animate-float2" style={{ animationDuration: '21s' }}>✧</div>
        <div className="absolute bottom-[10%] right-[35%] text-xl text-[#ff9eb5]/12 animate-float1" style={{ animationDuration: '18s', animationDelay: '2s' }}>✧</div>
        <div className="absolute top-[48%] left-[8%] text-lg text-[#ffc4d1]/15 animate-float3" style={{ animationDuration: '24s', animationDelay: '0.5s' }}>✧</div>

        {/* 光晕射线 */}
        <div className="absolute top-[30%] left-[50%] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-[#7ec8e3]/8 to-transparent animate-float1 origin-bottom" style={{ transform: 'rotate(-15deg)', animationDuration: '20s' }} />
        <div className="absolute top-[20%] left-[30%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-[#ff9eb5]/6 to-transparent animate-float2 origin-bottom" style={{ transform: 'rotate(10deg)', animationDuration: '23s', animationDelay: '1s' }} />

        {/* 流光线条 */}
        <div className="absolute top-[20%] left-0 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#7ec8e3]/12 to-transparent animate-flow1" />
        <div className="absolute top-[50%] right-0 w-[350px] h-[2px] bg-gradient-to-l from-transparent via-[#ff9eb5]/10 to-transparent animate-flow2" />
        <div className="absolute top-[75%] left-[10%] w-[280px] h-[2px] bg-gradient-to-r from-transparent via-[#7ec8e3]/8 to-transparent animate-flow3" />

        {/* 动态三角 */}
        <div className="absolute top-[22%] left-[55%] text-lg text-[#7ec8e3]/10 animate-float1" style={{ animationDuration: '26s' }}>△</div>
        <div className="absolute bottom-[30%] right-[25%] text-xl text-[#ff9eb5]/10 animate-float2" style={{ animationDuration: '20s', animationDelay: '2s' }}>△</div>
        <div className="absolute top-[50%] left-[55%] text-base text-[#ffc4d1]/12 animate-float3" style={{ animationDuration: '24s', animationDelay: '1s' }}>◇</div>

        {/* 旋转装饰环 */}
        <div className="absolute top-[5%] right-[30%] w-24 h-24 rounded-full border-[3px] border-[#7ec8e3]/6 animate-spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-[10%] left-[25%] w-20 h-20 rounded-full border-[3px] border-[#ff9eb5]/8 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute top-[42%] right-[5%] w-16 h-16 rounded-full border-[3px] border-dashed border-[#ffc4d1]/10 animate-spin-slow" style={{ animationDuration: '20s' }} />

        {/* 闪烁星群 */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute text-xs text-white/20 animate-twinkle"
            style={{ top: `${5 + Math.random() * 90}%`, left: `${3 + Math.random() * 94}%`, animationDelay: `${i * 1.5}s`, animationDuration: `${3 + Math.random() * 4}s` }}>✦</div>
        ))}

        {/* 渐变动态遮罩 */}
        <div className="absolute inset-0 animate-gradient-shift opacity-[0.06]"
          style={{ background: 'linear-gradient(135deg, #7ec8e3 0%, #ff9eb5 50%, #7ec8e3 100%)', backgroundSize: '200% 200%' }} />

        {/* 网格点阵 */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle, #2c5f7c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* ─── 导入界面 ─── */}
      {phase === 'intro' && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fadeIn relative z-10">
          <div className="relative mb-8">
            <AvatarCircle size="w-32 h-32" clickable={false} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#2c5f7c] drop-shadow-sm">这里是661</h1>
          <p className="text-xl md:text-2xl text-[#5a8fa8] mb-10">本大王驾到！</p>

          {!showPasswordInput ? (
            <div className="flex gap-6">
              <button onClick={handleIAm661}
                className="group relative px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden btn-3d">
                <span className="absolute inset-0 bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6bb8d3] to-[#f08fa5] transition-opacity duration-300" />
                <span className="relative z-10 text-white">我是661</span>
              </button>
              <button onClick={handleIAmVisitor}
                className="px-10 py-4 bg-white/50 backdrop-blur-md text-[#2c5f7c] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 border border-white/60 btn-3d-white">
                我是参观者
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 animate-fadeIn">
              <div className="flex gap-2">
                <input type="password" maxLength={6} inputMode="numeric" pattern="[0-9]*" value={passwordInput}
                  onChange={e => { if (/^\d{0,6}$/.test(e.target.value)) { setPasswordInput(e.target.value); setPasswordError(false); } }}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handlePasswordSubmit(); } }}
                  placeholder="输入六位数字密码" disabled={passwordLocked}
                  className="px-4 py-3 rounded-xl bg-white/80 border border-[#e0eef5] text-center text-lg tracking-[0.5em] text-[#2c5f7c] outline-none focus:border-[#7ec8e3] focus:ring-2 focus:ring-[#7ec8e3]/20 w-52 disabled:opacity-40 placeholder:text-xs placeholder:tracking-normal" autoFocus />
                <button onClick={handlePasswordSubmit} disabled={passwordLocked}
                  className="px-6 py-3 bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 btn-3d">
                  确认
                </button>
              </div>
              {passwordError && (
                <p className={`text-sm ${passwordLocked ? 'text-rose-400' : 'text-rose-300'}`}>
                  {passwordLocked ? '密码错误已达上限，即将以参观者身份进入' : `密码错误（${passwordAttempts}/${MAX_ATTEMPTS}）`}
                </p>
              )}
              {!passwordLocked && (
                <button onClick={() => { setShowPasswordInput(false); setPasswordAttempts(0); setPasswordError(false); }}
                  className="text-xs text-[#aac4d3] hover:text-[#7ec8e3] transition-colors btn-3d-white">返回</button>
              )}
            </div>
          )}
        </div>
      )}

      {/* ─── 过场动画 ─── */}
      {phase === 'transition' && (
        <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
          <div className="relative overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold animate-shimmer">欢迎来到我的赛博被窝</h1>
          </div>
          <div className="mt-10 w-64 h-2.5 bg-white/30 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] rounded-full animate-fillBar shadow-sm" />
          </div>
        </div>
      )}

      {/* ─── 主界面 ─── */}
      {phase === 'main' && (
        <div className="flex min-h-screen animate-mainIn relative z-10">
          {/* 侧栏 */}
          <aside className="w-64 bg-white/60 backdrop-blur-xl border-r border-white/40 shadow-[4px_0_24px_rgba(0,0,0,0.04)] flex flex-col items-center pt-10 pb-6">
            <div className="relative mb-4">
              <AvatarCircle clickable={isAdmin} />
            </div>
            <p className="text-xl font-bold text-[#2c5f7c] mb-0.5 drop-shadow-sm">661</p>
            <p className="text-[10px] text-[#aac4d3] mb-8 tracking-wider">{isAdmin ? '👑 管理者模式' : '👋 参观者模式'}</p>

            <nav className="flex flex-col gap-2.5 w-full px-5 flex-1">
              {tabs.map(item => (
                <button key={item} onClick={() => handleTabChange(item)}
                  className={`relative py-2.5 px-4 rounded-xl font-medium transition-all text-center shadow-sm overflow-hidden btn-3d-white ${
                    activeTab === item
                      ? 'text-white shadow-md scale-[1.02]'
                      : 'bg-white/40 text-[#2c5f7c] hover:bg-white/70 hover:scale-[1.02]'
                  }`}>
                  {activeTab === item && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5]" />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    {item === '王之本纪' && '👑 '}
                    {item === '起居注' && '📖 '}
                    {item === '我的项目' && '🚀 '}
                    {item === '联系我' && '💬 '}
                    {item === '访客留言' && '✍️ '}
                    {item === '欢迎为国库添砖加瓦' && '💝 '}
                    {item}
                  </span>
                </button>
              ))}
            </nav>

            <div className="mt-auto">
              <button onClick={handleBack}
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all btn-3d"
                title="返回">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
                </svg>
              </button>
            </div>
          </aside>

          {/* 内容 */}
          <div className="flex-1 p-10 flex items-center justify-center relative">
            <div key={contentKey} className="w-full h-full max-w-5xl relative">
              {renderContent()}
            </div>
          </div>
        </div>
      )}

      {/* 弹窗 */}
      {avatarModal === 'view' && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center" onClick={() => setAvatarModal('none')}>
          <div className="relative max-w-lg max-h-[80vh] mx-4" onClick={e => e.stopPropagation()}>
            <img src={avatarUrl} alt="avatar" className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white/60" />
            <div className="flex gap-3 mt-4 justify-center">
              <button onClick={handleChangeAvatar} className="px-5 py-2 rounded-xl bg-white/80 text-[#2c5f7c] text-sm font-medium shadow-md hover:bg-white transition-all btn-3d-white">更换头像</button>
              <button onClick={() => setAvatarModal('none')} className="px-5 py-2 rounded-xl bg-white/30 text-white text-sm font-medium shadow-md hover:bg-white/50 transition-all btn-3d-white">关闭</button>
            </div>
          </div>
        </div>
      )}

      {idPhotoModal === 'view' && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center" onClick={() => setIdPhotoModal('none')}>
          <div className="relative max-w-lg max-h-[80vh] mx-4" onClick={e => e.stopPropagation()}>
            <img src={idPhotoUrl} alt="证件照" className="w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white/60" />
            <div className="flex gap-3 mt-4 justify-center">
              <button onClick={handleChangeIdPhoto} className="px-5 py-2 rounded-xl bg-white/80 text-[#2c5f7c] text-sm font-medium shadow-md hover:bg-white transition-all btn-3d-white">更换照片</button>
              <button onClick={() => setIdPhotoModal('none')} className="px-5 py-2 rounded-xl bg-white/30 text-white text-sm font-medium shadow-md hover:bg-white/50 transition-all btn-3d-white">关闭</button>
            </div>
          </div>
        </div>
      )}

      {/* 隐藏文件输入 */}
      <input type="file" accept="image/*" ref={idPhotoInputRef} className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) { handleFileSelect(f, (url) => { setIdPhotoUrl(url); setIdPhotoModal('none'); }); } }} />
      <input type="file" accept="image/*" ref={rewardInputRef} className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFileSelect(f, setRewardUrl); }} />

      <style jsx>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes mainIn { from { opacity:0; transform:translateX(30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes contentFade { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shimmer {
          0% { background:linear-gradient(90deg,#2c5f7c,#7ec8e3 40%,#ff9eb5 60%,#2c5f7c); background-size:200% 100%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-position:-100% 0; }
          100% { background-position:200% 0; }
        }
        @keyframes fillBar { 0% { width:0%; } 100% { width:100%; } }
        @keyframes pageFlipOut {
          0% { transform:perspective(600px) rotateX(0deg) translateY(0); opacity:1; }
          100% { transform:perspective(600px) rotateX(-12deg) translateY(-30px); opacity:0; }
        }
        @keyframes pageFlipIn {
          0% { transform:perspective(600px) rotateX(12deg) translateY(30px); opacity:0; }
          100% { transform:perspective(600px) rotateX(0deg) translateY(0); opacity:1; }
        }
        @keyframes float1 {
          0%, 100% { transform:translate(0,0) rotate(0deg); }
          33% { transform:translate(30px,-20px) rotate(2deg); }
          66% { transform:translate(-20px,10px) rotate(-1deg); }
        }
        @keyframes float2 {
          0%, 100% { transform:translate(0,0) scale(1); }
          50% { transform:translate(-25px,25px) scale(1.03); }
        }
        @keyframes float3 {
          0%, 100% { transform:translate(0,0); }
          50% { transform:translate(20px,-30px); }
        }
        @keyframes flow1 {
          0% { transform:translateX(-100%) scaleX(0.5); opacity:0; }
          20% { opacity:1; }
          80% { opacity:1; }
          100% { transform:translateX(400%) scaleX(1.5); opacity:0; }
        }
        @keyframes flow2 {
          0% { transform:translateX(100%) scaleX(0.5); opacity:0; }
          20% { opacity:1; }
          80% { opacity:1; }
          100% { transform:translateX(-400%) scaleX(1.5); opacity:0; }
        }
        @keyframes flow3 {
          0% { transform:translateX(-100%) scaleX(0.3); opacity:0; }
          30% { opacity:0.8; }
          70% { opacity:0.8; }
          100% { transform:translateX(500%) scaleX(1.2); opacity:0; }
        }
        .animate-fadeIn { animation:fadeIn 0.6s ease-out; }
        .animate-mainIn { animation:mainIn 0.6s ease-out; }
        .animate-contentFade { animation:contentFade 0.5s ease-out 0.2s both; }
        .animate-shimmer { background:linear-gradient(90deg,#2c5f7c,#7ec8e3 40%,#ff9eb5 60%,#2c5f7c); background-size:200% 100%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 2s linear infinite; }
        .animate-fillBar { animation:fillBar 2.5s ease-in-out forwards; }
        .animate-pageFlipOut { animation:pageFlipOut 0.4s ease-in forwards; }
        .animate-pageFlipIn { animation:pageFlipIn 0.4s ease-out forwards; }
        .animate-float1 { animation:float1 20s ease-in-out infinite; }
        .animate-float2 { animation:float2 25s ease-in-out infinite; }
        .animate-float3 { animation:float3 18s ease-in-out infinite; }
        .animate-flow1 { animation:flow1 8s ease-in-out infinite; }
        .animate-flow2 { animation:flow2 10s ease-in-out infinite; animation-delay:2s; }
        .animate-flow3 { animation:flow3 7s ease-in-out infinite; animation-delay:4s; }

        @keyframes spin-slow {
          0% { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity:0; transform:scale(0.5); }
          50% { opacity:0.6; transform:scale(1.2); }
        }
        @keyframes gradient-shift {
          0% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
          100% { background-position:0% 50%; }
        }
        .animate-spin-slow { animation:spin-slow 20s linear infinite; }
        .animate-twinkle { animation:twinkle 4s ease-in-out infinite; }
        .animate-gradient-shift { animation:gradient-shift 12s ease infinite; }

        /* 3D 果冻按钮 */
        @keyframes jelly {
          0% { transform:translateY(-2px) scale(1); }
          30% { transform:translateY(-3px) scale(1.06,0.94); }
          50% { transform:translateY(-1px) scale(0.97,1.03); }
          70% { transform:translateY(0) scale(1.02,0.98); }
          100% { transform:translateY(-1px) scale(1); }
        }
        .btn-3d {
          transition:all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
          box-shadow:0 4px 14px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06);
          position:relative;
        }
        .btn-3d::after {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background:linear-gradient(rgba(255,255,255,0.25) 0%, transparent 60%);
          pointer-events:none;
        }
        .btn-3d:hover:not(:disabled) {
          transform:translateY(-2px) scale(1.03);
          box-shadow:0 10px 30px rgba(126,200,227,0.25), 0 4px 10px rgba(0,0,0,0.1);
        }
        .btn-3d:active:not(:disabled) { transform:translateY(1px) scale(0.97); box-shadow:0 2px 8px rgba(0,0,0,0.1); }
        .btn-3d-white {
          transition:all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
          box-shadow:0 2px 10px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03);
        }
        .btn-3d-white:hover:not(:disabled) {
          transform:translateY(-2px) scale(1.03);
          box-shadow:0 8px 25px rgba(0,0,0,0.08);
        }
        .btn-3d-white:active:not(:disabled) { transform:translateY(1px) scale(0.97); }

      `}</style>
    </main>
  );
}
