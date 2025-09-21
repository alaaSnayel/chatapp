package com.alaa.chat.chat_app_backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.alaa.chat.chat_app_backend.entities.Room;

public interface RoomRepository extends MongoRepository<Room, String>{

  // Get Room using RoomId
  Room findByRoomId(String roomId);
}
