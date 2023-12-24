import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Go",
      icon: "vscode-icons:file-type-go-gopher",
      prefix: "go/",
      link: "go/",
      children: "structure",
    },
    {
      text: "Javascript",
      icon: "devicon:nodejs",
      prefix: "javascript/",
      link: "javascript/",
      children: "structure",
    },
    {
      text: "Redis",
      icon: "logos:redis",
      prefix: "redis/",
      link: "redis/",
      children: "structure",
    },
    {
      text: "Mysql",
      icon: "logos:mysql",
      prefix: "mysql/",
      link: "mysql/",
      children: "structure",
    },
  ],
});
