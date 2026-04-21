import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = await params;

  return {
    title: `Note-id: ${noteId}`,
  };
}

export default async function NoteInfoPage({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = await params;

  if (!noteId) {
    notFound();
  }

  return (
    <div>
      <h1>{noteId}</h1>
    </div>
  );
}
