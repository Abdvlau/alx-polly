'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { use } from 'react'

interface PollVotePageProps {
  params: Promise<{
    id: string
  }>
}

export default function PollVotePage({ params }: PollVotePageProps) {
  const { id } = use(params)
  
  // Mock poll data - replace with actual data fetching
  const poll = {
    id: id,
    title: "What's your favorite programming language?",
    description: "Help us understand developer preferences in 2024",
    options: [
      { id: "1", text: "JavaScript", votes: 45 },
      { id: "2", text: "Python", votes: 32 },
      { id: "3", text: "TypeScript", votes: 28 },
      { id: "4", text: "Go", votes: 15 },
    ]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement vote submission
    alert('Vote submitted! (This is a placeholder)')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <Link href="/polls" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Polls
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{poll.title}</CardTitle>
          {poll.description && (
            <CardDescription className="text-base">{poll.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-4 block">Choose your option:</Label>
              <div className="space-y-3">
                {poll.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                    <input 
                      type="radio" 
                      name="vote" 
                      value={option.id} 
                      id={option.id}
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary" 
                    />
                    <Label 
                      htmlFor={option.id} 
                      className="flex-1 cursor-pointer text-sm font-medium"
                    >
                      {option.text}
                    </Label>
                    <span className="text-xs text-muted-foreground">
                      {option.votes} votes
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit Vote
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href={`/polls/${id}/results`}>
                  View Results
                </Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}