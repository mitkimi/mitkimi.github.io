'use client';

import { Card, CardHeader, CardBody, Space, Tag } from '@apron-design/react';

interface SkillCardProps {
  title: string;
  skills: Array<{ name: string; color: string }>;
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <Space size="small" wrap>
          {skills.map((skill, index) => (
            <Tag key={index} color={skill.color}>
              {skill.name}
            </Tag>
          ))}
        </Space>
      </CardBody>
    </Card>
  );
}

