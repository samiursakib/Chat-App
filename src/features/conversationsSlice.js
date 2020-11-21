import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  {
    userId: 1324140,
    friends: [
      {
        friendId: 1324141,
        friendName: 'Samiul Kafi Alfi',
        isOnline: true,
        gender: 'male',
        nickName: null,
        age: 12,
        conversation: [
          {
            messageId: nanoid(),
            message: `Shut the fuck off!`,
            time: new Date(),
            fromMe: false
          }
        ]
      },
      {
        friendId: 2324140,
        friendName: 'Nusrat Haque Maisha',
        isOnline: false,
        gender: 'female',
        nickName: null,
        age: 20,
        conversation: [
          {
            messageId: nanoid(),
            message: `Hey how you 're doing?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Yeap I'm great, & 'bout you?`,
            time: new Date(),
            fromMe: true
          },
          {
            messageId: nanoid(),
            message: `As always you see babe!`,
            time: new Date(),
            fromMe: false
          }
        ]
      },
      {
        friendId: 1324143,
        friendName: 'Monjurul Islam Shakil',
        isOnline: true,
        gender: 'male',
        nickName: null,
        age: 22,
        conversation: [
          {
            messageId: nanoid(),
            message: `Did you do it sakib?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Obviously, that's done two days ago!`,
            time: new Date(),
            fromMe: true
          },
          {
            messageId: nanoid(),
            message: `Oh thanks man! Here take a cigarette.`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Sure`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1324144,
        friendName: 'Saima Sultana Shammi',
        isOnline: true,
        gender: 'female',
        nickName: null,
        age: 25,
        conversation: [
          {
            messageId: nanoid(),
            message: `When will you come broh?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `I see, I'll inform you Apu.`,
            time: new Date(),
            fromMe: true
          },
          {
            messageId: nanoid(),
            message: `Call me anytime.`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Sure apu. Don't panic plz.`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1324145,
        friendName: 'Nur E Sayeed Seemanto',
        isOnline: true,
        gender: 'male',
        nickName: null,
        age: 26,
        conversation: [
          {
            messageId: nanoid(),
            message: `Call me anytime.`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Sure vaia.`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1324146,
        friendName: 'Nur E Azad Diganto',
        isOnline: false,
        gender: 'male',
        nickName: null,
        age: 19,
        conversation: [
          {
            messageId: nanoid(),
            message: `Broh what's up?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `As usual bro!`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1324147,
        friendName: 'Samiat Sorgo',
        isOnline: true,
        gender: 'male',
        nickName: null,
        age: 22,
        conversation: [
          {
            messageId: nanoid(),
            message: `Where are you?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Besides the college. Come & do hurry.`,
            time: new Date(),
            fromMe: true
          }
        ]
      }
    ]
  },
  {
    userId: 2324140,
    friends: [
      {
        friendId: 2324141,
        friendName: 'Nadia Tabassum',
        isOnline: false,
        gender: 'female',
        nickName: null,
        age: 20,
        conversation: [
          {
            messageId: nanoid(),
            message: `What's up sis?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `As usual my friend!`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 2324142,
        friendName: 'Fahmida Momo',
        isOnline: true,
        gender: 'female',
        nickName: null,
        age: 19,
        conversation: [
          {
            messageId: nanoid(),
            message: `Where are you?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `I'm in the college.`,
            time: new Date(),
            fromMe: true
          }
        ]
      }      
    ]
  },
  {
    userId: 3324140,
    friends: [
      {
        friendId: 3324141,
        friendName: 'Khalid Ibn Walid',
        isOnline: true,
        gender: 'male',
        nickName: null,
        age: 32,
        conversation: [
          {
            messageId: nanoid(),
            message: `Broh what's up?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `As usual bro!`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1324147,
        friendName: 'Samiat Sorgo',
        isOnline: true,
        gender: 'male',
        nickName: null,
        age: 20,
        conversation: [
          {
            messageId: nanoid(),
            message: `You made my work done?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Slight is pending yet. Have patience.`,
            time: new Date(),
            fromMe: true
          }
        ]
      }
    ]
  }
];

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      const { userId, friendId, message, fromMe } = action.payload;
      const user = state.find(user => user.userId.toString() === userId);
      const friends = user.friends;
      const friend = friends.find(friend => friend.friendId.toString() === friendId);
      const otherFriends = friends.filter(friend => friend.friendId.toString() !== friendId);
      friend.conversation.push({
        messageId: nanoid(), message, time: new Date(), fromMe
      });
      user.friends = [friend, ...otherFriends];
    },
    setNickName: (state, action) => {
      const { userId, friendId, nName } = action.payload;
      const friend = state.find(user => user.userId.toString() === userId).friends
        .find(friend => friend.friendId.toString() === friendId);
      friend.nickName = nName;
    },
    removeNickName: (state, action) => {
      const { userId, friendId } = action.payload;
      const friend = state.find(user => user.userId.toString() === userId).friends
        .find(friend => friend.friendId.toString() === friendId);
      friend.nickName = null;
    }
  }
});

export const { sendMessage, setNickName, removeNickName } = conversationsSlice.actions;
export default conversationsSlice.reducer;