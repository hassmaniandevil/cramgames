import dynamic from 'next/dynamic';

// Dynamically import the client component with SSR disabled
// This prevents the "e[o] is not a function" error during static generation
const HomeClient = dynamic(
  () => import('./HomeClient').then(mod => mod.HomeClient),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  return <HomeClient />;
}
