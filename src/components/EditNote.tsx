import { EditNoteProps, NoteData } from "../types";
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data: NoteData) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
