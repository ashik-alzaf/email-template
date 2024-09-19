import tick from '/public/tick.png';
import Delete from '/public/delete.png'
const TodoItems = ({text}) => {
    return (
        <div>
             <div className='flex items-center gap-3 my-4'>
            <div className='flex items-center flex-1 cursor-pointer'>
            <img src={tick} alt="loading" className='w-7' />
            <p className='text-slate-700 text-[17px] ml-4'> {text}</p>
            </div>
            <img src={Delete} alt="" className='w-3.5 cursor-pointer' />
          </div>
        </div>
    );
};

export default TodoItems;
