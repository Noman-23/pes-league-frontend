import moment from 'moment-timezone';

export const formatDate = (dateString, format) => {
  const date = moment(dateString).tz('Asia/Kolkata'); // Convert to Asia/Kolkata time zone

  if (format) {
    return date.format(format);
  }
  return date; // Fallback in case of invalid format
};
