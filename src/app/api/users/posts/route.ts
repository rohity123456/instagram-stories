import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    success: true,
    data: [
      {
        id: '1',
        username: 'user1',
        profilePicture: 'https://i.pravatar.cc/150?img=1',
        contentUrl:
          'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Beautiful landscape',
        likes: 1021,
        isHavingStories: true
      },
      {
        id: '2',
        username: 'user2',
        profilePicture: 'https://i.pravatar.cc/150?img=1',
        contentUrl:
          'https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Beautiful landscape',
        likes: 542,
        isHavingStories: false
      }
    ]
  });
}
