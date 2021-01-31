import { gql, AuthenticationError } from 'apollo-server';
import { User, UserModel } from '../model/user';
import { comparePassword, getToken } from '../util/auth';
import Cookies from 'js-cookie';

export const userTypeDef = gql`
  type User {
    emailId: String
    password: String
    token: String
  }
`;

export const userResolver = {
  Query: {
    async me() {
      try {
        const user = await User.find();
        return user[user.length - 1];
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  Mutation: {
    async updatePassword(_: any, args: any) {
      try {
        const result = await User.create({
          emailId: args.emailId,
          password: args.password
        });
        return result;
      } catch (err) {
        throw err;
      }
    },

    async login(_: any, args: any, { res }: any) {
      try {
        const user = await User.find();
        const me: UserModel = user[user.length - 1];

        if (args.emailId === me.emailId) {
          const isMatch = await comparePassword(args.password, me.password);

          if (isMatch) {
            const token = getToken(me);
            me.token = token;

            res.cookie('token', token, {
              httpOnly: true,
              maxAge: 1000 * 60 * 60 // 1h
            });

            return me;
          } else {
            throw new AuthenticationError('이메일 또는 비밀번호가 맞지 않습니다.');
          }
        } else {
          throw new AuthenticationError('이메일 또는 비밀번호가 맞지 않습니다.');
        }
      } catch (err) {
        throw err;
      }
    }
  }
};
