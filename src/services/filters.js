export const thumbnail = function (airtableRecordField) {
  if (airtableRecordField && airtableRecordField.length) {
    return airtableRecordField[0].thumbnails.large.url;
  }
};
