import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ columnId: string }>;
}) {
  const { columnId } = await params;

  return {
    title: `Column-id: ${columnId}`,
  };
}

export default async function CreateTodoElementPage({
  params,
}: {
  params: Promise<{ columnId: string }>;
}) {
  const { columnId } = await params;

  if (!columnId) {
    notFound();
  }

  return (
    <div>
      <h1>{columnId}</h1>
    </div>
  );
}
