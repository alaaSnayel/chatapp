package com.alaa.chat.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alaa.chat.chat_app_backend.entities.Room;
import com.alaa.chat.chat_app_backend.repositories.RoomRepository;

@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {
  private RoomRepository roomRepository;

  public RoomController(RoomRepository roomRepository) {
    this.roomRepository = roomRepository;
  }

  // Create room
  @PostMapping
  public ResponseEntity<?> createRoom(@RequestBody String roomId) {

    // Room already exists
    if(roomRepository.findByRoomId(roomId) != null){
      return ResponseEntity.badRequest().body("Room already exists!");
    }

    // create new room
    Room room = new Room();
    room.setRoomId(roomId);
    Room savedRoom = roomRepository.save(room);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedRoom);
  }

  // Get room: join
  @GetMapping("/{roomId}")
  public ResponseEntity<?> joinRoom(@PathVariable String roomId) {
    Room room = roomRepository.findByRoomId(roomId);

    if (room == null) {
      return ResponseEntity.badRequest().body("Room not found!");
    }

    return ResponseEntity.ok(room);
  }

  // Get messages of room
}
