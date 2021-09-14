import passport from 'passport';
import User from '../models/User';
import { jwtSecret } from '../config';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';

const opts: StrategyOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

export const TokenCheck = passport.authenticate('jwt', { session: false });

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id)
    return done(null, user || null);
    
  } catch(error) {
    return done(null, null);
  }
});