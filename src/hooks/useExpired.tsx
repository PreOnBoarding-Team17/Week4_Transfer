import { DataInterface } from 'common/interface';

const expireState = (data: DataInterface | null) => {
  if (data && (data.expires_at + 2730000) * 1000 - new Date().getTime() > 0)
    return false;
  else return true;
};

export default expireState;
