import Image from 'next/image';
import React from 'react';

const images = [
  "https://utfs.io/f/007530da-b0fd-4af0-8572-08ddd8a1d5f4-1751rr.jpg",
  "https://utfs.io/f/b10df1f2-c35a-40e9-b2a3-9f627e299beb-qdtonl.jpg",
  "https://utfs.io/f/76de6b1f-4e4e-4208-9186-f3fe0642e8fd-5k1vd3.jpg",
  "https://utfs.io/f/67e532dc-6248-4511-b0e6-5a459b74ec2a-1hfwj5.jpg",
  "https://utfs.io/f/ae492546-1bcf-4b92-ad86-91a38cab38db-vizwx6.jpg",
  "https://utfs.io/f/1de6a12b-f2db-4a69-8750-cf8183e2a424-f1lide.png",
  "https://utfs.io/f/c8db81b5-befd-4913-8603-758fa19d222a-1zykk.jpg",
];

const Page = () => {
  console.log(images);
  return (
    <div className='flex flex-wrap gap-5'>

      {images.map((image) => {
        return (
          <div key={image} className='w-80 h-80 '>
          
            <Image width={320} height={320} src={image} alt='image' />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
