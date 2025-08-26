import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Calendar, Users, Share, QrCode } from 'lucide-react'
import { use } from 'react'

interface PollViewPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PollViewPage({ params }: PollViewPageProps) {
  const { id } = use(params)
  
  // Mock poll data - replace with actual data fetching
  const poll = {
    id: id,
    title: "What's your favorite programming language?",
    description: "Help us understand developer preferences in 2024",
    createdAt: "2024-01-15",
    totalVotes: 120,
    status: "active",
    options: [
      { id: "1", text: "JavaScript", votes: 45 },
      { id: "2", text: "Python", votes: 32 },
      { id: "3", text: "TypeScript", votes: 28 },
      { id: "4", text: "Go", votes: 15 },
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/polls" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Polls
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Poll Info */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{poll.title}</CardTitle>
                  {poll.description && (
                    <CardDescription className="text-base mb-4">{poll.description}</CardDescription>
                  )}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Created {poll.createdAt}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {poll.totalVotes} total votes
                    </div>
                  </div>
                </div>
                <Badge variant={poll.status === 'active' ? 'default' : 'secondary'}>
                  {poll.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Poll Options:</h3>
                <div className="space-y-2">
                  {poll.options.map((option) => (
                    <div key={option.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">{option.text}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{option.votes} votes</span>
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(option.votes / poll.totalVotes) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full">
                <Link href={`/polls/${id}/vote`}>
                  Vote Now
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link href={`/polls/${id}/results`}>
                  View Results
                </Link>
              </Button>

              <Button variant="outline" className="w-full">
                <Share className="w-4 h-4 mr-2" />
                Share Poll
              </Button>

              <Button variant="outline" className="w-full">
                <QrCode className="w-4 h-4 mr-2" />
                Generate QR Code
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Poll Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Total Votes:</span>
                <span className="font-medium">{poll.totalVotes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Options:</span>
                <span className="font-medium">{poll.options.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Status:</span>
                <Badge variant="outline" className="text-xs">
                  {poll.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}