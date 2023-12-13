const CONFIG = {
  user: {
    name: "",
    age: "",
    profile: "",
  },
  metadata: {
    title: "Saitama Blog | kişisel Blog",
    description: "kişisel bilgi ve yazı içeren yazı blogu",
  },
  blog: {
    title: "Saitama Blog",
    description: "kişisel bilgi ve yazı içeren yazı blogu",
    todayWords: ["kişisel blog", "teknoloji", "Yapay zeka"],
    calendarTitle: "Bu ayın iş ilanları",
  },
  utterances: {
    enable: true,
    config: {
      repo: "saitamar10/Notion-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
}

module.exports = { CONFIG }
