import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Vote, Users, BarChart } from 'lucide-react'

export default function PollsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Polls Dashboard</h1>
          <p className="text-muted-foreground">Create, manage, and view your polls</p>
        </div>
        <Button asChild>
          <Link href="/polls/new">
            <Plus className="w-4 h-4 mr-2" />
            Create Poll
          </Link>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Polls</CardTitle>
            <Vote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+15% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Polls</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Currently accepting votes</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Polls */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Polls</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample poll cards - will be replaced with real data */}
          <Card>
            <CardHeader>
              <CardTitle className="line-clamp-1">What's your favorite programming language?</CardTitle>
              <CardDescription>Created 2 hours ago • 45 votes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/polls/sample-1">View Results</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/polls/sample-1/vote">Vote Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="line-clamp-1">Best time for team meetings?</CardTitle>
              <CardDescription>Created 1 day ago • 23 votes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/polls/sample-2">View Results</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/polls/sample-2/vote">Vote Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader className="text-center">
              <CardTitle className="text-muted-foreground">Create Your First Poll</CardTitle>
              <CardDescription>Get started by creating a new poll</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild>
                <Link href="/polls/new">
                  <Plus className="w-4 h-4 mr-2" />
                  New Poll
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}