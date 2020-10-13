import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'


function RoomContainer({context}) {
    const {Loading, sortedRooms, rooms} = context;
    if (Loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms= {rooms}/>
            <RoomList rooms= {sortedRooms}/>
        </>
        )
}

export default withRoomConsumer(RoomContainer)

