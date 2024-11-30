'use client';

import { useState } from 'react';
import { MainNav } from './main-nav';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={cn(
        'fixed inset-y-0 left-0 z-50 flex border-r bg-background/80 backdrop-blur-sm transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-72'
      )}
    >
      <div className="flex w-full flex-col">
        <div className="flex h-16 items-center border-b px-4">
          <h2 className={cn(
            "text-lg font-semibold transition-all duration-300",
            isCollapsed && "opacity-0"
          )}>
            Courier Tool
          </h2>
        </div>
        <div className="flex-1 overflow-auto">
          <MainNav isCollapsed={isCollapsed} />
        </div>
        <Button
          variant="ghost"
          className="absolute -right-4 top-20 h-8 w-8 rounded-full border bg-background p-0"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          </span>
        </Button>
      </div>
    </div>
  );
}