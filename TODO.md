# Shared Document Feature Implementation Plan

## Goal
Enable the shared document feature on the study room page, so that members in the study room can upload documents and work on quizzes while on a video call.

## Status: ✅ IMPLEMENTED

### 1. Backend - Room Document Model ✅
- Created `models/roomDocument.js` with schema linking `roomCode`, `materiId`, `sharedBy`, `sharedAt`

### 2. Backend - Socket.IO & API Routes (`index.js`) ✅
- Imported `RoomDocument` model
- Added Socket.IO events:
  - `share-document` → broadcast to room
  - `get-room-documents` / `room-documents-list` → send list of docs for room
  - `start-shared-quiz` → broadcast quiz start to room members
  - `shared-quiz-answer` → broadcast member's answer to room
  - `request-online-users` → emit current online users
- Added REST endpoints:
  - `POST /api/room-document` → share existing materi to room
  - `GET /api/room-documents?room=ROOM_CODE` → get docs for room
  - `POST /api/room-document/upload` → upload doc and auto-share to room

### 3. Frontend - Study Room (`FRONTEND/dashboard.html`) ✅
- Implemented `loadSharedDocsAndMembers()`:
  - Fetch room documents from API
  - Render document list in sidebar
  - Request online members
- Updated `uploadSharedDocument()`:
  - Pass current room code to backend
  - Auto-refresh shared docs list after upload
  - Emit `share-document` socket event
- Added "Upload Dokumen Bersama" button in sidebar
- Added click handler on shared docs to start quiz from that materi
- Enhanced Virtual Quiz for collaboration:
  - Socket listener `shared-quiz-started` → auto-open quiz modal
  - Socket listener `member-answered` → show live progress notification
  - Emit `start-shared-quiz` when a member starts a quiz
  - Emit `shared-quiz-answer` on each answer
- Fixed `renderMembers()` function
- Removed duplicate `copyToClipboard` declarations

### 4. Testing
- Run: `npm run dev` or `node index.js`
- Then open http://localhost:3000/login.html

