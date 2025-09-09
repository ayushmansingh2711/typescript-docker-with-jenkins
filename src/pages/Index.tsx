import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardOverview } from "@/components/DashboardOverview";
import { StudentsManagement } from "@/components/StudentsManagement";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "students":
        return <StudentsManagement />;
      case "teachers":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Teachers Management</h2>
            <p className="text-muted-foreground">Teacher management features coming soon!</p>
          </div>
        );
      case "courses":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Course Management</h2>
            <p className="text-muted-foreground">Course management features coming soon!</p>
          </div>
        );
      case "attendance":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
            <p className="text-muted-foreground">Attendance tracking features coming soon!</p>
          </div>
        );
      case "schedule":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Schedule Management</h2>
            <p className="text-muted-foreground">Schedule management features coming soon!</p>
          </div>
        );
      case "grades":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Grade Management</h2>
            <p className="text-muted-foreground">Grade management features coming soon!</p>
          </div>
        );
      case "fees":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Fee Management</h2>
            <p className="text-muted-foreground">Fee management features coming soon!</p>
          </div>
        );
      case "messages":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Communication Center</h2>
            <p className="text-muted-foreground">Messaging features coming soon!</p>
          </div>
        );
      case "settings":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">System Settings</h2>
            <p className="text-muted-foreground">Settings panel coming soon!</p>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Index;
