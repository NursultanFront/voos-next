import Column from '@/components/ui/grid/Column';
import Row from '@/components/ui/grid/Row';
import Image from 'next/image';
import Link from 'next/link';

import FacebookIcon from '@/assets/social/facebook.svg';
import InstagramIcon from '@/assets/social/inst.svg';
import TwitterIcon from '@/assets/social/twitter.svg';
import YoutubeIcon from '@/assets/social/youtube.svg';

import BlogPost from '@/components/blogPost/BlogPost';
import { api } from '@/api';

async function getPosts() {
  const res = await api.posts.getPosts({
    populate: `*`,
    'filters[type][$eq]': 'News',
    sort: 'createdAt%3Adesc',
  });

  return res.data.slice(0, 3);
}

const icons = [
  {
    id: 1,
    icon: InstagramIcon,
    text: 'Instagram',
    way: '/instagram',
  },
  {
    id: 2,
    icon: TwitterIcon,
    text: 'Twitter',
    way: '/instagram',
  },
  {
    id: 3,
    icon: FacebookIcon,
    text: 'Facebook',
    way: '/instagram',
  },
  {
    id: 4,
    icon: YoutubeIcon,
    text: 'Youtube',
    way: '/instagram',
  },
];

export default async function Home() {
  // const posts = await getPosts();

  return (
    <>
      <div className="absolute -z-10 right-0">
        <Image
          src="/home/images/main.png"
          alt="Main image"
          width={916}
          height={610}
          className="h-full"
        />
      </div>
      <div className="container">
        <div className="flex flex-col items-start py-40">
          <div className="mb-3 text-sm">VOOS</div>
          <h2 className="mb-6 text-5xl">Buds, Joints, Vapes, Cartridges</h2>
          <div className="mb-7 text-sm">Delivery Available in&nbsp;EU</div>
          <Link href="/" className="py-3 px-4 border-2 border-black rounded-lg">
            <span>Order now</span>
          </Link>
        </div>
      </div>
      <section className="py-12">
        <div className="container">
          <div>
            <h2 className="mb-5 text-[38px] font-bold">Our products</h2>
            <h3 className="mb-8">
              Find your favorite goods voluptatem deleniti placeat deleniti
              deleniti omnis
            </h3>
          </div>

          <Row className="gap-3">
            <Column size={6}>
              <div className="relative flex flex-col justify-center p-11 h-[384px] bg-[#F8F8F8] rounded-lg">
                <div className="absolute right-0 bottom-0 -z-0">
                  <Image
                    src="/product/buds.png"
                    alt="buds"
                    width={398}
                    height={345}
                  />
                </div>
                <div className="w-[310px]">
                  <h4 className="mb-[30px] text-[32px] font-bold">
                    Buds for Relax
                  </h4>
                  <p className="mb-[20px]">Treat your mental health right</p>
                  <Link
                    href="/product/1"
                    className="flex items-center text-[#0073C7]"
                  >
                    <span>Learn more</span>
                    <span>{`>`}</span>
                  </Link>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex gap-x-7 pt-4 px-9 bg-black rounded-[20px] text-white">
            <Image
              src="/home/images/phone.png"
              alt="Iphone"
              width={467}
              height={433}
            ></Image>
            <div className="flex flex-col justify-center">
              <h3 className="mb-3 text-[40px]">Follow us</h3>
              <p className="mb-7 text-base opacity-80">
                To keep up with the latest news and promotions
              </p>
              <ul className="flex gap-x-2">
                {icons.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.way}
                        className="flex gap-x-2 items-center py-[10px] px-[15px] h-full border-[1.5px] rounded-lg opacity-70 hover:opacity-100"
                      >
                        <>
                          <Image src={item.icon} alt="icons"></Image>
                          <span>{item.text}</span>
                        </>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <h2 className="mb-5 text-[38px] font-bold">Our blog</h2>
          <p className="mb-8 text-[15px]">
            Be aware of all the latest news and posts
          </p>
          {/* <BlogPost posts={posts}></BlogPost> */}
        </div>
      </section>
    </>
  );
}
