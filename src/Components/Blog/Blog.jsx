import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmarksBtn, handleMarkasReadbtn }) => {
    // console.log(blog)
    const { id,title, cover, author, author_img, reading_time, posted_date, hashtags } = blog ;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='w-full mb-8' src={cover} alt={`this the cover of ${title}`} />

            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className=' w-14' src={author_img} alt="" />
                    <div className=' ml-6'>
                        <h2 className=' text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleBookmarksBtn(blog)}
                        className=' ml-2 text-red-600 text-2xl '>

                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> #{hashtag}</span>)
                }
            </p>
            <button
                onClick={() => handleMarkasReadbtn(reading_time, id)}
                className=' text-blue-500 underline '>
                Mark As Raed
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksBtn: PropTypes.func.isRequired,
    handleMarkasReadbtn: PropTypes.func
}

export default Blog;