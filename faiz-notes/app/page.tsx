import { prisma } from "@/db/primsa";


type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function HomePage({ searchParams }: Props) {
  const noteIdParam = searchParams.noteId;
  const noteId = Array.isArray(noteIdParam) ? noteIdParam[0] : noteIdParam || "";


  const note = await prisma.note.findUnique({
    where: { id: noteId },
  });

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <div className="flex w-full max-w-4xl justify-end gap-2">
        {/* Optional toolbar buttons */}
        {/* <AskAIButton /> */}
        {/* <NewNoteButton /> */}
      </div>

      <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} />
    </div>
  );
}

export default HomePage;
