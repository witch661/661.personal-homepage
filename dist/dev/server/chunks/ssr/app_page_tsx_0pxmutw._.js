module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('intro');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('王之本纪');
    const [contentKey, setContentKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // ─── 模式 ───
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPasswordInput, setShowPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordInput, setPasswordInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [passwordAttempts, setPasswordAttempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [passwordError, setPasswordError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordLocked, setPasswordLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const MAX_ATTEMPTS = 3;
    // ─── 持久化状态 ───
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/平板壁纸.jpg');
    const [idPhotoUrl, setIdPhotoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/证件照.jpg');
    const [rewardUrl, setRewardUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('/赞赏码.jpg');
    const [introText, setIntroText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('这里写你的个人简介……');
    const [journalEntries, setJournalEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            date: '2025-01-18',
            content: '整理了一下最近的项目计划。'
        },
        {
            date: '2025-01-17',
            content: '看了《三体》的电视剧，改编得不错。'
        },
        {
            date: '2025-01-16',
            content: '学习了一下Tailwind CSS的高级用法。'
        },
        {
            date: '2025-01-15',
            content: '今天天气不错，适合写代码。'
        },
        {
            date: '2025-01-14',
            content: '完成了个人主页的基础框架。'
        },
        {
            date: '2025-01-13',
            content: '研究了React 19的新特性，收获颇丰。'
        },
        {
            date: '2025-01-12',
            content: '周末整理了书架，发现很多值得重读的书。'
        }
    ]);
    const [guestMessages, setGuestMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            title: '个人主页',
            desc: '基于 Next.js 的个人主页，集成 Tailwind CSS 全屏动效与管理者系统。',
            tags: 'Next.js, Tailwind CSS',
            link: ''
        },
        {
            title: '博客系统',
            desc: '轻量级 Markdown 博客，支持标签分类与全文搜索。',
            tags: 'React, Node.js',
            link: ''
        }
    ]);
    const [contactText, setContactText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('📧 邮箱：661@example.com\n📱 微信：sixsixone\n🐦 微博：@六六幺\n🌐 个人主页：661.space');
    const [editingContact, setEditingContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contactEditValue, setContactEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ─── 文件上传 ───
    const idPhotoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rewardInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileSelect = (file, setter)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            if (e.target?.result) setter(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    // ─── localStorage 载入 ───
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('avatarUrl');
            if (v) setAvatarUrl(v);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('avatarUrl', avatarUrl);
        } catch  {}
    }, [
        avatarUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('idPhotoUrl');
            if (v) setIdPhotoUrl(v);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('idPhotoUrl', idPhotoUrl);
        } catch  {}
    }, [
        idPhotoUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('rewardUrl');
            if (v) setRewardUrl(v);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('rewardUrl', rewardUrl);
        } catch  {}
    }, [
        rewardUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('introText');
            if (v) setIntroText(v);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('introText', introText);
        } catch  {}
    }, [
        introText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('contactText');
            if (v) setContactText(v);
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('contactText', contactText);
        } catch  {}
    }, [
        contactText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('journalEntries');
            if (v) {
                const p = JSON.parse(v);
                if (Array.isArray(p)) setJournalEntries(p);
            }
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
        } catch  {}
    }, [
        journalEntries
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('guestMessages');
            if (v) {
                const p = JSON.parse(v);
                if (Array.isArray(p)) setGuestMessages(p);
            }
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('guestMessages', JSON.stringify(guestMessages));
        } catch  {}
    }, [
        guestMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const v = localStorage.getItem('projects');
            if (v) {
                const p = JSON.parse(v);
                if (Array.isArray(p)) setProjects(p);
            }
        } catch  {}
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch  {}
    }, [
        projects
    ]);
    // ─── 起居注 ───
    const [journalPage, setJournalPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAddEntry, setShowAddEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newEntryDate, setNewEntryDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newEntryContent, setNewEntryContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [flipPhase, setFlipPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('none');
    const [sourceEntries, setSourceEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // ─── 访客留言 ───
    const [guestName, setGuestName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [guestContent, setGuestContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ─── 我的项目 ───
    const [showAddProject, setShowAddProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newProjTitle, setNewProjTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newProjDesc, setNewProjDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newProjTags, setNewProjTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newProjLink, setNewProjLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [projectPage, setProjectPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const projectPageSize = 4;
    const projectTotalPages = Math.ceil(projects.length / projectPageSize);
    const currentProjects = projects.slice(projectPage * projectPageSize, (projectPage + 1) * projectPageSize);
    // ─── 编辑状态 ───
    const [editingIntro, setEditingIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [introEditValue, setIntroEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [avatarModal, setAvatarModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('none');
    const [idPhotoModal, setIdPhotoModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('none');
    const tabs = [
        '王之本纪',
        '起居注',
        '我的项目',
        '联系我',
        '访客留言',
        '欢迎为国库添砖加瓦'
    ];
    const isAdmin = mode === 'admin';
    const isVisitor = mode === 'visitor';
    // ─── 计算属性 ───
    const sortedEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...journalEntries
        ].sort((a, b)=>b.date.localeCompare(a.date)), [
        journalEntries
    ]);
    const filteredEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchQuery.trim()) return sortedEntries;
        const q = searchQuery.toLowerCase();
        return sortedEntries.filter((e)=>e.date.includes(q) || e.content.toLowerCase().includes(q));
    }, [
        searchQuery,
        sortedEntries
    ]);
    const sortedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...guestMessages
        ].sort((a, b)=>b.date.localeCompare(a.date)), [
        guestMessages
    ]);
    const pageSize = 5;
    const totalPages = Math.ceil(filteredEntries.length / pageSize);
    const currentEntries = filteredEntries.slice(journalPage * pageSize, (journalPage + 1) * pageSize);
    // ─── 通用操作 ───
    const doEnter = ()=>{
        setPhase('transition');
        setTimeout(()=>setPhase('main'), 3000);
    };
    const handleBack = ()=>{
        setPhase('intro');
        setActiveTab('王之本纪');
        setContentKey(0);
        setJournalPage(0);
        setSearchQuery('');
        setMode(null);
        setShowPasswordInput(false);
        setPasswordInput('');
        setPasswordAttempts(0);
        setPasswordError(false);
        setPasswordLocked(false);
    };
    const handleTabChange = (tab)=>{
        setContentKey((p)=>p + 1);
        setActiveTab(tab);
        setJournalPage(0);
        setProjectPage(0);
        setSearchQuery('');
        setShowAddEntry(false);
        setShowAddProject(false);
    };
    // ─── 入口 ───
    const handleIAm661 = ()=>{
        setShowPasswordInput(true);
        setPasswordInput('');
        setPasswordError(false);
        if (passwordAttempts >= MAX_ATTEMPTS) setPasswordAttempts(0);
    };
    const handleIAmVisitor = ()=>{
        setMode('visitor');
        doEnter();
    };
    const handlePasswordSubmit = ()=>{
        if (passwordLocked || passwordAttempts >= MAX_ATTEMPTS) return;
        if (passwordInput === '060828') {
            setMode('admin');
            doEnter();
        } else {
            const next = passwordAttempts + 1;
            setPasswordAttempts(next);
            setPasswordError(true);
            setPasswordInput('');
            if (next >= MAX_ATTEMPTS) {
                setPasswordLocked(true);
                setTimeout(()=>{
                    setMode('visitor');
                    setShowPasswordInput(false);
                    doEnter();
                }, 2000);
            }
        }
    };
    // ─── 起居注 ───
    const handleNextPage = ()=>{
        if (journalPage >= totalPages - 1 || flipPhase !== 'none') return;
        setSourceEntries(currentEntries);
        setFlipPhase('out');
        setTimeout(()=>{
            setJournalPage((p)=>p + 1);
            setFlipPhase('in');
            setTimeout(()=>setFlipPhase('none'), 400);
        }, 400);
    };
    const handlePrevPage = ()=>{
        if (journalPage <= 0 || flipPhase !== 'none') return;
        setSourceEntries(currentEntries);
        setFlipPhase('out');
        setTimeout(()=>{
            setJournalPage((p)=>p - 1);
            setFlipPhase('in');
            setTimeout(()=>setFlipPhase('none'), 400);
        }, 400);
    };
    const handleAddEntry = ()=>{
        if (!newEntryDate || !newEntryContent.trim()) return;
        setJournalEntries((p)=>[
                ...p,
                {
                    date: newEntryDate,
                    content: newEntryContent.trim()
                }
            ]);
        setNewEntryDate('');
        setNewEntryContent('');
        setShowAddEntry(false);
        setJournalPage(0);
    };
    const handleDeleteEntry = (date, content)=>{
        if (!window.confirm('确定删除此条日志？')) return;
        setJournalEntries((prev)=>{
            const idx = prev.findIndex((e)=>e.date === date && e.content === content);
            if (idx === -1) return prev;
            const next = [
                ...prev
            ];
            next.splice(idx, 1);
            return next;
        });
    };
    // ─── 访客留言 ───
    const handleGuestSubmit = ()=>{
        if (!guestName.trim() || !guestContent.trim()) return;
        if (!window.confirm(`「${guestName.trim()}」确定要发送这条留言吗？`)) return;
        const now = new Date();
        const ds = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        setGuestMessages((p)=>[
                ...p,
                {
                    name: guestName.trim(),
                    content: guestContent.trim(),
                    date: ds
                }
            ]);
        setGuestName('');
        setGuestContent('');
    };
    const handleDeleteGuestMessage = (msg)=>{
        if (!window.confirm('确定删除此留言？')) return;
        setGuestMessages((prev)=>{
            const idx = prev.findIndex((m)=>m.name === msg.name && m.content === msg.content && m.date === msg.date);
            if (idx === -1) return prev;
            const next = [
                ...prev
            ];
            next.splice(idx, 1);
            return next;
        });
    };
    const canEditMessage = ()=>isAdmin;
    // ─── 我的项目 ───
    const handleAddProject = ()=>{
        if (!newProjTitle.trim() || !newProjDesc.trim()) return;
        setProjects((p)=>[
                ...p,
                {
                    title: newProjTitle.trim(),
                    desc: newProjDesc.trim(),
                    tags: newProjTags.trim(),
                    link: newProjLink.trim()
                }
            ]);
        setNewProjTitle('');
        setNewProjDesc('');
        setNewProjTags('');
        setNewProjLink('');
        setShowAddProject(false);
        setProjectPage(0);
    };
    const handleDeleteProject = (idx)=>{
        if (!window.confirm(`确定删除项目「${projects[idx].title}」？`)) return;
        setProjects((prev)=>{
            const next = [
                ...prev
            ];
            next.splice(idx, 1);
            return next;
        });
    };
    const handleProjectNextPage = ()=>{
        if (projectPage < projectTotalPages - 1) setProjectPage((p)=>p + 1);
    };
    const handleProjectPrevPage = ()=>{
        if (projectPage > 0) setProjectPage((p)=>p - 1);
    };
    // ─── 管理者交互 ───
    const handleAvatarClick = ()=>{
        if (isAdmin) setAvatarModal('view');
    };
    const handleIdPhotoClick = ()=>{
        if (isAdmin) setIdPhotoModal('view');
    };
    const handleIntroStartEdit = ()=>{
        if (!isAdmin) return;
        setIntroEditValue(introText);
        setEditingIntro(true);
    };
    const handleIntroSave = ()=>{
        setIntroText(introEditValue);
        setEditingIntro(false);
    };
    const handleContactStartEdit = ()=>{
        if (!isAdmin) return;
        setContactEditValue(contactText);
        setEditingContact(true);
    };
    const handleContactSave = ()=>{
        setContactText(contactEditValue);
        setEditingContact(false);
    };
    const handleRewardClick = ()=>{
        if (!isAdmin) return;
        rewardInputRef.current?.click();
    };
    const handleChangeAvatar = ()=>{
        const url = prompt('输入新的头像图片路径：', avatarUrl);
        if (url?.trim()) {
            setAvatarUrl(url.trim());
            setAvatarModal('none');
        }
    };
    const handleChangeIdPhoto = ()=>{
        idPhotoInputRef.current?.click();
    };
    // ─── 组件 ───
    const AvatarCircle = ({ size = 'w-20 h-20', clickable = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${size} rounded-full bg-gradient-to-br from-[#7ec8e3] to-[#ff9eb5] flex items-center justify-center text-2xl font-bold text-white shadow-lg overflow-hidden ${clickable ? 'cursor-pointer hover:ring-4 hover:ring-[#7ec8e3]/50 transition-all' : ''}`,
            onClick: clickable ? handleAvatarClick : undefined,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: avatarUrl,
                alt: "avatar",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 233,
            columnNumber: 5
        }, this);
    const Divider = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 my-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-[#7ec8e3]/25 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 241,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rotate-45 bg-gradient-to-br from-[#7ec8e3] to-[#ff9eb5] shadow-sm"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 242,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 h-px bg-gradient-to-r from-transparent via-[#ff9eb5]/25 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 243,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 240,
            columnNumber: 5
        }, this);
    const EntryCard = ({ entry, showDelete })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(126,200,227,0.12)] transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-3.5 rounded-full bg-gradient-to-b from-[#7ec8e3] to-[#ff9eb5] shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 250,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium text-[#7b9fb0] tracking-wide",
                            children: entry.date
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 251,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 249,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#2c5f7c] leading-relaxed pl-3",
                    children: entry.content
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 253,
                    columnNumber: 7
                }, this),
                showDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleDeleteEntry(entry.date, entry.content),
                    className: "absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-400 text-white text-[11px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 shadow-md scale-0 group-hover:scale-100",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 248,
            columnNumber: 5
        }, this);
    const GuestCard = ({ msg })=>{
        const showDelete = canEditMessage();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-[#f0e8ed] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(255,158,181,0.1)] transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 rounded-full bg-gradient-to-br from-[#ff9eb5] to-[#ffc4d1] flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-2 ring-white/40",
                                    children: msg.name.charAt(0)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-[#5a8fa8]",
                                    children: msg.name
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-[#aac4d3]",
                            children: msg.date
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#2c5f7c] leading-relaxed pl-3",
                    children: msg.content
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                showDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleDeleteGuestMessage(msg),
                    className: "absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-400 text-white text-[11px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 shadow-md scale-0 group-hover:scale-100",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 264,
            columnNumber: 7
        }, this);
    };
    const ProjectCard = ({ proj, idx })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_28px_rgba(126,200,227,0.12)] transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-[#7ec8e3]/20 to-[#ff9eb5]/20 flex items-center justify-center text-lg shrink-0 border border-white/40 shadow-sm",
                            children: "🚀"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 286,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-[#2c5f7c] mb-1",
                                    children: proj.title
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[#5a8fa8] leading-relaxed mb-2",
                                    children: proj.desc
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 11
                                }, this),
                                proj.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 mb-2",
                                    children: proj.tags.split(',').map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#7ec8e3]/15 to-[#ff9eb5]/15 text-[#5a8fa8] border border-white/40",
                                            children: t.trim()
                                        }, i, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                proj.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: proj.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-lg bg-[#7ec8e3]/10 text-[#2c5f7c] hover:bg-[#7ec8e3]/20 transition-all shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-3 h-3",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 157
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "15 3 21 3 21 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 225
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "14",
                                                    x2: "21",
                                                    y2: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 260
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        "直达链接"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 289,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 285,
                    columnNumber: 7
                }, this),
                isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleDeleteProject(idx),
                    className: "absolute -top-2 -right-2 w-5 h-5 rounded-full bg-rose-400 text-white text-[11px] leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-500 shadow-md scale-0 group-hover:scale-100",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 284,
            columnNumber: 5
        }, this);
    // ─── 王之本纪 ───
    const renderWangContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex relative pt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-32 h-40 flex-shrink-0 ${isAdmin ? 'cursor-pointer hover:ring-4 hover:ring-[#c9a87c]/50 transition-all' : ''}`,
                    onClick: handleIdPhotoClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 -left-1 w-5 h-5 border-t-[3px] border-l-[3px] border-[#c9a87c] rounded-tl-md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 -right-1 w-5 h-5 border-t-[3px] border-r-[3px] border-[#c9a87c] rounded-tr-md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -left-1 w-5 h-5 border-b-[3px] border-l-[3px] border-[#c9a87c] rounded-bl-md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -right-1 w-5 h-5 border-b-[3px] border-r-[3px] border-[#c9a87c] rounded-br-md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1 left-1 right-1 bottom-1 border border-[#e8d5b5] rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 left-2 right-2 bottom-2 overflow-hidden rounded border-2 border-[#d4c5a9] shadow-inner",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: idPhotoUrl,
                                    alt: "证件照",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 318,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 ml-6 mt-2",
                    children: editingIntro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-dashed border-[#7ec8e3] rounded-xl p-4 bg-white/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: introEditValue,
                                onChange: (e)=>setIntroEditValue(e.target.value),
                                className: "w-full h-28 bg-transparent outline-none text-sm text-[#2c5f7c] resize-none leading-relaxed"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-2 justify-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditingIntro(false),
                                        className: "px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white",
                                        children: "取消"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleIntroSave,
                                        className: "px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d",
                                        children: "保存"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border-2 border-[#d4c5a9] rounded-xl p-4 bg-white/30 min-h-[8rem] ${isAdmin ? 'cursor-pointer hover:border-[#7ec8e3] hover:bg-white/40 transition-all' : ''}`,
                        onClick: handleIntroStartEdit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#2c5f7c] leading-relaxed whitespace-pre-wrap",
                                children: introText
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[#aac4d3] mt-2",
                                children: "点击编辑简介"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 344,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 330,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 317,
            columnNumber: 5
        }, this);
    // ─── 起居注 ───
    const renderJournalContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 px-4 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "搜索日期或关键词…",
                                    value: searchQuery,
                                    onChange: (e)=>{
                                        setSearchQuery(e.target.value);
                                        setJournalPage(0);
                                    },
                                    className: "w-full py-2 pl-9 pr-3 rounded-xl bg-white/70 border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] focus:ring-2 focus:ring-[#7ec8e3]/20 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#c0d8e5]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m21 21-4.3-4.3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 355,
                            columnNumber: 9
                        }, this),
                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowAddEntry(!showAddEntry);
                                setNewEntryDate('');
                                setNewEntryContent('');
                            },
                            className: "w-9 h-9 rounded-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-xl font-bold shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center btn-3d",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 354,
                    columnNumber: 7
                }, this),
                showAddEntry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 mb-3 p-4 rounded-xl bg-white/70 border border-[#e0eef5] shadow-sm animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: newEntryDate,
                            onChange: (e)=>setNewEntryDate(e.target.value),
                            className: "w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] outline-none focus:border-[#7ec8e3] bg-white/80"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "写点什么……",
                            value: newEntryContent,
                            onChange: (e)=>setNewEntryContent(e.target.value),
                            className: "w-full h-20 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80 resize-none leading-relaxed"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddEntry(false),
                                    className: "px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white",
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddEntry,
                                    className: "px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d",
                                    children: "添加"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-4 overflow-y-auto",
                    children: flipPhase === 'out' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5 animate-pageFlipOut",
                        children: sourceEntries.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryCard, {
                                entry: e,
                                showDelete: false
                            }, e.date + i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 384,
                                columnNumber: 90
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this) : flipPhase === 'in' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5 animate-pageFlipIn",
                        children: currentEntries.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryCard, {
                                entry: e,
                                showDelete: true
                            }, e.date + i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 90
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this) : currentEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[#aac4d3] mt-12 text-sm",
                        children: "未找到匹配内容"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5",
                        children: currentEntries.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryCard, {
                                entry: e,
                                showDelete: isAdmin
                            }, e.date + i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 390,
                                columnNumber: 71
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 382,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-4 py-3 mt-2 border-t border-[#e8f0f5]/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[#aac4d3]",
                            children: filteredEntries.length > 0 ? `第 ${journalPage + 1} / ${totalPages} 页` : '共 0 条'
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 395,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                journalPage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrevPage,
                                    disabled: flipPhase !== 'none',
                                    className: "group flex items-center gap-1 px-4 py-1.5 rounded-lg bg-white/50 text-[#5a8fa8] text-sm font-medium shadow-sm hover:shadow-md hover:bg-white/70 transition-all btn-3d-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 group-hover:-translate-y-0.5 transition-transform",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m18 15-6-6-6 6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 207
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "上一页"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNextPage,
                                    disabled: journalPage >= totalPages - 1 || totalPages === 0 || flipPhase !== 'none',
                                    className: "group flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed btn-3d",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "下一页"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 group-hover:-translate-y-0.5 transition-transform",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m18 15-6-6-6 6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 205
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 396,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 394,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 353,
            columnNumber: 5
        }, this);
    // ─── 我的项目 ───
    const renderProjectsContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 417,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-4 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[#7b9fb0] tracking-[0.2em]",
                            children: "项目列表"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 420,
                            columnNumber: 9
                        }, this),
                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowAddProject(!showAddProject);
                                setNewProjTitle('');
                                setNewProjDesc('');
                                setNewProjTags('');
                                setNewProjLink('');
                            },
                            className: "w-9 h-9 rounded-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-xl font-bold shadow-md hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center btn-3d",
                            children: "+"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 419,
                    columnNumber: 7
                }, this),
                showAddProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 mb-3 p-4 rounded-xl bg-white/70 border border-[#e0eef5] shadow-sm animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "项目名称",
                            value: newProjTitle,
                            onChange: (e)=>setNewProjTitle(e.target.value),
                            className: "w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "项目描述",
                            value: newProjDesc,
                            onChange: (e)=>setNewProjDesc(e.target.value),
                            className: "w-full mb-2 h-16 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80 resize-none leading-relaxed"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "标签（用逗号分隔）",
                            value: newProjTags,
                            onChange: (e)=>setNewProjTags(e.target.value),
                            className: "w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "url",
                            placeholder: "链接（选填）",
                            value: newProjLink,
                            onChange: (e)=>setNewProjLink(e.target.value),
                            className: "w-full mb-2 px-3 py-1.5 rounded-lg border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#7ec8e3] bg-white/80"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddProject(false),
                                    className: "px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white",
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddProject,
                                    className: "px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d",
                                    children: "添加"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-4 overflow-y-auto space-y-3",
                    children: projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[#aac4d3] mt-12 text-sm",
                        children: "还没有项目"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this) : currentProjects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                            proj: p,
                            idx: projectPage * projectPageSize + i
                        }, projectPage * projectPageSize + i, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 448,
                            columnNumber: 41
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 444,
                    columnNumber: 7
                }, this),
                projects.length > projectPageSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-4 py-3 mt-2 border-t border-[#e8f0f5]/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[#aac4d3]",
                            children: `第 ${projectPage + 1} / ${projectTotalPages} 页`
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                projectPage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleProjectPrevPage,
                                    className: "group flex items-center gap-1 px-4 py-1.5 rounded-lg bg-white/50 text-[#5a8fa8] text-sm font-medium shadow-sm hover:shadow-md hover:bg-white/70 transition-all btn-3d-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 group-hover:-translate-y-0.5 transition-transform",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m18 15-6-6-6 6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 209
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "上一页"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleProjectNextPage,
                                    disabled: projectPage >= projectTotalPages - 1 || projectTotalPages === 0,
                                    className: "group flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white text-sm font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed btn-3d",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "下一页"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 group-hover:-translate-y-0.5 transition-transform",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m18 15-6-6-6 6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 466,
                                                columnNumber: 207
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 472,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 416,
            columnNumber: 5
        }, this);
    // ─── 联系我 ───
    const renderContactContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7ec8e3]/20 to-[#ff9eb5]/20 flex items-center justify-center text-3xl mb-4 border border-white/40 shadow-sm",
                    children: "💬"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 479,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 482,
                    columnNumber: 7
                }, this),
                editingContact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md border-2 border-dashed border-[#7ec8e3] rounded-xl p-4 bg-white/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: contactEditValue,
                            onChange: (e)=>setContactEditValue(e.target.value),
                            className: "w-full h-32 bg-transparent outline-none text-sm text-[#2c5f7c] resize-none leading-relaxed"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mt-2 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setEditingContact(false),
                                    className: "px-4 py-1.5 text-xs rounded-lg bg-white/60 text-[#5a8fa8] hover:bg-white transition-colors btn-3d-white",
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleContactSave,
                                    className: "px-4 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white shadow-sm hover:shadow-md transition-all btn-3d",
                                    children: "保存"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full max-w-md rounded-xl p-5 bg-white/30 border border-[#d4c5a9]/50 ${isAdmin ? 'cursor-pointer hover:border-[#7ec8e3] hover:bg-white/40 transition-all' : ''}`,
                    onClick: ()=>{
                        if (isAdmin) {
                            setContactEditValue(contactText);
                            setEditingContact(true);
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#2c5f7c] leading-loose whitespace-pre-wrap text-center",
                            children: contactText
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this),
                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-[#aac4d3] mt-2 text-center",
                            children: "点击编辑联系信息"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 496,
                            columnNumber: 23
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 499,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 478,
            columnNumber: 5
        }, this);
    // ─── 访客留言 ───
    const renderGuestbookContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-xs text-[#7b9fb0] tracking-[0.3em] mb-3",
                    style: {
                        fontFamily: "'Ma Shan Zheng','ZCOOL KuaiLe',cursive,serif"
                    },
                    children: "留下你的足迹"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 506,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 507,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 px-4 overflow-y-auto space-y-2.5 mb-3",
                    children: sortedMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[#aac4d3] mt-12 text-sm",
                        children: "还没有留言，快来留下第一条吧"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 511,
                        columnNumber: 11
                    }, this) : sortedMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GuestCard, {
                            msg: msg
                        }, i, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 513,
                            columnNumber: 42
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 509,
                    columnNumber: 7
                }, this),
                isVisitor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 border-t border-[#e8f0f5]/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "你的昵称",
                                value: guestName,
                                onChange: (e)=>setGuestName(e.target.value),
                                className: "flex-1 px-3 py-2 rounded-lg bg-white/70 border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#ff9eb5] focus:ring-2 focus:ring-[#ff9eb5]/20 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 520,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "写点什么……",
                                    value: guestContent,
                                    onChange: (e)=>setGuestContent(e.target.value),
                                    className: "flex-1 h-20 px-3 py-2 rounded-lg bg-white/70 border border-[#e0eef5] text-sm text-[#2c5f7c] placeholder-[#aac4d3] outline-none focus:border-[#ff9eb5] focus:ring-2 focus:ring-[#ff9eb5]/20 transition-all resize-none leading-relaxed"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGuestSubmit,
                                    disabled: !guestName.trim() || !guestContent.trim(),
                                    className: "self-end px-5 py-2 rounded-lg bg-gradient-to-r from-[#ff9eb5] to-[#ffc4d1] text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 btn-3d",
                                    children: "发送"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 505,
            columnNumber: 5
        }, this);
    // ─── 右侧内容 ───
    const renderContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full flex items-stretch gap-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#7ec8e3]/30 rounded-tl-xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 539,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-[#ff9eb5]/30 rounded-tr-xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 540,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-[#ff9eb5]/30 rounded-bl-xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 541,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#7ec8e3]/30 rounded-br-xl pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 542,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-white/65 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 animate-contentFade overflow-hidden",
                            children: [
                                activeTab === '王之本纪' && renderWangContent(),
                                activeTab === '起居注' && renderJournalContent(),
                                activeTab === '我的项目' && renderProjectsContent(),
                                activeTab === '联系我' && renderContactContent(),
                                activeTab === '访客留言' && renderGuestbookContent(),
                                activeTab === '欢迎为国库添砖加瓦' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-64 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white/50 ${isAdmin ? 'cursor-pointer hover:ring-4 hover:ring-[#ff9eb5]/50 transition-all' : ''}`,
                                            onClick: handleRewardClick,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: rewardUrl,
                                                alt: "赞赏码",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#5a8fa8] mt-4 text-lg",
                                            style: {
                                                fontFamily: "'Ma Shan Zheng',cursive"
                                            },
                                            children: '"(´▽｀)"'
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-[#aac4d3] mt-1",
                                            children: "点击可更换图片"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 550,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 543,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 538,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-14 ml-4 flex items-center justify-center flex-shrink-0 pointer-events-none select-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-3xl font-semibold text-[#2c5f7c] tracking-[0.35em] leading-[1.6] drop-shadow-sm",
                        style: {
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed'
                        },
                        children: activeTab
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 562,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 536,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-d99be3bf461230d4" + " " + "min-h-screen bg-gradient-to-br from-[#b8ecf5] via-[#dceaf5] to-[#ffd0da] text-gray-800 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d99be3bf461230d4" + " " + "fixed inset-0 pointer-events-none overflow-hidden -z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-[#7ec8e3]/8 blur-[150px] animate-float1"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 577,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-[#ff9eb5]/10 blur-[150px] animate-float2"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute -bottom-48 left-1/3 w-[700px] h-[700px] rounded-full bg-[#a8e6f0]/12 blur-[150px] animate-float3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-2/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#ffc4d1]/10 blur-[100px] animate-float2"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-1/5 left-1/2 w-[400px] h-[400px] rounded-full bg-[#7ec8e3]/6 blur-[100px] animate-float1"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '14s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[15%] left-[8%] w-8 h-8 bg-[#ff9eb5]/15 rotate-45 animate-float2 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '16s',
                            animationDelay: '1s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[30%] right-[12%] w-10 h-10 bg-[#7ec8e3]/15 rotate-12 animate-float1 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '13s',
                            animationDelay: '2s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[65%] left-[12%] w-7 h-7 bg-[#ffc4d1]/20 rotate-[30deg] animate-float3 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '17s',
                            animationDelay: '1.5s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[55%] right-[8%] w-10 h-10 border-[3px] border-[#7ec8e3]/12 rotate-45 animate-float2 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '15s',
                            animationDelay: '0.5s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[15%] left-[40%] w-9 h-9 border-[3px] border-[#ff9eb5]/10 rotate-[60deg] animate-float1 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '19s',
                            animationDelay: '3s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[40%] left-[45%] w-6 h-6 bg-[#7ec8e3]/12 rotate-[20deg] animate-float3 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '15s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-[#7ec8e3]/20 animate-float1"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '18s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[45%] right-[20%] w-3 h-3 rounded-full bg-[#ff9eb5]/20 animate-float2"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '12s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[35%] left-[30%] w-3 h-3 rounded-full bg-[#ffc4d1]/20 animate-float3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '20s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[70%] right-[30%] w-3 h-3 rounded-full bg-[#7ec8e3]/20 animate-float1"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 595,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '14s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[10%] right-[35%] w-2 h-2 rounded-full bg-[#ff9eb5]/15 animate-float2"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '16s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[15%] right-[15%] w-2 h-2 rounded-full bg-[#7ec8e3]/15 animate-float3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '22s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[12%] right-[25%] text-lg text-[#ff9eb5]/15 animate-float2",
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 600,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '19s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[20%] left-[10%] text-xl text-[#7ec8e3]/15 animate-float1",
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '17s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[60%] left-[5%] text-base text-[#ffc4d1]/20 animate-float3",
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '25s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[35%] left-[25%] w-32 h-32 rounded-full border-2 border-[#7ec8e3]/8 animate-float3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '22s',
                            animationDelay: '3s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[60%] right-[15%] w-28 h-28 rounded-full border-2 border-[#ff9eb5]/8 animate-float1"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '28s',
                            animationDelay: '1s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[15%] left-[40%] w-24 h-24 rounded-full border-2 border-[#ffc4d1]/10 animate-float2"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '21s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[8%] left-[60%] text-2xl text-[#7ec8e3]/10 animate-float2",
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '18s',
                            animationDelay: '2s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[10%] right-[35%] text-xl text-[#ff9eb5]/12 animate-float1",
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 611,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '24s',
                            animationDelay: '0.5s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[48%] left-[8%] text-lg text-[#ffc4d1]/15 animate-float3",
                        children: "✧"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: 'rotate(-15deg)',
                            animationDuration: '20s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[30%] left-[50%] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-[#7ec8e3]/8 to-transparent animate-float1 origin-bottom"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            transform: 'rotate(10deg)',
                            animationDuration: '23s',
                            animationDelay: '1s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[20%] left-[30%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-[#ff9eb5]/6 to-transparent animate-float2 origin-bottom"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[20%] left-0 w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[#7ec8e3]/12 to-transparent animate-flow1"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[50%] right-0 w-[350px] h-[2px] bg-gradient-to-l from-transparent via-[#ff9eb5]/10 to-transparent animate-flow2"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[75%] left-[10%] w-[280px] h-[2px] bg-gradient-to-r from-transparent via-[#7ec8e3]/8 to-transparent animate-flow3"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '26s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[22%] left-[55%] text-lg text-[#7ec8e3]/10 animate-float1",
                        children: "△"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '20s',
                            animationDelay: '2s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[30%] right-[25%] text-xl text-[#ff9eb5]/10 animate-float2",
                        children: "△"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '24s',
                            animationDelay: '1s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[50%] left-[55%] text-base text-[#ffc4d1]/12 animate-float3",
                        children: "◇"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '30s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[5%] right-[30%] w-24 h-24 rounded-full border-[3px] border-[#7ec8e3]/6 animate-spin-slow"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '25s',
                            animationDirection: 'reverse'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute bottom-[10%] left-[25%] w-20 h-20 rounded-full border-[3px] border-[#ff9eb5]/8 animate-spin-slow"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: '20s'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute top-[42%] right-[5%] w-16 h-16 rounded-full border-[3px] border-dashed border-[#ffc4d1]/10 animate-spin-slow"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 631,
                        columnNumber: 9
                    }, this),
                    [
                        ...Array(12)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                top: `${5 + Math.random() * 90}%`,
                                left: `${3 + Math.random() * 94}%`,
                                animationDelay: `${i * 1.5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            },
                            className: "jsx-d99be3bf461230d4" + " " + "absolute text-xs text-white/20 animate-twinkle",
                            children: "✦"
                        }, i, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'linear-gradient(135deg, #7ec8e3 0%, #ff9eb5 50%, #7ec8e3 100%)',
                            backgroundSize: '200% 200%'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute inset-0 animate-gradient-shift opacity-[0.06]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundImage: 'radial-gradient(circle, #2c5f7c 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        },
                        className: "jsx-d99be3bf461230d4" + " " + "absolute inset-0 opacity-[0.015]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            phase === 'intro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d99be3bf461230d4" + " " + "flex flex-col items-center justify-center min-h-screen px-6 animate-fadeIn relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "relative mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarCircle, {
                            size: "w-32 h-32",
                            clickable: false,
                            className: "jsx-d99be3bf461230d4"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 650,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-d99be3bf461230d4" + " " + "text-5xl md:text-7xl font-bold mb-4 text-[#2c5f7c] drop-shadow-sm",
                        children: "这里是661"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 653,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-d99be3bf461230d4" + " " + "text-xl md:text-2xl text-[#5a8fa8] mb-10",
                        children: "本大王驾到！"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 654,
                        columnNumber: 11
                    }, this),
                    !showPasswordInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleIAm661,
                                className: "jsx-d99be3bf461230d4" + " " + "group relative px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden btn-3d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d99be3bf461230d4" + " " + "absolute inset-0 bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] group-hover:scale-105 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d99be3bf461230d4" + " " + "absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#6bb8d3] to-[#f08fa5] transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 661,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d99be3bf461230d4" + " " + "relative z-10 text-white",
                                        children: "我是661"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 658,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleIAmVisitor,
                                className: "jsx-d99be3bf461230d4" + " " + "px-10 py-4 bg-white/50 backdrop-blur-md text-[#2c5f7c] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 border border-white/60 btn-3d-white",
                                children: "我是参观者"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 664,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 657,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "flex flex-col items-center gap-4 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-d99be3bf461230d4" + " " + "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        maxLength: 6,
                                        inputMode: "numeric",
                                        pattern: "[0-9]*",
                                        value: passwordInput,
                                        onChange: (e)=>{
                                            if (/^\d{0,6}$/.test(e.target.value)) {
                                                setPasswordInput(e.target.value);
                                                setPasswordError(false);
                                            }
                                        },
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                handlePasswordSubmit();
                                            }
                                        },
                                        placeholder: "输入六位数字密码",
                                        disabled: passwordLocked,
                                        autoFocus: true,
                                        className: "jsx-d99be3bf461230d4" + " " + "px-4 py-3 rounded-xl bg-white/80 border border-[#e0eef5] text-center text-lg tracking-[0.5em] text-[#2c5f7c] outline-none focus:border-[#7ec8e3] focus:ring-2 focus:ring-[#7ec8e3]/20 w-52 disabled:opacity-40 placeholder:text-xs placeholder:tracking-normal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePasswordSubmit,
                                        disabled: passwordLocked,
                                        className: "jsx-d99be3bf461230d4" + " " + "px-6 py-3 bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 btn-3d",
                                        children: "确认"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 671,
                                columnNumber: 15
                            }, this),
                            passwordError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-d99be3bf461230d4" + " " + `text-sm ${passwordLocked ? 'text-rose-400' : 'text-rose-300'}`,
                                children: passwordLocked ? '密码错误已达上限，即将以参观者身份进入' : `密码错误（${passwordAttempts}/${MAX_ATTEMPTS}）`
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 683,
                                columnNumber: 17
                            }, this),
                            !passwordLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowPasswordInput(false);
                                    setPasswordAttempts(0);
                                    setPasswordError(false);
                                },
                                className: "jsx-d99be3bf461230d4" + " " + "text-xs text-[#aac4d3] hover:text-[#7ec8e3] transition-colors btn-3d-white",
                                children: "返回"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 688,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 670,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            phase === 'transition' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d99be3bf461230d4" + " " + "flex flex-col items-center justify-center min-h-screen relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "jsx-d99be3bf461230d4" + " " + "text-5xl md:text-7xl font-bold animate-shimmer",
                            children: "欢迎来到我的赛博被窝"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 700,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 699,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "mt-10 w-64 h-2.5 bg-white/30 rounded-full overflow-hidden shadow-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d99be3bf461230d4" + " " + "h-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] rounded-full animate-fillBar shadow-sm"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 703,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 702,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 698,
                columnNumber: 9
            }, this),
            phase === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d99be3bf461230d4" + " " + "flex min-h-screen animate-mainIn relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "jsx-d99be3bf461230d4" + " " + "w-64 bg-white/60 backdrop-blur-xl border-r border-white/40 shadow-[4px_0_24px_rgba(0,0,0,0.04)] flex flex-col items-center pt-10 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-d99be3bf461230d4" + " " + "relative mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarCircle, {
                                    clickable: isAdmin,
                                    className: "jsx-d99be3bf461230d4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 713,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-d99be3bf461230d4" + " " + "text-xl font-bold text-[#2c5f7c] mb-0.5 drop-shadow-sm",
                                children: "661"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 716,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-d99be3bf461230d4" + " " + "text-[10px] text-[#aac4d3] mb-8 tracking-wider",
                                children: isAdmin ? '👑 管理者模式' : '👋 参观者模式'
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 717,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "jsx-d99be3bf461230d4" + " " + "flex flex-col gap-2.5 w-full px-5 flex-1",
                                children: tabs.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTabChange(item),
                                        className: "jsx-d99be3bf461230d4" + " " + `relative py-2.5 px-4 rounded-xl font-medium transition-all text-center shadow-sm overflow-hidden btn-3d-white ${activeTab === item ? 'text-white shadow-md scale-[1.02]' : 'bg-white/40 text-[#2c5f7c] hover:bg-white/70 hover:scale-[1.02]'}`,
                                        children: [
                                            activeTab === item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-d99be3bf461230d4" + " " + "absolute inset-0 bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 728,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-d99be3bf461230d4" + " " + "relative z-10 flex items-center justify-center gap-1.5",
                                                children: [
                                                    item === '王之本纪' && '👑 ',
                                                    item === '起居注' && '📖 ',
                                                    item === '我的项目' && '🚀 ',
                                                    item === '联系我' && '💬 ',
                                                    item === '访客留言' && '✍️ ',
                                                    item === '欢迎为国库添砖加瓦' && '💝 ',
                                                    item
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 721,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 719,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-d99be3bf461230d4" + " " + "mt-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    title: "返回",
                                    className: "jsx-d99be3bf461230d4" + " " + "w-11 h-11 rounded-full bg-gradient-to-r from-[#7ec8e3] to-[#ff9eb5] text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all btn-3d",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "jsx-d99be3bf461230d4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 14 4 9l5-5",
                                                className: "jsx-d99be3bf461230d4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",
                                                className: "jsx-d99be3bf461230d4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 44
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 743,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d99be3bf461230d4" + " " + "flex-1 p-10 flex items-center justify-center relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d99be3bf461230d4" + " " + "w-full h-full max-w-5xl relative",
                            children: renderContent()
                        }, contentKey, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 756,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 755,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 710,
                columnNumber: 9
            }, this),
            avatarModal === 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setAvatarModal('none'),
                className: "jsx-d99be3bf461230d4" + " " + "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-d99be3bf461230d4" + " " + "relative max-w-lg max-h-[80vh] mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: avatarUrl,
                            alt: "avatar",
                            className: "jsx-d99be3bf461230d4" + " " + "w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white/60"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 767,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d99be3bf461230d4" + " " + "flex gap-3 mt-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleChangeAvatar,
                                    className: "jsx-d99be3bf461230d4" + " " + "px-5 py-2 rounded-xl bg-white/80 text-[#2c5f7c] text-sm font-medium shadow-md hover:bg-white transition-all btn-3d-white",
                                    children: "更换头像"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 769,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAvatarModal('none'),
                                    className: "jsx-d99be3bf461230d4" + " " + "px-5 py-2 rounded-xl bg-white/30 text-white text-sm font-medium shadow-md hover:bg-white/50 transition-all btn-3d-white",
                                    children: "关闭"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 770,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 768,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 766,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 765,
                columnNumber: 9
            }, this),
            idPhotoModal === 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIdPhotoModal('none'),
                className: "jsx-d99be3bf461230d4" + " " + "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-d99be3bf461230d4" + " " + "relative max-w-lg max-h-[80vh] mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: idPhotoUrl,
                            alt: "证件照",
                            className: "jsx-d99be3bf461230d4" + " " + "w-full h-full object-contain rounded-2xl shadow-2xl border-4 border-white/60"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 779,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d99be3bf461230d4" + " " + "flex gap-3 mt-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleChangeIdPhoto,
                                    className: "jsx-d99be3bf461230d4" + " " + "px-5 py-2 rounded-xl bg-white/80 text-[#2c5f7c] text-sm font-medium shadow-md hover:bg-white transition-all btn-3d-white",
                                    children: "更换照片"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIdPhotoModal('none'),
                                    className: "jsx-d99be3bf461230d4" + " " + "px-5 py-2 rounded-xl bg-white/30 text-white text-sm font-medium shadow-md hover:bg-white/50 transition-all btn-3d-white",
                                    children: "关闭"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 780,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 778,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 777,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*",
                ref: idPhotoInputRef,
                onChange: (e)=>{
                    const f = e.target.files?.[0];
                    if (f) {
                        handleFileSelect(f, (url)=>{
                            setIdPhotoUrl(url);
                            setIdPhotoModal('none');
                        });
                    }
                },
                className: "jsx-d99be3bf461230d4" + " " + "hidden"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                accept: "image/*",
                ref: rewardInputRef,
                onChange: (e)=>{
                    const f = e.target.files?.[0];
                    if (f) handleFileSelect(f, setRewardUrl);
                },
                className: "jsx-d99be3bf461230d4" + " " + "hidden"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d99be3bf461230d4",
                children: '@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes mainIn{0%{opacity:0;transform:translate(30px)}to{opacity:1;transform:translate(0)}}@keyframes contentFade{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes shimmer{0%{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#2c5f7c,#7ec8e3 40%,#ff9eb5 60%,#2c5f7c) -100% 0/200% 100%;-webkit-background-clip:text}to{background-position:200% 0}}@keyframes fillBar{0%{width:0%}to{width:100%}}@keyframes pageFlipOut{0%{opacity:1;transform:perspective(600px)rotateX(0)translateY(0)}to{opacity:0;transform:perspective(600px)rotateX(-12deg)translateY(-30px)}}@keyframes pageFlipIn{0%{opacity:0;transform:perspective(600px)rotateX(12deg)translateY(30px)}to{opacity:1;transform:perspective(600px)rotateX(0)translateY(0)}}@keyframes float1{0%,to{transform:translate(0)rotate(0)}33%{transform:translate(30px,-20px)rotate(2deg)}66%{transform:translate(-20px,10px)rotate(-1deg)}}@keyframes float2{0%,to{transform:translate(0)scale(1)}50%{transform:translate(-25px,25px)scale(1.03)}}@keyframes float3{0%,to{transform:translate(0)}50%{transform:translate(20px,-30px)}}@keyframes flow1{0%{opacity:0;transform:translate(-100%)scaleX(.5)}20%{opacity:1}80%{opacity:1}to{opacity:0;transform:translate(400%)scaleX(1.5)}}@keyframes flow2{0%{opacity:0;transform:translate(100%)scaleX(.5)}20%{opacity:1}80%{opacity:1}to{opacity:0;transform:translate(-400%)scaleX(1.5)}}@keyframes flow3{0%{opacity:0;transform:translate(-100%)scaleX(.3)}30%{opacity:.8}70%{opacity:.8}to{opacity:0;transform:translate(500%)scaleX(1.2)}}.animate-fadeIn.jsx-d99be3bf461230d4{animation:.6s ease-out fadeIn}.animate-mainIn.jsx-d99be3bf461230d4{animation:.6s ease-out mainIn}.animate-contentFade.jsx-d99be3bf461230d4{animation:.5s ease-out .2s both contentFade}.animate-shimmer.jsx-d99be3bf461230d4{-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#2c5f7c,#7ec8e3 40%,#ff9eb5 60%,#2c5f7c) 0 0/200% 100%;-webkit-background-clip:text;animation:2s linear infinite shimmer}.animate-fillBar.jsx-d99be3bf461230d4{animation:2.5s ease-in-out forwards fillBar}.animate-pageFlipOut.jsx-d99be3bf461230d4{animation:.4s ease-in forwards pageFlipOut}.animate-pageFlipIn.jsx-d99be3bf461230d4{animation:.4s ease-out forwards pageFlipIn}.animate-float1.jsx-d99be3bf461230d4{animation:20s ease-in-out infinite float1}.animate-float2.jsx-d99be3bf461230d4{animation:25s ease-in-out infinite float2}.animate-float3.jsx-d99be3bf461230d4{animation:18s ease-in-out infinite float3}.animate-flow1.jsx-d99be3bf461230d4{animation:8s ease-in-out infinite flow1}.animate-flow2.jsx-d99be3bf461230d4{animation:10s ease-in-out 2s infinite flow2}.animate-flow3.jsx-d99be3bf461230d4{animation:7s ease-in-out 4s infinite flow3}@keyframes spin-slow{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes twinkle{0%,to{opacity:0;transform:scale(.5)}50%{opacity:.6;transform:scale(1.2)}}@keyframes gradient-shift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.animate-spin-slow.jsx-d99be3bf461230d4{animation:20s linear infinite spin-slow}.animate-twinkle.jsx-d99be3bf461230d4{animation:4s ease-in-out infinite twinkle}.animate-gradient-shift.jsx-d99be3bf461230d4{animation:12s infinite gradient-shift}@keyframes jelly{0%{transform:translateY(-2px)scale(1)}30%{transform:translateY(-3px)scale(1.06,.94)}50%{transform:translateY(-1px)scale(.97,1.03)}70%{transform:translateY(0)scale(1.02,.98)}to{transform:translateY(-1px)scale(1)}}.btn-3d.jsx-d99be3bf461230d4{position:relative;box-shadow:0 4px 14px #00000014,0 1px 3px #0000000f;transition:all .25s cubic-bezier(.34,1.56,.64,1)!important}.btn-3d.jsx-d99be3bf461230d4:after{content:"";border-radius:inherit;pointer-events:none;background:linear-gradient(#ffffff40 0%,#0000 60%);position:absolute;inset:0}.btn-3d.jsx-d99be3bf461230d4:hover:not(:disabled){transform:translateY(-2px)scale(1.03);box-shadow:0 10px 30px #7ec8e340,0 4px 10px #0000001a}.btn-3d.jsx-d99be3bf461230d4:active:not(:disabled){transform:translateY(1px)scale(.97);box-shadow:0 2px 8px #0000001a}.btn-3d-white.jsx-d99be3bf461230d4{box-shadow:0 2px 10px #0000000d,0 1px 3px #00000008;transition:all .25s cubic-bezier(.34,1.56,.64,1)!important}.btn-3d-white.jsx-d99be3bf461230d4:hover:not(:disabled){transform:translateY(-2px)scale(1.03);box-shadow:0 8px 25px #00000014}.btn-3d-white.jsx-d99be3bf461230d4:active:not(:disabled){transform:translateY(1px)scale(.97)}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 572,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_page_tsx_0pxmutw._.js.map