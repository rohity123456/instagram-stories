import { getUsersPosts, getUsersStories } from '@/lib/api';
import Stories from './components/stories';
import Posts from './components/posts';
import Controls from './components/controls';

export default async function Home() {
  const response = await Promise.all([getUsersStories(), getUsersPosts()]);
  const users = response[0].data || [];
  const posts = response[1].data || [];

  if (!users || !posts) {
    return <div>Something went wrong</div>;
  }
  return (
    <div className='flex flex-col justify-between w-full mx-auto relative'>
      <section className='border-b-[0.7px] pb-2'>
        <Stories users={users} />
      </section>
      <section className='w-full mb-[60px]'>
        <Posts posts={posts} />
      </section>
      <section className='w-full sticky bottom-0 bg-white dark:bg-black border-t-[0.6px] border-gray-400 dark:border-gray-300'>
        <Controls />
      </section>
    </div>
  );
}
