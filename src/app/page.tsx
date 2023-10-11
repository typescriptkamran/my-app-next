import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'


export default function Home() {
  return (
   <main><h1>hello world
    <ProductCard />
   </h1>
   <Link href="/users">Users</Link>
   
   </main>
  )
}
