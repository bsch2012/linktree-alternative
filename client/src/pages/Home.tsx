import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Heart, MessageCircle, Share2 } from "lucide-react";

/**
 * Instagram Insights Dashboard
 * Design: Modern Data Minimalism
 * - Clean, spacious layouts with generous whitespace
 * - Monochromatic base with Instagram gradient accents
 * - Typography-driven hierarchy using Poppins and Inter
 * - Smooth animations and micro-interactions
 */

// Sample data from weekly report
const accountData = {
  username: "@bsch.vault",
  name: "bsch.vault | frame/cut",
  followers: 380,
  following: 656,
  posts: 89,
};

const weeklyMetrics = {
  totalPosts: 5,
  totalLikes: 81,
  totalComments: 18,
  totalShares: 5,
  totalSaves: 9,
  totalReach: 1845,
  totalViews: 2562,
  avgEngagementRate: 6.50,
};

const postData = [
  { id: "Post 1", likes: 3, comments: 1, shares: 0, saves: 0, reach: 70, views: 116 },
  { id: "Post 2", likes: 19, comments: 4, shares: 2, saves: 4, reach: 369, views: 560 },
  { id: "Post 3", likes: 7, comments: 0, shares: 0, saves: 1, reach: 120, views: 188 },
  { id: "Post 4", likes: 25, comments: 9, shares: 2, saves: 3, reach: 860, views: 1119 },
  { id: "Post 5", likes: 27, comments: 4, shares: 1, saves: 1, reach: 426, views: 579 },
];

const engagementData = [
  { name: "Likes", value: 81, fill: "#E1306C" },
  { name: "Comments", value: 18, fill: "#F77737" },
  { name: "Shares", value: 5, fill: "#FD1D1D" },
  { name: "Saves", value: 9, fill: "#E1306C" },
];

const MetricCard = ({ icon: Icon, label, value, unit = "" }: { icon: React.ComponentType<any>; label: string; value: number | string; unit?: string }) => (
  <Card className="hover:shadow-lg transition-all duration-300 ease-out border-0 bg-white">
    <CardContent className="pt-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">{label}</p>
          <p className="text-3xl font-bold text-foreground">
            {typeof value === "number" ? value.toLocaleString() : value}
            <span className="text-lg text-muted-foreground ml-1">{unit}</span>
          </p>
        </div>
        <div className="p-3 bg-accent/10 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with hero background */}
      <div 
        className="relative bg-cover bg-center py-16 md:py-24 border-b border-border"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663536174718/T3Wgb3wwsQWzn2fzxAVa7j/hero-gradient-1-GHVeQYv844SSVwLKPEJzxo.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Instagram Insights Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your growth, analyze engagement, and optimize your content strategy
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container py-12 md:py-16">
        {/* Account Overview Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Account Overview</h2>
            <p className="text-muted-foreground">Current account statistics and profile information</p>
          </div>
          
          <Card className="border-0 bg-white shadow-sm">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Username</p>
                  <p className="text-xl font-semibold text-foreground">{accountData.username}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Name</p>
                  <p className="text-lg font-semibold text-foreground">{accountData.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Followers</p>
                  <p className="text-2xl font-bold text-accent">{accountData.followers.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Following</p>
                  <p className="text-2xl font-bold text-foreground">{accountData.following.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Posts</p>
                  <p className="text-2xl font-bold text-foreground">{accountData.posts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Weekly Metrics Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Weekly Performance</h2>
            <p className="text-muted-foreground">Engagement metrics from the past 7 days</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard icon={Heart} label="Total Likes" value={weeklyMetrics.totalLikes} />
            <MetricCard icon={MessageCircle} label="Total Comments" value={weeklyMetrics.totalComments} />
            <MetricCard icon={Share2} label="Total Shares" value={weeklyMetrics.totalShares} />
            <MetricCard icon={TrendingUp} label="Total Reach" value={weeklyMetrics.totalReach} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Key Metrics</CardTitle>
                <CardDescription>Summary of weekly engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-sm font-medium text-muted-foreground">Total Views</span>
                    <span className="text-lg font-bold text-foreground">{weeklyMetrics.totalViews.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-sm font-medium text-muted-foreground">Total Saves</span>
                    <span className="text-lg font-bold text-foreground">{weeklyMetrics.totalSaves}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-sm font-medium text-muted-foreground">Posts Published</span>
                    <span className="text-lg font-bold text-foreground">{weeklyMetrics.totalPosts}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Avg Engagement Rate</span>
                    <span className="text-lg font-bold text-accent">{weeklyMetrics.avgEngagementRate.toFixed(2)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Engagement Breakdown</CardTitle>
                <CardDescription>Distribution of interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Post Performance Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Post Performance</h2>
            <p className="text-muted-foreground">Individual post metrics and engagement</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Engagement by Post</CardTitle>
                <CardDescription>Likes, comments, and shares per post</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={postData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Bar dataKey="likes" fill="#E1306C" />
                    <Bar dataKey="comments" fill="#F77737" />
                    <Bar dataKey="shares" fill="#FD1D1D" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Reach vs Views</CardTitle>
                <CardDescription>Content visibility across posts</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={postData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="reach" stroke="#E1306C" strokeWidth={2} dot={{ fill: '#E1306C' }} />
                    <Line type="monotone" dataKey="views" stroke="#FD1D1D" strokeWidth={2} dot={{ fill: '#FD1D1D' }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Post Table */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Detailed Post Analytics</h2>
            <p className="text-muted-foreground">Complete breakdown of each post's performance</p>
          </div>

          <Card className="border-0 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Post</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Likes</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Comments</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Shares</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Saves</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Reach</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {postData.map((post, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{post.id}</td>
                      <td className="px-6 py-4 text-sm text-foreground font-semibold">{post.likes}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{post.comments}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{post.shares}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{post.saves}</td>
                      <td className="px-6 py-4 text-sm text-foreground font-semibold">{post.reach}</td>
                      <td className="px-6 py-4 text-sm text-foreground font-semibold">{post.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 mt-20">
        <div className="container py-8">
          <p className="text-center text-sm text-muted-foreground">
            Instagram Insights Dashboard • Data updated weekly • Powered by Instagram MCP Connector
          </p>
        </div>
      </footer>
    </div>
  );
}
