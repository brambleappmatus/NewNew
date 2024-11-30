'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Truck,
  MessageSquare,
  FileBarChart2,
  Settings,
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navigation = [
  { name: 'Dashboard', href: '/', Icon: LayoutDashboard },
  { name: 'Input Data', href: '/input', Icon: ClipboardList },
  { name: 'Couriers', href: '/couriers', Icon: Users },
  { name: 'Deliveries', href: '/deliveries', Icon: Truck },
  { name: 'Feedback', href: '/feedback', Icon: MessageSquare },
  { name: 'Reports', href: '/reports', Icon: FileBarChart2 },
  { name: 'Settings', href: '/settings', Icon: Settings },
];

interface MainNavProps {
  isCollapsed: boolean;
}

export function MainNav({ isCollapsed }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 p-4">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        
        if (isCollapsed) {
          return (
            <Tooltip key={item.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-md',
                    isActive ? 'bg-accent' : 'hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <item.Icon className="h-4 w-4" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {item.name}
              </TooltipContent>
            </Tooltip>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
              isActive ? 'bg-accent' : 'transparent'
            )}
          >
            <item.Icon className="h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}