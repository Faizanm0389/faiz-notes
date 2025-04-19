import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
  } from "@/components/ui/sidebar";
  
  import SidebarGroupContent from "./SidebarGroupContent";
  
  
  export function AppSidebar() {
    const notes = [
      { id: "1", title: "Note 1", content: "A is for applies" },
      { id: "2", title: "Note 2", content: "B is for banana" },
    ];
  
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
  