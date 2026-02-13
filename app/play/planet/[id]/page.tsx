'use client';

import { use } from 'react';
import { PlanetView } from '@/components/map/PlanetView';
import { getSubjectTopics } from '@/lib/data/contentLoader';
import { useUserStore } from '@/lib/stores/userStore';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PlanetPage({ params }: PageProps) {
  const { id: subjectId } = use(params);
  const { profile } = useUserStore();

  // Get topics for this subject and year group
  const yearGroup = profile?.yearGroup || 10;
  const topics = getSubjectTopics(subjectId, yearGroup);

  return <PlanetView subjectId={subjectId} topics={topics} />;
}
