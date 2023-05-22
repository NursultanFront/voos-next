import Image from 'next/image';
import Row from '../ui/grid/Row';
import Column from '../ui/grid/Column';
import Button from '../ui/Button';

import { Posts } from '@/api/posts/types';
import { getStrapiMedia } from '@/libs/media';
import Link from 'next/link';

interface Props {
  posts: Posts[];
}

const BlogPost = (props: Props) => {
  return (
    <>
      <Row className="gap-[30px] mb-10">
        {props.posts.map((item) => {
          const imageUrl = getStrapiMedia(
            item.attributes.images.data.attributes.url
          );
          return (
            <Column size={4} key={item.id}>
              <Link href="/">
                <Image src={imageUrl} alt="blog" width={390} height={255} />
                <div>
                  <div className="flex justify-between mt-5 mb-4">
                    <div className="py-1 px-3 rounded-[6px] text-white bg-black">
                      {item.attributes.type}
                    </div>
                    <div className="text-[13px] text-[#5C5C5C]">
                      {item.attributes.createdAt}
                    </div>
                  </div>
                  <h3>{item.attributes.title}</h3>
                </div>
              </Link>
            </Column>
          );
        })}
      </Row>
      <div className="flex justify-center">
        <Button
          bgColor="#ffffff"
          color="#000000"
          href="/some"
          className="border-[1px] border-black"
        >
          See all
        </Button>
      </div>
    </>
  );
};

export default BlogPost;
