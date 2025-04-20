import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";

import SidebarGroupContent from "./SidebarGroupContent";
import { prisma } from "@/db/primsa";


export async function AppSidebar() {
  const notes = await prisma.note.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 mt-2 text-lg">
            Your Notes
          </SidebarGroupLabel>
          <SidebarGroupContent notes={notes} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
