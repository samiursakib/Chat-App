import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  {
    userId: 'fqfynmjPwSrhet3lwuh43',
    friends: [
      {
        friendId: 1000001,
        friendFullName: 'Andreas Peitschmann',
        gender: 'male',
				image: `${require('../images/AndreasPeitschmann.jpg')}`,
        isOnline: true,
        nickName: null,
        age: 22,
        conversation: [
          {
            messageId: nanoid(),
            message: `Are you there!`,
            time: new Date(),
            fromMe: false
          }
        ]
      },
      {
        friendId: 1000002,
        friendFullName: 'Maja Schone',
        gender: 'female',
				image: `${require('../images/MajaSchone.jpg')}`,
        isOnline: false,
        nickName: null,
        age: 20,
        conversation: [
          {
            messageId: nanoid(),
            message: `Hey how you're doing?`,
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
        friendId: 1000003,
        friendFullName: 'Jordis Triebel',
        gender: 'female',
				image: `${require('../images/JordisTriebel.jpg')}`,
        isOnline: true,
        nickName: null,
        age: 22,
        conversation: [
          {
            messageId: nanoid(),
            message: `Did you do it Sam?`,
            time: new Date(),
            fromMe: false
          },
          {
            messageId: nanoid(),
            message: `Obviously, that's finished two days ago!`,
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
        friendId: 1000004,
        friendFullName: 'Julika Jenkins',
        gender: 'female',
				image: `${require('../images/JulikaJenkins.jpg')}`,
        isOnline: true,
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
            message: `I see, I'll inform you.`,
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
            message: `Sure. Don't feel panic plz.`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1000005,
        friendFullName: 'Karoline Eichhorn',
        gender: 'female',
				image: `${require('../images/KarolineEichhorn.jpg')}`,
        isOnline: true,
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
            message: `okay honey.`,
            time: new Date(),
            fromMe: true
          }
        ]
      },
      {
        friendId: 1000006,
        friendFullName: 'Lisa Vicari',
        gender: 'female',
				image: `${require('../images/LisaVicari.jpg')}`,
        isOnline: false,
        nickName: null,
        age: 19,
        conversation: []
      },
      {
        friendId: 1000007,
        friendFullName: 'Nele Trebs',
        gender: 'female',
				image: `${require('../images/NeleTrebs.jpg')}`,
        isOnline: true,
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
      },
			{
				friendId: 1000008,
				friendFullName: 'Christian Parzold',
				gender: 'male',
				image: `${require('../images/ChristianParzold.jpg')}`,
				isOnline: false,
				nickName: null,
				age: 62,
				conversation: [
					{
						messageId: nanoid(),
						message: `Hey kid, where you heading?`,
						time: new Date(),
						fromMe: false
					},
					{
						messageId: nanoid(),
						message: `to New York grandpa`,
						time: new Date(),
						fromMe: true
					}
				]
			},
			{
				friendId: 1000009,
				friendFullName: 'Oliver Masucci',
				gender: 'male',
				image: `${require('../images/OliverMasucci.jpg')}`,
				isOnline: true,
				nickName: null,
				age: 31,
				conversation: [
					{
						messageId: nanoid(),
						message: `dad bring me chips please`,
						time: new Date(),
						fromMe: true
					},
					{
						messageId: nanoid(),
						message: `Sure baby, I'll bring for you.`,
						time: new Date(),
						fromMe: false
					}
				]
			},
			{
				friendId: 1000010,
				friendFullName: 'Stephan Kampwirth',
				gender: 'male',
				image: `${require('../images/StephanKampwirth.jpg')}`,
				isOnline: true,
				nickName: null,
				age: 19,
				conversation: []
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
    },
		setProfile: (state, action) => {
			const { userId } = action.payload;
			state.push({userId, friends: []});
		}
  }
});

export const { sendMessage, setNickName, removeNickName, setProfile } = conversationsSlice.actions;
export default conversationsSlice.reducer;