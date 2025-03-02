import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const data = [
  { skill: "React", level: 90 },
  { skill: "JavaScript", level: 85 },
  { skill: "Python", level: 80 },
  { skill: "HTML/CSS", level: 95 },
  { skill: "Node.js", level: 75 },
];

const SkillChart = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h2>My Skills</h2>
      <RadarChart outerRadius={90} width={400} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis />
        <Radar name="Skill Level" dataKey="level" stroke="#ff6f61" fill="#ff6f61" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default SkillChart;
