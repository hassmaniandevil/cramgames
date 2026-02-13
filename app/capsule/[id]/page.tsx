'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { CapsuleViewer, SAMPLE_CAPSULE } from '@/components/capsule/CapsuleViewer';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CapsulePage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();

  // For now, use sample capsule - in production, load by ID
  const capsule = SAMPLE_CAPSULE;

  return (
    <CapsuleViewer
      capsule={capsule}
      onComplete={() => router.back()}
      onClose={() => router.back()}
    />
  );
}
