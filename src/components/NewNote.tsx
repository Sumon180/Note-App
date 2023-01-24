import { NewNoteProps } from "../types";
import { NoteForm } from "./NoteForm";

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4 px-2 py-1" style={{ backgroundColor: "gray" }}>
        New Note
      </h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
