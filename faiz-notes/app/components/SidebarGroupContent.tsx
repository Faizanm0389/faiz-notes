"use client";

type Note = {
  id: string;
  text: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};


type Props = {
  notes: Note[];
};

function SidebarGroupContent({ notes }: Props) {
  console.log(notes)
  return <div>My notes</div>;
}

export default SidebarGroupContent;
