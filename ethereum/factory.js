import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1332676AFa5D5e976615D8Be03955B0B8Ccd7809"
);

export default instance;
