import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    success: true,
    data: [
      {
        id: '1',
        username: 'joanna',
        profilePicture: 'https://i.pravatar.cc/150?img=1',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '2',
            contentUrl:
              'https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        ]
      },
      {
        id: '2',
        username: 'steve',
        profilePicture: 'https://i.pravatar.cc/150?img=7',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D'
          },
          {
            id: '2',
            contentUrl:
              'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          }
        ]
      },
      {
        id: '3',
        username: 'john',
        profilePicture: 'https://i.pravatar.cc/150?img=8',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://images.unsplash.com/photo-1522879943092-d2b0e4e1da17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          },
          {
            id: '2',
            contentUrl:
              'https://images.unsplash.com/photo-1625123625854-43c9e8da9803?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          },
          {
            id: '2',
            contentUrl:
              'https://images.unsplash.com/photo-1545094729-5e4860fc9452?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          }
        ]
      },
      {
        id: '4',
        username: 'sarah',
        profilePicture: 'https://i.pravatar.cc/150?img=9',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://images.unsplash.com/photo-1634150607959-62c965982999?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          },
          {
            id: '2',
            contentUrl:
              'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          }
        ]
      },
      {
        id: '5',
        username: 'stacie',
        profilePicture: 'https://i.pravatar.cc/150?img=10',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D'
          },
          {
            id: '2',
            contentUrl:
              'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
          }
        ]
      },
      {
        id: '6',
        username: 'mike',
        profilePicture: 'https://i.pravatar.cc/150?img=11',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://images.unsplash.com/photo-1543360458-36fada9295c1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '2',
            contentUrl:
              'https://images.unsplash.com/photo-1597551681492-10c86e481548?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        ]
      },
      {
        id: '7',
        username: 'sophia',
        profilePicture: 'https://i.pravatar.cc/150?img=16',
        stories: [
          {
            id: '1',
            contentUrl:
              'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          },
          {
            id: '2',
            contentUrl:
              'https://images.unsplash.com/photo-1640420806289-e8088a1cfe6d?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
        ]
      }
    ]
  });
}
