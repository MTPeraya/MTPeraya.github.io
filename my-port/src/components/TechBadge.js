import React from "react";
import "./TechBadge.css";

const techColorMap = {
  python: "#3776ab",
  java: "#007396",
  react: "#61dafb",
  node: "#339933",
  docker: "#2496ed",
  aws: "#ff9900",
  typescript: "#3178c6",
  javascript: "#f7df1e",
  postgresql: "#336791",
  mongodb: "#13aa52",
  git: "#f1502f",
  linux: "#fcc624",
  webpack: "#8dd6f9",
  graphql: "#e10098",
  restapi: "#50c878",
};

export const TechBadge = ({ name, variant = "default" }) => {
  const bgColor = techColorMap[name.toLowerCase()] || "#6c757d";
  const style =
    variant === "solid" ? { backgroundColor: bgColor, color: "white" } : { borderColor: bgColor, color: bgColor };

  return (
    <span className={`tech-badge tech-badge-${variant}`} style={style}>
      {name}
    </span>
  );
};
