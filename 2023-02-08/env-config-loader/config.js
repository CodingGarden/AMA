const { z } = require('zod');
const { fromZodError } = require('zod-validation-error');

require('dotenv').config();

// Only ever define the env names as strings here!
// Prevent typos everywhere else
const configNames = /** @type {const} */ ({
  PORT: 'PORT',
  DATABASE_URL: 'DATABASE_URL',
});

const configSchema = z.object({
  [configNames.DATABASE_URL]: z.string().trim().min(1),
  [configNames.PORT]: z.coerce.number().default(3000),
});

try {
  // throws error if DATABASE_URL missing!
  const config = configSchema.parse({
    [configNames.DATABASE_URL]: process.env.DATABASE_URL || '',
    [configNames.PORT]: process.env.PORT,
  });
} catch(err) {
  const validationError = fromZodError(err);
  throw new Error(validationError.message);
}

module.exports = config;


// // Level 1

// const configLevel1 = {
//   DATABASE_URL: process.env.DATABASE_URL || '',
// };

// // validate....
// module.exports = configLevel1;


// // Level 2

// const configLevel2 = {
//   [configNames.DATABASE_URL]: process.env.DATABASE_URL || '',
// };

// // validate

// module.exports = configLevel2;