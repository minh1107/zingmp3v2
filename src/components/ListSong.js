import moment from 'moment';
import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import * as actions from '../store/action'
import icons from '../utils/icons';
const {FiMusic}  = icons
function ListSong({index, songData}) {
    const setInfoSong = () => {
        dispatch(actions.setCurrentSongId(songData?.encodeId))
        dispatch(actions.setDurationSong(songData?.duration))
        dispatch(actions.playAlbum(true))
    }   
    const dispatch = useDispatch()
  return (
    <div onClick={setInfoSong}
     className='flex justify-between items-center border-t hover:bg-[#2F2532]  border-gray-800'>
        <div className='flex flex-row gap-3 flex-1 pt-2 pb-2'>
            {/* <input type='checkbox' className='rounded-md checked:bg-red-100 ' /> */}
            <div className='rounded-md checked:bg-red-100 flex items-center'><FiMusic size={14} /></div>

            <img src={songData?.thumbnail} alt= 'thumbnailM' className='rounded-md w-[40px] h-[40px]'/>
            <span className='flex flex-col'>
                <span className='text-[#ffffff] text-sm font-medium '>{songData?.title.length > 30 ? `${songData?.title.slice(0,70)}...` : songData?.title}</span>
                <span className='text-gray-500'>{songData?.artistsNames}</span>
            </span>
        </div>
        <div className='flex-1 flex items-center justify-start'>
            {songData?.alias}
        </div>
        <div className='flex-1 flex items-center justify-end' >
            {moment.unix(songData?.duration).format('mm:ss')}
        </div>
    </div>
  )
}

export default memo(ListSong)