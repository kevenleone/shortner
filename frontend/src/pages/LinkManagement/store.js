const createCountries = () => [
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'US', name: 'United States', flag: '🇺🇲' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'CG', name: 'Congo', flag: '🇨🇬' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'FJ', name: 'Fiji', flag: '🇫🇯' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'HT', name: 'Haiti', flag: '🇭🇹' },
  { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'SO', name: 'Somalia', flag: '🇸🇴' },
  { code: 'TN', name: 'Tunisia', flag: '🇹🇳' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'ZM', name: 'Zambia', flag: '🇿🇲' },
];

const firstNames = [
  'Very long first name that will wrap or be truncated',
  'Another very long first name which will wrap or be truncated',
  'Clinton',
  'Igor',
  undefined,
  'Drew',
  null,
  'Rashid',
  undefined,
  'John',
];

const lastNames = [
  'Very long last name that will wrap or be truncated',
  'Another very long last name which will wrap or be truncated',
  'Gormley',
  'Motov',
  'Minarik',
  'Raines',
  'Král',
  'Khan',
  'Sissel',
  'Dorlus',
];

const github = [
  'martijnvg',
  'elissaw',
  'clintongormley',
  'imotov',
  'karmi',
  'drewr',
  'HonzaKral',
  'rashidkpc',
  'jordansissel',
  'silne30',
];

const dob = new Date(1980, 1, 1);

const index = 1;

const createUsers = (countries) => [...Array(24).keys()].map((i) => ({
  id: i,
  firstName: i < 10 ? firstNames[i] : firstNames[i - 10],
  lastName: i < 10 ? lastNames[i] : lastNames[i - 10],
  github: i < 10 ? github[i] : github[i - 10],
  dateOfBirth: dob,
  nationality: countries[i].code,
  online: i % 2 === 0,
}));

export const createDataStore = () => {
  const countries = createCountries();
  const users = createUsers(countries);

  return {
    countries,
    users,

    findUsers: (pageIndex, pageSize, sortField) => {
      let items;

      if (sortField) {
        items = users;
      } else {
        items = users;
      }

      let pageOfItems;

      if (!pageIndex && !pageSize) {
        pageOfItems = items;
      } else {
        const startIndex = pageIndex * pageSize;
        pageOfItems = items;
      }

      return {
        pageOfItems,
        totalItemCount: items.length,
      };
    },

    deleteUsers: (...ids) => {
      ids.forEach((id) => {
        const index = users.findIndex((user) => user.id === id);
        if (index >= 0) {
          users.splice(index, 1);
        }
      });
    },

    cloneUser: (id) => {
      const index = users.findIndex((user) => user.id === id);
      if (index >= 0) {
        const user = users[index];
        users.splice(index, 0, { ...user, id: users.length });
      }
    },

    getCountry: (code) => countries.find((country) => country.code === code),
  };
};
