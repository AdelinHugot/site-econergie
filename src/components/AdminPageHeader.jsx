import React from 'react';

export default function AdminPageHeader({
  title,
  description,
  action,
  actionIcon: ActionIcon,
  actionLabel
}) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between p-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="mt-1 text-gray-600">
            {description}
          </p>
        </div>

        {action && (
          <button
            onClick={action}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-lg
              bg-[#FF6B00] text-white font-medium
              hover:bg-[#E55A00] transition-all duration-200
              shadow-sm hover:shadow-lg
              flex-shrink-0
            `}
          >
            {ActionIcon && <ActionIcon className="w-5 h-5" />}
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
