import moment from 'moment';

export const getTimeDate = (date = new Date()) => {
  if (!date) {
    return null;
  }
  return moment(date).format('MMM D, YYYY h:mm a');
};

export const getDate = (date = new Date()) => {
  if (!date) {
    return null;
  }
  return moment(date).format('dddd, D MMMM, YYYY');
};
