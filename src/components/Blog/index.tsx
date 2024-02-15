import { CalendarOutline, PersonOutline } from 'react-ionicons'
import postImage from '../../assets/images/01.jpg'
import postImage2 from '../../assets/images/02.jpg'
import postImage3 from '../../assets/images/03.jpg'

const Blog = () => {

const posts = [
    {
    image: postImage,
    author: "Shafiqul Islam Sazu",
    date: "Nov 21, 2023",
    title: "Most visited Countries In Last 3 Years",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem quo beatae aliquid.",
},
    {
    image: postImage2,
    author: "Shafiqul Islam Sazu",
    date: "Nov 21, 2023",
    title: "Most visited Countries In Last 3 Years",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem quo beatae aliquid.",
},
    {
    image: postImage3,
    author: "Shafiqul Islam Sazu",
    date: "Nov 21, 2023",
    title: "Most visited Countries In Last 3 Years",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem quo beatae aliquid.",
},
]

  return (
    <div className='flex w-full pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center'>
        <div className="flex flex-col w-full items-center">
        <span className='font-semibold text-blue-500'>Our Blog</span>
        <span className='font-semibold text-slate-700 text-3xl mt-1'>Our Latest Posts</span>
        <p className='max-w-[400px] text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex w-full items-center justify-center md:flex-row flex-col gap-8">
           {posts.map((post) => {
            return <div key={post.title} className='bg-white p-[10px] rounded-[10px]'
            style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 /5%)"}}>
                <img src={post.image} alt={post.title} className='w-[400px] h-[270px] rounded-[10px]' />
                <div className="flex w-full items-center gap-10 mt-3 px-4">
                    <div className="flex items-center gap-2">
                        <PersonOutline color={"#60a5fa"}/>
                        <span className='text-slate-900 text-[15.5px]'>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarOutline color={"#60a5fa"}/>
                        <span className='text-slate-900 text-[15.5px]'>{post.date}</span>
                    </div>
                </div>
                <div className="px-4 py-5 text-[20px] font-semibold text-slate-800">
                    {post.title}
                </div>
                <div className="px-4 leading-7 text-slate-700 max-w-[400px]">
                    {post.description}
                </div>
                <div className="font-medium text-blue-600 px-4 py-3 cursor-pointer">
                    Read More
                </div>
            </div>
           })} 
        </div>
    </div>
  )
}

export default Blog