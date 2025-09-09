import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  TrendingUp,
  Award,
  ClipboardList,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import schoolHero from "@/assets/school-hero.jpg";

const stats = [
  {
    title: "Total Students",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Active Teachers",
    value: "56",
    change: "+3%",
    icon: GraduationCap,
    color: "text-green-600"
  },
  {
    title: "Total Courses",
    value: "24",
    change: "+2",
    icon: BookOpen,
    color: "text-purple-600"
  },
  {
    title: "Attendance Rate",
    value: "94.5%",
    change: "+2.1%",
    icon: ClipboardList,
    color: "text-orange-600"
  }
];

const recentActivities = [
  { action: "New student enrolled", name: "Sarah Johnson", time: "2 hours ago", type: "enrollment" },
  { action: "Grade submitted", name: "Math - Class 10A", time: "3 hours ago", type: "grade" },
  { action: "Fee payment received", name: "John Smith", time: "5 hours ago", type: "payment" },
  { action: "Attendance marked", name: "English - Class 9B", time: "1 day ago", type: "attendance" },
];

const upcomingEvents = [
  { title: "Parent-Teacher Meeting", date: "Tomorrow", time: "2:00 PM", type: "meeting" },
  { title: "Science Fair", date: "March 15", time: "9:00 AM", type: "event" },
  { title: "Mid-term Exams Begin", date: "March 20", time: "All Day", type: "exam" },
  { title: "Spring Break", date: "April 1-7", time: "All Week", type: "holiday" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary-glow to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome to EduManage Pro
              </h1>
              <p className="text-lg text-white/90 mb-6 max-w-md">
                Your comprehensive school management system for streamlined administration and enhanced learning experiences.
              </p>
              <div className="flex gap-4">
                <Button variant="hero" size="lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  View Schedule
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Award className="h-5 w-5 mr-2" />
                  Reports
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={schoolHero} 
                alt="School Management" 
                className="w-64 h-40 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                  <span className="text-green-600">{stat.change}</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'enrollment' ? 'bg-blue-500' :
                    activity.type === 'grade' ? 'bg-green-500' :
                    activity.type === 'payment' ? 'bg-yellow-500' :
                    'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.name}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    event.type === 'meeting' ? 'bg-blue-100 text-blue-600' :
                    event.type === 'event' ? 'bg-green-100 text-green-600' :
                    event.type === 'exam' ? 'bg-red-100 text-red-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="h-6 w-6" />
              Add Student
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <GraduationCap className="h-6 w-6" />
              Add Teacher
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BookOpen className="h-6 w-6" />
              Create Course
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <DollarSign className="h-6 w-6" />
              Record Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}