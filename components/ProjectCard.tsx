'use client';

import { Card, CardHeader, CardBody, Space, Tag } from '@apron-design/react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: Array<{ label: string; color: string }>;
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Card 
      className={`shadow-lg transition-transform hover:scale-105 ${link ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <Space>
          {tags.map((tag, index) => (
            <Tag key={index} color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </Space>
      </CardBody>
    </Card>
  );
}

