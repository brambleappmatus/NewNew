import { DashboardContent } from '@/components/dashboard/dashboard-content';

export default function Home() {
  return (
    <main className="flex-1 transition-all duration-300">
      <div className="mx-auto max-w-[2000px] space-y-8 p-8 lg:pl-[calc(64px+2rem)]">
        <DashboardContent />
      </div>
    </main>
  );
}