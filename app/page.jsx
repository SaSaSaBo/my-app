import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href='/about'>About Us</Link>
      <br/>
      <Link href='/docs/post1'>Post_1</Link>
      <br/>
      <Link href='/docs/post1/post2'>Post_2</Link>
      <br/>
      <Link
        target='_blank'
        className='test'
        href={{
          pathname: '/about',
          query: {
            name: 'sasa',
            surname: 'staallain',
            age: 20
          },
        }}
      >
        About Us wth Object
      </Link> 
    </div>
  );
}
