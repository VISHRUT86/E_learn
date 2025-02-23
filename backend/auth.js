import Passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Person from './models/person.models.js';
// ✅ Import Person model

Passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Find user by username
      const user = await Person.findOne({ username });

      if (!user) {
        return done(null, false, { message: 'Incorrect Username.' });
      }

      // Compare password
      const isPasswordMatch = await user.comparePassword(password);

      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect Password.' });
      }
    } catch (err) {
      return done(err);
    }
  })
);

export default Passport; // ✅ Fixed export for ES Module
