'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Story from './components/story';
import styles from './index.module.scss';

export default function Stories({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className={styles.stories}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        loop={false}
        slidesPerView='auto'
        slidesPerGroup={6}
        navigation={true}
        pagination={{ clickable: false }}
      >
        {users.map((user) => {
          const { id, username, profilePicture } = user;
          return (
            <SwiperSlide key={id} onClick={() => setSelectedUser(user)}>
              <Story username={username} avatar={profilePicture} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
