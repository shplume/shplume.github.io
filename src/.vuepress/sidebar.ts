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
      text: "MySQL",
      icon: "logos:MySQL",
      prefix: "MySQL/",
      link: "MySQL/",
      children: "structure",
    },
  ],
});
