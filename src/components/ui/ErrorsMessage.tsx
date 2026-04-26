"use client";

function ErrorsMessage({ message }: { message?: string }) {
  return <p className="text-sm text-red-500 w-full">{message}</p>;
}

export { ErrorsMessage };
