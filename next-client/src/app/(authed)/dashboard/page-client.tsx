// app/(authed)/dashboard/page-client.tsx
"use client";

import { useUser } from "@/components/pocketbase-provider";
import { Shield } from "lucide-react";

export function DashboardClient() {
  const user = useUser();

  return (
    <>
      <h2 className="card-title text-base-content">
        Client Information
        <span className="badge badge-secondary">Live</span>
      </h2>
      <div className="space-y-3">
        <p className="text-base-content/80">
          <span className="font-medium">ID:</span> {user?.id}
        </p>
        <p className="text-base-content/80">
          <span className="font-medium">Email:</span> {user?.email}
        </p>
        <div className="flex gap-2">
          <span className="badge badge-ghost">Client Side</span>
          <span className="badge badge-ghost">Real-time Updates</span>
        </div>
      </div>

      {/* Security Status */}
      <div className="flex items-center gap-2 mt-4 p-3 bg-base-200 rounded-lg">
        <Shield className="text-success w-5 h-5" />
        <span className="text-sm text-base-content/80">
          Your connection is secure and up-to-date
        </span>
      </div>
    </>
  );
}