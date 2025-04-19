"use client";

type Note = {
    id: string;
    title: string;
    content: string;
  };

type Props = {
  notes: Note[];
};

function SidebarGroupContent({ notes }: Props) {
  return <div>SidebarGroupContent</div>;
}

export default SidebarGroupContent;
