import configDev from './config.dev.js';
import configProd from './config.prod.js';

const currentEnvironment =
  process.env.NODE_ENV === 'production' ? configProd : configDev;

export default currentEnvironment;
